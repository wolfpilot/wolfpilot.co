import { createElement } from "react"
import { renderToString } from "react-dom/server"
import { act, render, renderHook } from "@testing-library/react"

import { useWindowSize } from "./useWindowSize"

/**
 * Update the pre-defined jsdom window object
 *
 * For more info, see:
 * https://stackoverflow.com/a/60817030
 */
export const updateWindowSize = ({
  width,
  height,
}: {
  width?: number
  height?: number
}) => {
  const windowPropsConfig = {
    writable: true,
    configurable: true,
  }

  if (width !== undefined) {
    Object.defineProperty(window, "innerWidth", {
      ...windowPropsConfig,
      value: width,
    })
  }

  if (height !== undefined) {
    Object.defineProperty(window, "innerHeight", {
      ...windowPropsConfig,
      value: height,
    })
  }

  window.dispatchEvent(new Event("resize"))
}

describe("useWindowSize", () => {
  afterEach(() => {
    jest.restoreAllMocks()
    updateWindowSize({ width: 1024, height: 768 })
  })

  it("should get the default jsdom window width and height", () => {
    const { result } = renderHook(() => useWindowSize())

    expect(result.current.width).toBe(1024)
    expect(result.current.height).toBe(768)
  })

  it("should get the correct window width and height on update", () => {
    updateWindowSize({
      width: 1920,
      height: 1080,
    })

    const { result } = renderHook(() => useWindowSize())

    expect(result.current.width).toBe(1920)
    expect(result.current.height).toBe(1080)
  })

  it("coalesces resize events into one frame", () => {
    let frame: FrameRequestCallback | undefined
    const requestFrame = jest
      .spyOn(window, "requestAnimationFrame")
      .mockImplementation((callback) => {
        frame = callback
        return 1
      })

    const { result } = renderHook(() => useWindowSize())
    const initial = result.current

    act(() => {
      updateWindowSize({ width: 1200, height: 800 })
      updateWindowSize({ width: 1400, height: 900 })
    })

    expect(requestFrame).toHaveBeenCalledTimes(1)
    expect(result.current).toBe(initial)

    act(() => frame?.(0))

    expect(result.current).toEqual({ width: 1400, height: 900 })
  })

  it("shares one listener and cancels a pending frame on final unsubscribe", () => {
    const addListener = jest.spyOn(window, "addEventListener")
    const removeListener = jest.spyOn(window, "removeEventListener")
    jest.spyOn(window, "requestAnimationFrame").mockReturnValue(7)
    const cancelFrame = jest.spyOn(window, "cancelAnimationFrame")

    const { unmount: unmountFirst } = renderHook(() => useWindowSize())
    const { unmount: unmountSecond } = renderHook(() => useWindowSize())

    expect(
      addListener.mock.calls.filter(([event]) => event === "resize")
    ).toHaveLength(1)

    act(() => updateWindowSize({ width: 1200 }))
    unmountFirst()
    expect(
      removeListener.mock.calls.filter(([event]) => event === "resize")
    ).toHaveLength(0)

    unmountSecond()
    expect(cancelFrame).toHaveBeenCalledWith(7)
    expect(
      removeListener.mock.calls.filter(([event]) => event === "resize")
    ).toHaveLength(1)
  })

  it("uses null dimensions for server rendering and hydrates to client dimensions", () => {
    const Probe = () => {
      const { width, height } = useWindowSize()
      return createElement("span", null, `${width}x${height}`)
    }
    const container = document.createElement("div")
    container.innerHTML = renderToString(createElement(Probe))
    document.body.appendChild(container)

    expect(container.textContent).toBe("nullxnull")

    const consoleError = jest
      .spyOn(console, "error")
      .mockImplementation(() => {})
    const { unmount } = render(createElement(Probe), {
      container,
      hydrate: true,
    })

    expect(container.textContent).toBe("1024x768")
    expect(consoleError).not.toHaveBeenCalled()

    unmount()
    container.remove()
  })
})
