import { act, render, screen } from "@testing-library/react"
import { useNextNavigationEvent } from "use-next-navigation-event"

import { DISABLE_SCROLL_CLASSNAME } from "@constants/dom"

import PageTransitionUI from "./PageTransitionUI"

jest.mock("next/navigation", () => ({ usePathname: () => "/" }))
jest.mock("use-next-navigation-event", () => ({
  useNextNavigationEvent: jest.fn(),
}))

const originalMatchMedia = window.matchMedia

beforeEach(() => {
  Object.defineProperty(window, "matchMedia", {
    configurable: true,
    value: jest.fn().mockReturnValue({
      matches: true,
      addEventListener: jest.fn(),
      removeEventListener: jest.fn(),
    }),
  })
})

afterEach(() => {
  jest.useRealTimers()
  jest.clearAllMocks()

  Object.defineProperty(window, "matchMedia", {
    configurable: true,
    value: originalMatchMedia,
  })

  document.documentElement.classList.remove(DISABLE_SCROLL_CLASSNAME)
})

describe("PageTransitionUI", () => {
  it("shows the next page without a wipe or scroll lock", () => {
    jest.useFakeTimers()

    const { container } = render(
      <PageTransitionUI>
        <p>Case content</p>
      </PageTransitionUI>
    )

    const callbacks = jest.mocked(useNextNavigationEvent).mock.calls[0][0]

    const navigation = {
      type: "REGULAR_NAVIGATION" as const,
      oldUrl: "/",
      newUrl: "/cases/cawr",
      options: {},
    }

    expect(screen.getByText("Case content")).toBeVisible()
    expect(container.firstElementChild?.tagName).toBe("P")

    act(() => callbacks.onRouteChangeStart?.(navigation))
    expect(document.documentElement).not.toHaveClass(DISABLE_SCROLL_CLASSNAME)

    act(() => callbacks.onRouteChangeComplete?.(navigation))
    act(() => jest.advanceTimersByTime(50))

    expect(window.scrollTo).toHaveBeenCalledWith({ left: 0, top: 0 })
  })
})
