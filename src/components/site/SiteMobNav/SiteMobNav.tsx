import { useState, useEffect } from "react"
import { usePathname } from "next/navigation"
import { motion } from "framer-motion"

// Types
import { Directions } from "@ts/global"

// Constants
import { routes } from "@constants/routes"

// Utils
import { disableScroll } from "@utils/domHelper"
import { useWindowSize } from "@utils/hooks/useWindowSize"

// Styles
import * as S from "./styles"
import { breakpoints } from "@styles/utils/mediaQueries"

// Components
import SocialLinks from "@components/generic/SocialLinks"

// Animation
import { getListAnimProps, itemVariants, getSocialAnimProps } from "./animation"

export interface Props {
  scrollYDirection: Directions | null
}

// Setup
const navLinks = [
  routes.about,
  routes.work,
  routes.cases,
  routes.experience,
  routes.contact,
]

const SiteMobNav: React.FC<Props> = ({ scrollYDirection }) => {
  const [isOpen, setIsOpen] = useState<boolean>(false)

  const windowSize = useWindowSize()
  const pathname = usePathname()

  const animProps = {
    list: getListAnimProps(isOpen),
    social: getSocialAnimProps(isOpen),
  }

  // prettier-ignore
  const hasScrolledDown = scrollYDirection === null
    ? false
    : scrollYDirection === Directions.Down

  // Handlers
  const toggle = (newState: boolean) => {
    setIsOpen(newState)
    disableScroll(document.documentElement, newState)
  }

  const handleOnToggle = () => {
    toggle(!isOpen)
  }

  const handleOnLinkClick = () => {
    toggle(false)
  }

  // Hooks

  // Close on route change
  useEffect(() => {
    // NOTE: Let PageTransitionUI deal with the scroll-lock

    setIsOpen(false)
  }, [pathname])

  // Close on ESC
  useEffect(() => {
    const handleOnKeydown = (e: KeyboardEvent) => {
      if (isOpen && e.key === "Escape") {
        toggle(false)
      }
    }

    document.addEventListener("keydown", handleOnKeydown)

    return () => document.removeEventListener("keydown", handleOnKeydown)
  }, [isOpen])

  // Reset behaviour on larger devices
  useEffect(() => {
    if (!isOpen || !windowSize.width || windowSize.width < breakpoints.M) return

    toggle(false)
  }, [isOpen, windowSize.width])

  return (
    <S.Wrapper>
      <S.Backdrop $isOpen={isOpen} $hasScrolledDown={hasScrolledDown} />

      <S.NavBar $isOpen={isOpen} $hasScrolledDown={hasScrolledDown}>
        <S.LogoLink href="/" aria-label="Homepage" onClick={handleOnLinkClick}>
          <S.Logo $isOpen={isOpen} id="mob" />
        </S.LogoLink>

        <S.Toggle
          $isOpen={isOpen}
          onClick={handleOnToggle}
          aria-label="Toggle mobile navigation"
        >
          <S.ToggleLine $isOpen={isOpen} />
          <S.ToggleLine $isOpen={isOpen} />
          <S.ToggleLine $isOpen={isOpen} />
        </S.Toggle>
      </S.NavBar>

      <S.NavContent $isOpen={isOpen}>
        <S.NavContentInner>
          <S.NavList {...animProps.list}>
            {navLinks.map((item) => {
              const { label, href } = item

              if (!label || !href) return null

              return (
                <S.NavItem key={label} variants={itemVariants}>
                  <S.NavItemLink href={href} onClick={handleOnLinkClick}>
                    {label}
                  </S.NavItemLink>
                </S.NavItem>
              )
            })}

            <S.NavItem variants={itemVariants}>
              <S.NavItemLinkResume href={routes.resume.href}>
                {routes.resume.label}
              </S.NavItemLinkResume>
            </S.NavItem>
          </S.NavList>

          <motion.div {...animProps.social}>
            <S.Social>
              <S.SocialDescription>find me on</S.SocialDescription>

              <SocialLinks option="light" />
            </S.Social>
          </motion.div>
        </S.NavContentInner>
      </S.NavContent>
    </S.Wrapper>
  )
}

export default SiteMobNav
