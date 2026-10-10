import { act, render } from "@testing-library/react"

import { DISABLE_SCROLL_CLASSNAME } from "@constants/dom"
import { PageProvider } from "@utils/context/PageContext"

import SplashScreenUI from "./SplashScreenUI"
import { TOTAL_DURATION } from "./animation"

const originalMatchMedia = window.matchMedia

const setReducedMotion = (matches: boolean) => {
  Object.defineProperty(window, "matchMedia", {
    configurable: true,
    value: jest.fn().mockReturnValue({
      matches,
      addEventListener: jest.fn(),
      removeEventListener: jest.fn(),
    }),
  })
}

afterEach(() => {
  jest.useRealTimers()

  Object.defineProperty(window, "matchMedia", {
    configurable: true,
    value: originalMatchMedia,
  })

  document.documentElement.classList.remove(DISABLE_SCROLL_CLASSNAME)
})

describe("SplashScreenUI", () => {
  it("skips the splash and scroll lock when reduced motion is requested", () => {
    setReducedMotion(true)

    const { container } = render(
      <PageProvider>
        <SplashScreenUI />
      </PageProvider>
    )

    expect(container).toBeEmptyDOMElement()
    expect(document.documentElement).not.toHaveClass(DISABLE_SCROLL_CLASSNAME)
  })

  it("plays and releases the splash normally", () => {
    setReducedMotion(false)
    jest.useFakeTimers()

    const { container } = render(
      <PageProvider>
        <SplashScreenUI />
      </PageProvider>
    )

    expect(container).not.toBeEmptyDOMElement()
    expect(document.documentElement).toHaveClass(DISABLE_SCROLL_CLASSNAME)

    act(() => jest.advanceTimersByTime(TOTAL_DURATION * 1000))

    expect(container).toBeEmptyDOMElement()
    expect(document.documentElement).not.toHaveClass(DISABLE_SCROLL_CLASSNAME)
  })
})
