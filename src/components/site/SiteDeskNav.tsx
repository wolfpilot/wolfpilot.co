import Link from "next/link"
import styled from "styled-components"

// Types
import { Route } from "@ts/routes"

// Constants
import { routes } from "@constants/routes"

// Styles
import { mq } from "@styles/utils/mediaQueries"
import { listResetStyles } from "@styles/list"
import { ease, duration } from "@styles/animation"
import { textStyles } from "@styles/textStyles"

// Components
import ContainerComponent from "@components/layout/Container"
import LogoComponent from "@components/logo/Logo"

export interface Props {}

// Utils
const leftItemsGroup = [routes.about, routes.work, routes.cases]
const rightItemsGroup = [routes.experience, routes.contact, routes.resume]

const generateNavItems = (routesGroup: Route[]) => {
  return routesGroup.map(({ label, url }) => {
    if (!label || !url) return null

    return (
      <NavItem key={label}>
        <NavItemLink href={url}>{label}</NavItemLink>
      </NavItem>
    )
  })
}

const SiteDeskNav: React.FC<Props> = () => {
  return (
    <Wrapper>
      <NavBar>
        <Container>
          <NavList>
            <NavItemGroup>{generateNavItems(leftItemsGroup)}</NavItemGroup>

            <NavItem>
              <LogoLink href="/" aria-label="Homepage">
                <Logo id="desk" />
              </LogoLink>
            </NavItem>

            <NavItemGroup>{generateNavItems(rightItemsGroup)}</NavItemGroup>
          </NavList>
        </Container>
      </NavBar>
    </Wrapper>
  )
}

const Wrapper = styled.nav`
  display: none;

  ${mq.from.M`
    display: block;
    height: 100%;
  `}
`

const Container = styled(ContainerComponent)`
  height: 100%;
`

const LogoLink = styled(Link)`
  display: block;
`

const Logo = styled(LogoComponent)`
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

const NavBar = styled.div`
  height: 100%;
`

const NavList = styled.ul`
  ${listResetStyles};
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 100%;
`

const NavItemLink = styled(Link)`
  ${textStyles.navLinkDesk};
  color: var(--c-neutral3);
  text-transform: lowercase;
  transition: color ${duration.medium}s ${ease.cubic};

  &:hover {
    color: var(--c-accent1);
  }
`

const NavItem = styled.li`
  margin: 0 20px;
`

const NavItemGroup = styled.div`
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

export default SiteDeskNav
