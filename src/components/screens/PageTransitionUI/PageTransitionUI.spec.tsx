import { act, render, screen } from "@testing-library/react"
import { useNextNavigationEvent } from "use-next-navigation-event"

import { DISABLE_SCROLL_CLASSNAME } from "@constants/dom"

import PageTransitionUI from "./PageTransitionUI"

jest.mock("next/navigation", () => ({ usePathname: () => "/" }))
jest.mock("use-next-navigation-event", () => ({
  useNextNavigationEvent: jest.fn(),
}))

const originalMatchMedia = window.matchMedia
const mediaListeners = new Set<() => void>()
const media = {
  matches: true,
  addEventListener: jest.fn((_event: string, listener: () => void) => {
    mediaListeners.add(listener)
  }),
  removeEventListener: jest.fn((_event: string, listener: () => void) => {
    mediaListeners.delete(listener)
  }),
  addListener: jest.fn((listener: () => void) => {
    mediaListeners.add(listener)
  }),
  removeListener: jest.fn((listener: () => void) => {
    mediaListeners.delete(listener)
  }),
}

beforeEach(() => {
  media.matches = true
  Object.defineProperty(window, "matchMedia", {
    configurable: true,
    value: jest.fn().mockReturnValue(media),
  })
})

afterEach(() => {
  jest.useRealTimers()
  jest.clearAllMocks()
  mediaListeners.clear()

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

  it("uses the current preference in callbacks captured before hydration finishes", () => {
    media.matches = false
    jest.useFakeTimers()

    render(
      <PageTransitionUI>
        <p>Case content</p>
      </PageTransitionUI>
    )

    const callbacks = jest.mocked(useNextNavigationEvent).mock.calls[0][0]

    act(() => {
      media.matches = true
      mediaListeners.forEach((listener) => listener())
    })

    act(() =>
      callbacks.onRouteChangeStart?.({
        type: "REGULAR_NAVIGATION",
        oldUrl: "/",
        newUrl: "/cases/cawr",
        options: {},
      })
    )

    expect(document.documentElement).not.toHaveClass(DISABLE_SCROLL_CLASSNAME)
  })

  it("releases the normal-motion lock after route completion", () => {
    media.matches = false
    jest.useFakeTimers()

    render(
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

    act(() => callbacks.onRouteChangeStart?.(navigation))
    expect(document.documentElement).toHaveClass(DISABLE_SCROLL_CLASSNAME)

    act(() => callbacks.onRouteChangeComplete?.(navigation))
    act(() => jest.advanceTimersByTime(2050))

    expect(document.documentElement).not.toHaveClass(DISABLE_SCROLL_CLASSNAME)
    expect(window.scrollTo).toHaveBeenCalledWith({ left: 0, top: 0 })
  })
})
