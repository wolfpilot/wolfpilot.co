import { renderHook, fireEvent } from "@testing-library/react"

import { useMousePosition } from "./useMousePosition"

describe("useMousePosition", () => {
  it("renders correctly", () => {
    const { result } = renderHook(() => useMousePosition())

    expect(result.current.x).toBe(null)
    expect(result.current.y).toBe(null)

    fireEvent.mouseMove(window, {
      clientX: 200,
      clientY: 400,
    })

    expect(result.current.x).toBe(200)
    expect(result.current.y).toBe(400)
  })
})
