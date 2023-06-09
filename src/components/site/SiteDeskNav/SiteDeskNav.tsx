// Types
import { Route } from "@ts/routes"

// Constants
import { routes } from "@constants/routes"

// Styles
import * as S from "./styles"

export interface Props {}

// Utils
const leftItemsGroup = [routes.about, routes.work, routes.cases]
const rightItemsGroup = [routes.experience, routes.contact, routes.resume]

const generateNavItems = (routesGroup: Route[]) => {
  return routesGroup.map(({ label, url }) => {
    if (!label || !url) return null

    return (
      <S.NavItem key={label}>
        <S.NavItemLink href={url}>{label}</S.NavItemLink>
      </S.NavItem>
    )
  })
}

const SiteDeskNav: React.FC<Props> = () => (
  <S.Wrapper>
    <S.NavBar>
      <S.Container>
        <S.NavList>
          <S.NavItemGroup>{generateNavItems(leftItemsGroup)}</S.NavItemGroup>

          <S.NavItem>
            <S.LogoLink href="/" aria-label="Homepage">
              <S.Logo id="desk" />
            </S.LogoLink>
          </S.NavItem>

          <S.NavItemGroup>{generateNavItems(rightItemsGroup)}</S.NavItemGroup>
        </S.NavList>
      </S.Container>
    </S.NavBar>
  </S.Wrapper>
)

export default SiteDeskNav
