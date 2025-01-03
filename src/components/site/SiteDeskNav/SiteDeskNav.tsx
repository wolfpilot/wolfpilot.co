// Types
import { Route } from "@ts/routes"

// Constants
import { routes } from "@constants/routes"
import { sizes } from "@styles/sizes"

// Styles
import * as S from "./styles"

export interface Props {
  scrollYOffset: number | null
}

// Setup
const SCROLL_THRESHOLD = parseInt(sizes.siteHeaderSize.desk, 10)

const leftItemsGroup = [routes.about, routes.work, routes.cases]
const rightItemsGroup = [routes.experience, routes.contact]

const generateNavItems = (routesGroup: Route[], hasPassedThreshold: boolean) =>
  routesGroup.map(({ label, href }) => {
    if (!label || !href) return null

    return (
      <S.NavItem key={label}>
        <S.NavItemLink href={href} $hasPassedThreshold={hasPassedThreshold}>
          {label}
        </S.NavItemLink>
      </S.NavItem>
    )
  })

const SiteDeskNav: React.FC<Props> = ({ scrollYOffset }) => {
  // prettier-ignore
  const hasPassedThreshold =
    scrollYOffset === null
      ? false
      : scrollYOffset > SCROLL_THRESHOLD

  return (
    <S.Wrapper $hasPassedThreshold={hasPassedThreshold}>
      <S.NavBar>
        <S.Container>
          <S.NavContent>
            <S.NavItemGroup>
              {generateNavItems(leftItemsGroup, hasPassedThreshold)}
            </S.NavItemGroup>

            <S.NavItem>
              <S.LogoLink
                href="/"
                aria-label="Homepage"
                $hasPassedThreshold={hasPassedThreshold}
              >
                <S.Logo id="desk" />
              </S.LogoLink>
            </S.NavItem>

            <S.NavItemGroup>
              {generateNavItems(rightItemsGroup, hasPassedThreshold)}

              <S.NavItem>
                <S.NavItemResumeLink
                  href={routes.resume.href}
                  $hasPassedThreshold={hasPassedThreshold}
                >
                  {routes.resume.label}
                </S.NavItemResumeLink>
              </S.NavItem>
            </S.NavItemGroup>
          </S.NavContent>
        </S.Container>
      </S.NavBar>
    </S.Wrapper>
  )
}

export default SiteDeskNav
