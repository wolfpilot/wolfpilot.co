import Link from "next/link"
import styled from "styled-components"

// Constants
import { Route, routes } from "@constants/routes"

// Styles
import { mq } from "@root/src/styles/utils/mediaQueries"

export interface Props {}

// Utils
const leftItemsGroup = [routes.about, routes.work, routes.cases]
const rightItemsGroup = [routes.experience, routes.contact, routes.resume]

const generateNavItems = (routesGroup: Route[]) => {
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

const Wrapper = styled.header`
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
