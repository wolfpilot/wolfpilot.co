import { usePathname } from "next/navigation"
import { useNextNavigationEvent } from "use-next-navigation-event"
import { AnimatePresence } from "framer-motion"

// Utils
import { disableScroll } from "@utils/domHelper"

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

const restoreScrollPos = (url: string) => {
  const json = sessionStorage.getItem(`scrollPos:${url}`)

  if (!json) return

  const scrollPos: ScrollPosition = JSON.parse(json)

  setTimeout(() => {
    window.scrollTo({ left: scrollPos.x, top: scrollPos.y })
  }, TRANSITION_DELAY + SCROLL_JUMP_DELAY)
}

const scrollToTop = () => {
  setTimeout(() => {
    window.scrollTo({ left: 0, top: 0 })
  }, TRANSITION_DELAY + SCROLL_JUMP_DELAY)
}

const scrollToElement = (id: string) => {
  setTimeout(() => {
    const elem = document.getElementById(id)
    const elemOffset = elem?.offsetTop

    window.scrollTo({ left: 0, top: elemOffset })
  }, TRANSITION_DELAY + SCROLL_JUMP_DELAY)
}

const PageTransitionUI: React.FC<Props> = ({ children }: Props) => {
  const pathname = usePathname()

  // Handlers
  const handleAnimComplete = () => {
    setTimeout(() => {
      disableScroll(document.documentElement, false)
    }, SCROLL_JUMP_DELAY)
  }

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

      saveScrollPos(oldUrl)

      setTimeout(() => {
        disableScroll(document.documentElement, true)
      }, SCROLL_JUMP_DELAY)
    },
    onRouteChangeComplete: ({ type, newUrl, oldUrl }) => {
      if (newUrl === oldUrl) return

      // Handle clicking on the browser buttons
      if (type === "BACK_OR_FORWARD") {
        restoreScrollPos(newUrl)
      }

      // Handle clicking on an internal link
      if (type === "REGULAR_NAVIGATION") {
        const target = newUrl.split("#")[1]

        target ? scrollToElement(target) : scrollToTop()
      }
    },
  })

  return (
    <AnimatePresence
      initial={false}
      mode="wait"
      onExitComplete={handleAnimComplete}
    >
      <S.Wrapper key={pathname}>
        <S.Cover {...coverAnimProps} />
        <S.Swiper {...swiperAnimProps} />
        <S.Content {...contentAnimProps}>{children}</S.Content>
      </S.Wrapper>
    </AnimatePresence>
  )
}

export default PageTransitionUI
