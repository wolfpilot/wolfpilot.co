import { useState } from "react"

// Types
import { Route } from "@ts/routes"

// Styles
import * as S from "./styles"

// Animation
import { getItemAnimProps } from "./animation"

export interface TimelineItem {
  position: string
  company: Route
  date: {
    start: string
    end: string
  }
  description: string
}

export interface Props {
  items: TimelineItem[]
}

const Timeline: React.FC<Props> = ({ items }) => {
  const [activeIndex, setActiveIndex] = useState<number>(0)
  const [showAll, setShowAll] = useState<boolean>(false)

  // Handlers
  const handleToggleBtnClick = (newActiveIndex: number) => {
    setActiveIndex(newActiveIndex)
  }

  const handleToggleAllClick = () => {
    setShowAll(!showAll)
  }

  if (!items?.length) return null

  return (
    <S.Wrapper>
      <S.Controls>
        <S.ControlToggleAll type="button" onClick={handleToggleAllClick}>
          {showAll ? "show less" : "show all"}
        </S.ControlToggleAll>
      </S.Controls>

      <S.List>
        {items.map((item, index) => {
          const { position, company, date, description } = item

          if (
            !position ||
            !company ||
            !date?.start ||
            !date?.end ||
            !description
          ) {
            return null
          }

          const isHighlighted = showAll ? false : activeIndex > index
          const isActive = showAll ? true : activeIndex === index

          const itemAnimProps = getItemAnimProps(showAll ? true : isActive)

          return (
            <S.Item key={`timeline-item-${index}`}>
              <S.ItemIndicator>
                <S.ItemBullet
                  $isHighlighted={isHighlighted}
                  $isActive={showAll ? false : activeIndex === index}
                >
                  •
                </S.ItemBullet>

                {index !== items.length - 1 && (
                  <S.ItemTrack $isHighlighted={isHighlighted} />
                )}
              </S.ItemIndicator>

              <S.ItemContent $isActive={isActive}>
                <S.ItemToggleBtn
                  type="button"
                  disabled={showAll}
                  onClick={() => handleToggleBtnClick(index)}
                >
                  {position}
                </S.ItemToggleBtn>

                {company.href ? (
                  <S.ItemCompanyLink href={company.href}>
                    @ {company.label}
                  </S.ItemCompanyLink>
                ) : (
                  <S.ItemCompanyName>— {company.label}</S.ItemCompanyName>
                )}

                <S.ItemDate>
                  {item.date.start} - {item.date.end}
                </S.ItemDate>

                <S.ItemDetails {...itemAnimProps} $isActive={isActive}>
                  <S.ItemDescription>{item.description}</S.ItemDescription>
                </S.ItemDetails>
              </S.ItemContent>
            </S.Item>
          )
        })}
      </S.List>
    </S.Wrapper>
  )
}

export default Timeline
