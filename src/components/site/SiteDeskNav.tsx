import Link from "next/link"
import styled from "styled-components"

// Types
import { Anchor } from "@ts/dom"

// Constants
import { routes } from "@constants/routes"

// Styles
import { mq } from "@styles/utils/mediaQueries"

export interface Props {}

// Utils
const leftItemsGroup = [routes.about, routes.work, routes.cases]
const rightItemsGroup = [routes.experience, routes.contact, routes.resume]

const generateNavItems = (routesGroup: Anchor[]) => {
  return routesGroup.map(({ label, url }) => {
    if (!label || !url) return null

    return (
      <NavItem key={label}>
        <Link href={url}>{label}</Link>
      </NavItem>
    )
  })
}

const SiteDeskNav: React.FC<Props> = () => {
  return (
    <Wrapper>
      <NavBar>
        <NavList>
          {generateNavItems(leftItemsGroup)}
          <Logo />
          {generateNavItems(rightItemsGroup)}
        </NavList>
      </NavBar>
    </Wrapper>
  )
}

const Wrapper = styled.nav`
  display: none;

  ${mq.from.M`
    display: block;
  `}
`

const NavBar = styled.nav``

const NavList = styled.ul``

const NavItem = styled.li``

const Logo = styled.div``

export default SiteDeskNav
