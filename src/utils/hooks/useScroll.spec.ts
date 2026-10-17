import { createElement } from "react"
import { renderToString } from "react-dom/server"
import { act, render, renderHook } from "@testing-library/react"

import { Directions } from "@ts/global"

import { useScroll } from "./useScroll"

/**
 * Update the pre-defined jsdom window object
 *
 * For more info, see:
 * https://stackoverflow.com/a/60817030
 */
export const updateWindowScroll = ({ x, y }: { x?: number; y?: number }) => {
  const windowPropsConfig = {
    writable: true,
    configurable: true,
  }

  if (x !== undefined) {
    Object.defineProperty(window, "scrollX", {
      ...windowPropsConfig,
      value: x,
    })
  }

  if (y !== undefined) {
    Object.defineProperty(window, "scrollY", {
      ...windowPropsConfig,
      value: y,
    })
  }

  window.dispatchEvent(new Event("scroll"))
}

describe("useScroll", () => {
  afterEach(() => {
    jest.restoreAllMocks()
    updateWindowScroll({ x: 0, y: 0 })
  })

  it("should get the default jsdom window scroll position", () => {
    const { result } = renderHook(() => useScroll())

    expect(result.current.offset.x).toBe(0)
    expect(result.current.offset.y).toBe(0)
    expect(result.current.direction.x).toBe(null)
    expect(result.current.direction.y).toBe(null)
  })

  it("should get the correct window scroll position on update", () => {
    updateWindowScroll({
      x: 50,
      y: 200,
    })

    const { result } = renderHook(() => useScroll())

    expect(result.current.offset.x).toBe(50)
    expect(result.current.offset.y).toBe(200)
    expect(result.current.direction.x).toBe(null)
    expect(result.current.direction.y).toBe(null)
  })

  it("coalesces scroll events and reports direction from the previous frame", () => {
    let frame: FrameRequestCallback | undefined
    const requestFrame = jest
      .spyOn(window, "requestAnimationFrame")
      .mockImplementation((callback) => {
        frame = callback
        return 1
      })

    const { result } = renderHook(() => useScroll())
    const initial = result.current

    act(() => {
      updateWindowScroll({ x: 40, y: 80 })
      updateWindowScroll({ x: 50, y: 200 })
    })

    expect(requestFrame).toHaveBeenCalledTimes(1)
    expect(result.current).toBe(initial)

    act(() => frame?.(0))
    expect(result.current.offset).toEqual({ x: 50, y: 200 })
    expect(result.current.direction).toEqual({
      x: Directions.Right,
      y: Directions.Down,
    })

    act(() => updateWindowScroll({ x: 20, y: 100 }))
    act(() => frame?.(0))
    expect(result.current.direction).toEqual({
      x: Directions.Left,
      y: Directions.Up,
    })
  })

  it("keeps one listener through updates and cancels a pending frame on final unsubscribe", () => {
    const addListener = jest.spyOn(window, "addEventListener")
    const removeListener = jest.spyOn(window, "removeEventListener")
    let frame: FrameRequestCallback | undefined
    jest
      .spyOn(window, "requestAnimationFrame")
      .mockImplementation((callback) => {
        frame = callback
        return 7
      })
    const cancelFrame = jest.spyOn(window, "cancelAnimationFrame")

    const { result, unmount: unmountFirst } = renderHook(() => useScroll())

    act(() => updateWindowScroll({ y: 25 }))
    act(() => frame?.(0))
    const { result: secondResult, unmount: unmountSecond } = renderHook(() =>
      useScroll()
    )
    expect(result.current.direction.y).toBe(Directions.Down)
    expect(secondResult.current.direction.y).toBe(Directions.Down)
    expect(
      addListener.mock.calls.filter(([event]) => event === "scroll")
    ).toHaveLength(1)
    expect(
      removeListener.mock.calls.filter(([event]) => event === "scroll")
    ).toHaveLength(0)

    unmountFirst()
    act(() => updateWindowScroll({ y: 30 }))
    unmountSecond()
    expect(cancelFrame).toHaveBeenCalledWith(7)
    expect(
      removeListener.mock.calls.filter(([event]) => event === "scroll")
    ).toHaveLength(1)
  })

  it("uses null offsets on the server and hydrates to the current scroll position", () => {
    updateWindowScroll({ x: 25, y: 75 })
    const Probe = () => {
      const { offset, direction } = useScroll()
      return createElement(
        "span",
        null,
        `${offset.x},${offset.y},${direction.x},${direction.y}`
      )
    }
    const container = document.createElement("div")
    container.innerHTML = renderToString(createElement(Probe))
    document.body.appendChild(container)

    expect(container.textContent).toBe("null,null,null,null")

    const consoleError = jest
      .spyOn(console, "error")
      .mockImplementation(() => {})
    const { unmount } = render(createElement(Probe), {
      container,
      hydrate: true,
    })

    expect(container.textContent).toBe("25,75,null,null")
    expect(consoleError).not.toHaveBeenCalled()

    unmount()
    container.remove()
  })
})
