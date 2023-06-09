import { createRef } from "react"
import { renderHook, render, screen, waitFor } from "@testing-library/react"

import userEvent from "@testing-library/user-event"

import { useClickOutside } from "./useClickOutside"

describe("useClickOutside", () => {
  it("fires the callback when clicking outside of the element", async () => {
    const mockCb = jest.fn()
    const ref = createRef<HTMLDivElement>()

    const MockComponent = () => (
      <div data-testid="wrapper">
        <div ref={ref} data-testid="target"></div>
      </div>
    )

    render(<MockComponent />)
    renderHook(() => useClickOutside(ref, mockCb))

    userEvent.click(screen.getByTestId("wrapper"))

    await waitFor(() => expect(mockCb).toBeCalledTimes(1))
  })

  it(`doesn't fire the callback when clicking the element`, async () => {
    const mockCb = jest.fn()
    const ref = createRef<HTMLDivElement>()

    const MockComponent = () => (
      <div data-testid="wrapper">
        <div ref={ref} data-testid="target"></div>
      </div>
    )

    render(<MockComponent />)
    renderHook(() => useClickOutside(ref, mockCb))

    userEvent.click(screen.getByTestId("target"))

    await waitFor(() => expect(mockCb).not.toBeCalled())
  })
})
