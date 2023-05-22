import Link from "next/link"
import styled from "styled-components"

// Constants
import { routes } from "@constants/routes"

// Styles
import { mq } from "@root/src/styles/utils/mediaQueries"

export interface Props {}

const SiteMobNav: React.FC<Props> = () => {
  return (
    <Wrapper>
      <NavBar>
        <Logo />
        <Toggle />
      </NavBar>

      <NavList>
        {Object.keys(routes).map((key) => {
          const { label, url } = routes[key]

          if (!label || !url) return null

          return (
            <NavItem key={label}>
              <Link href={url}>{label}</Link>
            </NavItem>
          )
        })}
      </NavList>
    </Wrapper>
  )
}

const Wrapper = styled.nav`
  ${mq.from.M`
    display: none;
  `}
`

const NavBar = styled.div``

const Logo = styled.div``

const Toggle = styled.div``

const NavList = styled.ul``

const NavItem = styled.li``

export default SiteMobNav
