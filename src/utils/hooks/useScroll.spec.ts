import { renderHook } from "@testing-library/react"

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

  if (typeof x !== undefined) {
    Object.defineProperty(window, "pageXOffset", {
      ...windowPropsConfig,
      value: x,
    })
  }

  if (typeof y !== undefined) {
    Object.defineProperty(window, "pageYOffset", {
      ...windowPropsConfig,
      value: y,
    })
  }

  window.dispatchEvent(new Event("resize"))
}

/**
 * TODO: Simulate scroll event correctly within jsdom
 *
 * For more info, see:
 * https://github.com/testing-library/user-event/issues/475
 * https://stackoverflow.com/questions/62993144/test-scrolling-in-a-react-window-list-with-react-testing-library
 */
describe("useScroll", () => {
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
})
