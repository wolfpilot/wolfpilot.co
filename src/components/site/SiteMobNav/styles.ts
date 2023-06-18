import styled from "styled-components"
import { motion } from "framer-motion"

// Styles
import { mq } from "@styles/utils/mediaQueries"
import { listResetStyles } from "@styles/list"
import { zIndexes } from "@styles/zIndexes"
import { textStyles } from "@styles/textStyles"
import { ease, duration } from "@styles/animation"

// Components
import InternalLink from "@components/generic/InternalLink"
import LogoComponent from "@components/logo/Logo"

export const Wrapper = styled.nav`
  height: 100%;

  ${mq.from.M`
    display: none;
  `}
`

export const LogoLink = styled(InternalLink)`
  display: block;
`

export const Logo = styled(LogoComponent)<{ $isOpen: boolean }>`
  width: 75px;
  height: auto;

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

export const Social = styled.div``

export const SocialDescription = styled.div`
  ${textStyles.copyL};
  margin-bottom: var(--spacing-default);
  color: var(--c-white);
`

export const NavBar = styled.div`
  position: relative;
  z-index: ${zIndexes.siteNav};
  display: flex;
  height: 100%;
  justify-content: space-between;
  height: var(--site-header-height);
  padding: var(--spacing-default);
`

export const ToggleLine = styled.span<{ $isOpen: boolean }>`
  width: 100%;
  height: 4px;
  border-radius: 2px;
  background-color: ${({ $isOpen }) =>
    $isOpen ? `var(--c-white)` : `var(--c-accent1)`};
  transition: background-color ${duration.medium}s ${ease.default},
    transform ${duration.medium}s ${ease.default};
`

export const Toggle = styled.button<{ $isOpen: boolean }>`
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

export const NavContent = styled.div<{ $isOpen: boolean }>`
  position: fixed;
  z-index: ${zIndexes.siteNav - 1};
  top: 0;
  right: 0;
  left: 0;
  bottom: 0;
  padding: var(--grid-gutter-size);
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
        transition:
          visibility ${duration.medium}s ${ease.cubic} ${duration.medium}s,
          opacity ${duration.medium}s ${ease.cubic} ${duration.medium}s;
    `}
`

export const NavContentInner = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100%;
  padding-top: var(--site-header-height);
  padding-bottom: var(--grid-gutter-size);
  border-radius: var(--border-radius-sml);
  background-color: var(--c-accent1);
  text-align: center;

  ${mq.from.S`
    justify-content: space-around;
  `}
`

export const NavList = styled(motion.ul)`
  ${listResetStyles};
  padding: var(--spacing-default) 0;
`

export const NavItem = styled(motion.li)`
  text-transform: lowercase;

  &:not(:last-of-type) {
    margin-bottom: var(--spacing-default);
  }
`

export const NavItemLink = styled(InternalLink)`
  ${textStyles.navLinkMob};
  color: var(--c-white);
  transition: color ${duration.medium}s ${ease.cubic};

  &:hover {
    color: var(--c-black);
  }
`
