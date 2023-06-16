import Link from "next/link"
import styled from "styled-components"

// Styles
import { mq } from "@styles/utils/mediaQueries"
import { listResetStyles } from "@styles/list"
import { ease, duration } from "@styles/animation"
import { textStyles } from "@styles/textStyles"

// Components
import ContainerComponent from "@components/layout/Container/Container"
import LogoComponent from "@components/logo/Logo"

export const Wrapper = styled.nav`
  display: none;

  ${mq.from.M`
    display: block;
    height: 100%;
  `}
`

export const Container = styled(ContainerComponent)`
  height: 100%;
`

export const LogoLink = styled(Link)`
  display: block;
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

export const NavList = styled.ul`
  ${listResetStyles};
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 100%;
`

export const NavItemLink = styled(Link)`
  ${textStyles.navLinkDesk};
  color: var(--c-neutral3);
  text-transform: lowercase;
  transition: color ${duration.medium}s ${ease.cubic};

  &:focus,
  &:hover {
    color: var(--c-accent1);
  }
`

export const NavItem = styled.li`
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
          color: var(--c-accent1);

          &:hover {
            color: var(--c-black);
          }
        }
      }
    }
  }
`
