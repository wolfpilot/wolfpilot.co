import { renderHook } from "@testing-library/react"

import { useWindowSize } from "./useWindowSize"

/**
 * Update the pre-defined jsdom window object
 *
 * For more info, see:
 * https://stackoverflow.com/a/60817030
 */
const updateWindowWidthAndHeight = (newWidth: number, newHeight: number) => {
  const windowPropsConfig = {
    writable: true,
    configurable: true,
  }

  Object.defineProperty(window, "innerWidth", {
    ...windowPropsConfig,
    value: newWidth,
  })
  Object.defineProperty(window, "innerHeight", {
    ...windowPropsConfig,
    value: newHeight,
  })

  window.dispatchEvent(new Event("resize"))
}

it("should get the default jsdom window width and height", () => {
  const { result } = renderHook(() => useWindowSize())

  expect(result.current.width).toBe(1024)
  expect(result.current.height).toBe(768)
})

it("should get the correct window width and height on update", () => {
  updateWindowWidthAndHeight(1920, 1080)

  const { result } = renderHook(() => useWindowSize())

  expect(result.current.width).toBe(1920)
  expect(result.current.height).toBe(1080)
})
