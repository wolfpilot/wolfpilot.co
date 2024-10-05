import styled from "styled-components"

// Styles
import { mq } from "@styles/utils/mediaQueries"
import { ease, duration } from "@styles/animation"
import { colors } from "@styles/colors"
import { weights } from "@styles/typography"
import { textStyles } from "@styles/textStyles"

// Components
import ContainerComponent from "@components/layout/Container/Container"
import LogoComponent from "@components/logo/Logo"
import InternalLink from "@components/generic/InternalLink"

export const Wrapper = styled.nav<{
  $hasPassedThreshold: boolean
}>`
  display: none;

  ${mq.from.M`
    display: block;
    height: var(--site-header-height);
    max-height: var(--site-header-height);
    background-color: var(--c-white);
    border-bottom: 1px solid var(--c-neutral3);
    backdrop-filter: blur(6px);
    pointer-events: all;
    transition: max-height ${duration.medium}s ${ease.cubic};
    
    /**
     * !: backdrop-filter: blur on Chromium has quite a bug/glitch
     * !: with no known work-arounds.
     *
     * For more info, see:
     * https://bugs.chromium.org/p/chromium/issues/detail?id=986206
     */
    @supports (backdrop-filter: blur(12px)) {
      background-color: ${colors.white}99;
      backdrop-filter: blur(6px);
    }

    ${({ $hasPassedThreshold }: { $hasPassedThreshold: boolean }) =>
      $hasPassedThreshold && `max-height: 50px;`}
  `}
`

export const Container = styled(ContainerComponent)`
  height: 100%;
`

export const LogoLink = styled(InternalLink)<{
  $hasPassedThreshold: boolean
}>`
  display: block;
  transition: transform ${duration.medium}s ${ease.cubic};

  ${({ $hasPassedThreshold }) =>
    $hasPassedThreshold &&
    `
    transform: scale(0.85);
  `}
`

export const Logo = styled(LogoComponent)`
  width: 60px;
  height: auto;

  ${mq.from.L`
    width: 75px;
    margin-right: var(--spacing-default);
    margin-left: var(--spacing-default);
  `}

  ${mq.from.XL`
    margin-right: calc(2 * var(--spacing-default));
    margin-left: calc(2 * var(--spacing-default));
  `}
`

export const NavBar = styled.div`
  height: 100%;
`

export const NavContent = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 100%;
`

export const NavItemLink = styled(InternalLink)<{
  $hasPassedThreshold: boolean
}>`
  ${textStyles.navLinkDesk};

  display: block;
  color: var(--c-textNav);
  text-transform: lowercase;
  transition:
    color ${duration.medium}s ${ease.cubic},
    transform ${duration.medium}s ${ease.cubic};

  ${({ $hasPassedThreshold }) =>
    $hasPassedThreshold &&
    `
    transform: scale(0.85);
  `}

  &:hover,
  &:focus-visible {
    outline: none;
    color: var(--c-accent2);
  }

  &:focus-visible {
    font-weight: ${weights.bold};
  }
`

export const NavItem = styled.div`
  margin: 0 20px;
`

export const NavItemGroup = styled.div`
  display: flex;
  flex-grow: 1;
  flex-basis: 0;

  &:first-of-type {
    justify-content: flex-end;
  }

  &:last-of-type {
    justify-content: flex-start;

    ${NavItem} {
      &:last-of-type {
        margin-left: auto;

        ${NavItemLink} {
          color: var(--c-accent2);

          &:hover {
            color: var(--c-black);
          }
        }
      }
    }
  }
`
