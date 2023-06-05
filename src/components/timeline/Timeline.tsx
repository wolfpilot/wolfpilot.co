// Types
import { Route } from "@ts/routes"

// Styles
import * as S from "./styles"

export interface TimelineItem {
  position: string
  company: Route
  period: {
    start: string
    end: string
  }
  description: string
}

export interface Props {
  items: TimelineItem[]
}

const Timeline: React.FC<Props> = ({ items }) => {
  if (!items?.length) return null

  return (
    <S.Wrapper>
      <S.NavList>
        {items.map((item, index) => {
          const { position, company, period, description } = item

          if (
            !position ||
            !company ||
            !period?.start ||
            !period?.end ||
            !description
          ) {
            return null
          }

          return (
            <S.NavItem key={`timeline-nav-item-${index}`}>
              <S.NavItemIndicator>
                <S.NavItemBullet>•</S.NavItemBullet>
              </S.NavItemIndicator>

              <S.NavItemContent>
                <S.NavItemBtn type="button">{position}</S.NavItemBtn>
                <S.NavItemLink
                  href={company.url}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  @ {company.label}
                </S.NavItemLink>
              </S.NavItemContent>
            </S.NavItem>
          )
        })}
      </S.NavList>
    </S.Wrapper>
  )
}

export default Timeline
