import Link from "next/link"
import { useState } from "react"
import styled from "styled-components"
import { Variants, motion } from "framer-motion"

// Constants
import { routes } from "@constants/routes"

// Styles
import { mq } from "@styles/utils/mediaQueries"
import { zIndexes } from "@styles/zIndexes"
import { ease, duration } from "@styles/animation"

// Components
import LogoComponent from "@components/logo/Logo"
import SocialComponent from "@components/generic/Social"

export interface Props {}

// Setup
const listVariants: Variants = {
  hidden: {
    visibility: "hidden",
    transition: {
      staggerChildren: 0,
      staggerDirection: -1,
    },
  },
  visible: {
    visibility: "visible",
    transition: {
      when: "beforeChildren",
      delay: duration.medium,
      staggerChildren: duration.veryFast,
    },
  },
}

const itemVariants: Variants = {
  hidden: {
    opacity: 0,
    y: 16,
  },
  visible: {
    opacity: 1,
    y: 0,
  },
}

const socialVariants: Variants = {
  hidden: {
    visibility: "hidden",
    opacity: 0,
    y: 16,
  },
  visible: {
    visibility: "visible",
    opacity: 1,
    y: 0,
    transition: {
      delay: duration.medium + Object.keys(routes).length * duration.veryFast,
    },
  },
}

const SiteMobNav: React.FC<Props> = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false)

  const handleOnClick = () => {
    setIsOpen(!isOpen)
  }

  return (
    <Wrapper>
      <NavBar>
        <Link href="/" aria-label="Homepage">
          <Logo $isOpen={isOpen} />
        </Link>
        <Toggle $isOpen={isOpen} onClick={handleOnClick}>
          <ToggleLine $isOpen={isOpen} />
          <ToggleLine $isOpen={isOpen} />
          <ToggleLine $isOpen={isOpen} />
        </Toggle>
      </NavBar>

      <NavContent $isOpen={isOpen}>
        <NavContentInner>
          <NavList
            variants={listVariants}
            initial="hidden"
            animate={isOpen ? "visible" : "hidden"}
          >
            {Object.keys(routes).map((key) => {
              const { label, url } = routes[key]

              if (!label || !url) return null

              return (
                <NavItem key={label} variants={itemVariants}>
                  <NavItemLink href={url}>{label}</NavItemLink>
                </NavItem>
              )
            })}
          </NavList>

          <motion.div
            variants={socialVariants}
            initial="hidden"
            animate={isOpen ? "visible" : "hidden"}
          >
            <SocialComponent />
          </motion.div>
        </NavContentInner>
      </NavContent>
    </Wrapper>
  )
}

const Wrapper = styled.nav`
  ${mq.from.M`
    display: none;
  `}
`

const NavBar = styled.div`
  position: fixed;
  z-index: ${zIndexes.siteNav};
  top: 0;
  right: 0;
  left: 0;
  display: flex;
  justify-content: space-between;
  height: var(--site-header-height);
  padding: calc(2 * var(--base-gutter));
`

const Logo = styled(LogoComponent)<{ $isOpen: boolean }>`
  width: auto;
  height: 100%;

  g > {
    g,
    path {
      transition: opacity ${duration.medium}s ${ease.default};
    }

    // When open, hide everything but the logo letter
    *:not(:last-child) {
      ${({ $isOpen }) => $isOpen && `opacity: 0;`}
    }
  }
`

const ToggleLine = styled.span<{ $isOpen: boolean }>`
  width: 100%;
  height: 4px;
  border-radius: 2px;
  background-color: ${({ $isOpen }) =>
    $isOpen ? `var(--c-white)` : `var(--c-accent1)`};
  transition: background-color ${duration.medium}s ${ease.default},
    transform ${duration.medium}s ${ease.default};
`

const Toggle = styled.button<{ $isOpen: boolean }>`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  width: 30px;
  height: 100%;
  padding: 0;
  background: none;
  outline: none;
  border: none;

  ${ToggleLine} {
    &:nth-child(1) {
      transform: scaleX(1);

      ${({ $isOpen }) => $isOpen && `transform: scaleX(0);`}
    }

    &:nth-child(2) {
      transform: scaleX(0.85);

      ${({ $isOpen }) => $isOpen && `transform: scaleX(0.85);`}
    }

    &:nth-child(3) {
      transform: scaleX(0.7);

      ${({ $isOpen }) => $isOpen && `transform: scaleX(0);`}
    }
  }

  &:hover {
    ${ToggleLine} {
      &:nth-child(1) {
        transform: scaleX(1);

        ${({ $isOpen }) => $isOpen && `transform: scaleX(0);`}
      }

      &:nth-child(2) {
        transform: scaleX(1);

        ${({ $isOpen }) => $isOpen && `transform: scaleX(0.5);`}
      }

      &:nth-child(3) {
        transform: scaleX(1);

        ${({ $isOpen }) => $isOpen && `transform: scaleX(0);`}
      }
    }
  }
`

const NavContent = styled.div<{ $isOpen: boolean }>`
  position: fixed;
  z-index: ${zIndexes.siteNav - 1};
  top: 0;
  right: 0;
  left: 0;
  bottom: 0;
  padding: var(--base-gutter);
  background-color: var(--c-pageColor);
  transition: visibility ${duration.medium}s ${ease.cubic},
    opacity ${duration.medium}s ${ease.cubic};

  ${({ $isOpen }) =>
    $isOpen
      ? `
        visibility: visible;
        opacity: 1;
    `
      : `
        visibility: hidden;
        opacity: 0;
    `}
`

const NavContentInner = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100%;
  padding-top: var(--site-header-height);
  padding-bottom: var(--base-gutter);
  border-radius: var(--border-radius-sml);
  background-color: var(--c-accent1);
  text-align: center;
`

const NavList = styled(motion.ul)`
  list-style: none;
  margin: 0;
  padding: calc(2 * var(--base-gutter)) 0;
`

const NavItem = styled(motion.li)`
  text-transform: lowercase;

  &:not(:last-of-type) {
    margin-bottom: calc(2 * var(--base-gutter));
  }
`

const NavItemLink = styled(Link)`
  color: var(--c-white);
  font-size: 32px;
  transition: color ${duration.medium}s ${ease.cubic};

  &:hover {
    color: var(--c-black);
  }
`

export default SiteMobNav
