import { useState, useEffect, useCallback } from "react"
import { usePathname } from "next/navigation"

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
const rightItemsGroup = [routes.experience, routes.contact, routes.resume]

const SiteDeskNav: React.FC<Props> = ({ scrollYOffset }) => {
  const [sectionElems, setSectionElems] = useState<(HTMLElement | null)[]>([])
  const [activeSectionIndex, setActiveSectionIndex] = useState<number | null>(
    null
  )

  const pathname = usePathname()

  const isHomepage = pathname === "/"

  // Handlers

  /**
   * Find the last section the user scrolled past
   */
  const handleScrollSection = useCallback(
    (scrollYOffset: number | null) => {
      if (!isHomepage || scrollYOffset === null) {
        setActiveSectionIndex(null)

        return
      }

      const siteHeaderHeight = parseInt(
        getComputedStyle(document.documentElement).getPropertyValue(
          "--site-header-height"
        ),
        10
      )

      const newActiveSectionIndex = sectionElems.findLastIndex(
        (elem, index) => {
          if (!elem?.offsetTop) return false

          /**
           * Apply exception for the Contact section which will never normally
           * be in view at the top of the page
           */
          if (index === sectionElems.length - 1) {
            return (
              scrollYOffset + window.innerHeight >
              elem.offsetTop + elem.offsetHeight - 1
            )
          }

          return scrollYOffset + siteHeaderHeight > elem.offsetTop - 1
        }
      )

      setActiveSectionIndex(newActiveSectionIndex)
    },
    [isHomepage, sectionElems]
  )

  /**
   * Cache all section elements on the Homepage
   *
   * TODO: Fix when navigating from one page to another
   */
  useEffect(() => {
    if (!isHomepage) {
      setSectionElems([])

      return
    }

    const sectionIDs = Object.keys(routes)
      .map((key) => routes[key].url.split("#")[1])
      .filter((val) => val)

    const newSectionElems = sectionIDs.map((id) => document.getElementById(id))

    setSectionElems(newSectionElems)
  }, [isHomepage, setSectionElems])

  /**
   * Handle scroll event
   */
  useEffect(() => {
    handleScrollSection(scrollYOffset)
  }, [scrollYOffset, handleScrollSection])

  // prettier-ignore
  const hasPassedThreshold =
    scrollYOffset === null
    ? false
    : scrollYOffset > SCROLL_THRESHOLD

  return (
    <S.Wrapper $hasPassedThreshold={hasPassedThreshold}>
      <S.NavBar>
        <S.Container>
          <S.NavList>
            <S.NavItemGroup>
              {leftItemsGroup.map(({ label, url }, index) => {
                if (!label || !url) return null

                return (
                  <S.NavItem key={label}>
                    <S.NavItemLink
                      href={url}
                      $isActive={activeSectionIndex === index}
                      $hasPassedThreshold={hasPassedThreshold}
                    >
                      {label}
                    </S.NavItemLink>
                  </S.NavItem>
                )
              })}
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
              {rightItemsGroup.map(({ label, url }, index) => {
                if (!label || !url) return null

                return (
                  <S.NavItem key={label}>
                    <S.NavItemLink
                      href={url}
                      $isActive={
                        activeSectionIndex === leftItemsGroup.length + index
                      }
                      $hasPassedThreshold={hasPassedThreshold}
                    >
                      {label}
                    </S.NavItemLink>
                  </S.NavItem>
                )
              })}
            </S.NavItemGroup>
          </S.NavList>
        </S.Container>
      </S.NavBar>
    </S.Wrapper>
  )
}

export default SiteDeskNav
