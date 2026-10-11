import { usePathname } from "next/navigation"
import { useNextNavigationEvent } from "use-next-navigation-event"
import { AnimatePresence } from "motion/react"
import { useEffect, useRef } from "react"

// Utils
import { disableScroll } from "@utils/domHelper"
import {
  prefersReducedMotion,
  usePrefersReducedMotion,
} from "@utils/hooks/usePrefersReducedMotion"

// Styles
import * as S from "./styles"

// Animation
import {
  ANIM_COVER_DURATION,
  ANIM_SWIPER_DURATION,
  swiperAnimProps,
  coverAnimProps,
  contentAnimProps,
} from "./animation"

export interface Props {
  children?: React.ReactNode
}

export interface ScrollPosition {
  x: number
  y: number
}

// Setup

// Time until the next page is loaded
const TRANSITION_DELAY = (ANIM_COVER_DURATION + ANIM_SWIPER_DURATION) * 1000

// Safety margin due to variance in loading new pages
const SCROLL_JUMP_DELAY = 50

const saveScrollPos = (url: string) => {
  const scrollPosition: ScrollPosition = {
    x: window.scrollX,
    y: window.scrollY,
  }

  sessionStorage.setItem(`scrollPos:${url}`, JSON.stringify(scrollPosition))
}

const restoreScrollPos = (url: string, delay: number) => {
  const json = sessionStorage.getItem(`scrollPos:${url}`)

  if (!json) return

  const scrollPos: ScrollPosition = JSON.parse(json)

  setTimeout(() => {
    window.scrollTo({ left: scrollPos.x, top: scrollPos.y })
  }, delay)
}

const scrollToTop = (delay: number) => {
  setTimeout(() => {
    window.scrollTo({ left: 0, top: 0 })
  }, delay)
}

const scrollToElement = (id: string, delay: number) => {
  setTimeout(() => {
    const elem = document.getElementById(id)
    const elemOffset = elem?.offsetTop

    window.scrollTo({ left: 0, top: elemOffset })
  }, delay)
}

const PageTransitionUI: React.FC<Props> = ({ children }: Props) => {
  const pathname = usePathname()
  const reducedMotion = usePrefersReducedMotion()
  const unlockTimer = useRef<ReturnType<typeof setTimeout> | null>(null)

  useEffect(() => {
    if (reducedMotion) disableScroll(document.documentElement, false)
  }, [reducedMotion])

  // Hooks

  /**
   * Next already has an experimental flag "scrollRestoration", however
   * it's a bit wonky and doesn't suit our needs.
   *
   * By default, any route change scrolls the page to the top, even when
   * navigating using the browser back & forward buttons, which sucks.
   *
   * This behaviour can be disabled by passing the "scroll" prop to Next's
   * Link component, which in turn causes the page to not scroll to the top
   * at all, even when it would be desirable such as clicking on any internal
   * link.
   *
   * As a work-around, we can hack into the router events where we can specify
   * the exact behaviours we'd like to happen. In our case, the window should
   * scroll only after the current content has disappeared off the page, but
   * more precisely:
   *
   * - Links should always scroll to the top
   * - Browser navigation should scroll to the last known position
   *
   * For more info, see:
   * https://github.com/vercel/next.js/issues/3303
   */
  useNextNavigationEvent({
    onRouteChangeStart: ({ newUrl, oldUrl }) => {
      if (newUrl === oldUrl) return

      if (unlockTimer.current) clearTimeout(unlockTimer.current)
      saveScrollPos(oldUrl)
      disableScroll(document.documentElement, !prefersReducedMotion())
    },
    onRouteChangeComplete: ({ type, newUrl, oldUrl }) => {
      if (newUrl === oldUrl) return

      const scrollDelay =
        (prefersReducedMotion() ? 0 : TRANSITION_DELAY) + SCROLL_JUMP_DELAY

      // Handle clicking on the browser buttons
      if (type === "BACK_OR_FORWARD") {
        restoreScrollPos(newUrl, scrollDelay)
      }

      // Handle clicking on an internal link
      if (type === "REGULAR_NAVIGATION") {
        const target = newUrl.split("#")[1]

        target ? scrollToElement(target, scrollDelay) : scrollToTop(scrollDelay)
      }

      // Release the lock after the new content and scroll position settle.
      unlockTimer.current = setTimeout(() => {
        disableScroll(document.documentElement, false)
        unlockTimer.current = null
      }, scrollDelay)
    },
  })

  if (reducedMotion) return <>{children}</>

  return (
    <AnimatePresence initial={false} mode="wait">
      <S.Wrapper key={pathname}>
        <S.Cover {...coverAnimProps} />
        <S.Swiper {...swiperAnimProps} />
        <S.Content {...contentAnimProps}>{children}</S.Content>
      </S.Wrapper>
    </AnimatePresence>
  )
}

export default PageTransitionUI
