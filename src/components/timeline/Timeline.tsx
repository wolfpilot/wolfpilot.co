import { useState } from "react"
import { motion } from "framer-motion"

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

  // Handlers
  const handleToggleBtnClick = (newActiveIndex: number) => {
    setActiveIndex(newActiveIndex)
  }

  if (!items?.length) return null

  return (
    <S.Wrapper>
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

          const isHighlighted = activeIndex > index
          const isActive = activeIndex === index

          const itemAnimProps = getItemAnimProps(isActive)

          return (
            <S.Item
              key={`timeline-item-${index}`}
              $isHighlighted={isHighlighted}
            >
              <S.ItemTrack>
                <S.ItemBullet
                  $isHighlighted={isHighlighted}
                  $isActive={isActive}
                >
                  •
                </S.ItemBullet>
              </S.ItemTrack>

              <S.ItemContent $isActive={isActive}>
                <S.ItemToggleBtn
                  type="button"
                  onClick={() => handleToggleBtnClick(index)}
                >
                  {position}
                </S.ItemToggleBtn>

                {company.url ? (
                  <S.ItemCompanyLink
                    href={company.url}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    @ {company.label}
                  </S.ItemCompanyLink>
                ) : (
                  <S.ItemCompanyName>— {company.label}</S.ItemCompanyName>
                )}

                <S.Date>
                  {item.date.start} - {item.date.end}
                </S.Date>

                <motion.div {...itemAnimProps}>
                  <S.Description>{item.description}</S.Description>
                </motion.div>
              </S.ItemContent>
            </S.Item>
          )
        })}
      </S.List>
    </S.Wrapper>
  )
}

export default Timeline
