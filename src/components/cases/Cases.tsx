import { useState } from "react"
import { AnimatePresence, motion } from "framer-motion"

// Types
import { CaseType } from "@data/cases"

// Utils
import { prefixLeadingZeroes } from "@utils/stringHelper"

// Styles
import * as S from "./styles"

// Animation
import { getListAnimProps, itemVariants } from "./animation"

export interface Case {
  id: string
  title: string
  category: CaseType
}

export interface Props {
  items: Case[]
}

// Setup
const INITIAL_VISIBLE_ITEMS = 3

const renderItem = (item: Case, index: number) => {
  if (!item.id || !item.title || !item.category) return null

  return (
    <S.Item key={`case-${item.id}`} variants={itemVariants}>
      <S.ItemLink href={`/cases/${item.id}`}>
        <S.ItemNumber>{prefixLeadingZeroes(10, index + 1)}</S.ItemNumber>
        <S.ItemTitle level="h3">{item.title}</S.ItemTitle>
        <S.ItemCategory>{item.category}</S.ItemCategory>
      </S.ItemLink>
    </S.Item>
  )
}

const Cases: React.FC<Props> = ({ items }) => {
  const [showAll, setShowAll] = useState<boolean>(false)

  if (!items.length) return null

  const hiddenItemsAmount = items.length - INITIAL_VISIBLE_ITEMS
  const visibleItems = items.slice(0, INITIAL_VISIBLE_ITEMS)
  const hiddenItems = items.slice(INITIAL_VISIBLE_ITEMS)

  const showToggleBtn = hiddenItemsAmount > 0

  const listAnimProps = getListAnimProps(showAll)

  // Handlers
  const handleViewMoreClick = () => {
    setShowAll(!showAll)
  }

  return (
    <S.Wrapper>
      <S.List {...listAnimProps}>
        {visibleItems.map((item, index) => renderItem(item, index))}

        <AnimatePresence>
          {showAll && (
            <motion.div {...listAnimProps}>
              {hiddenItems.map((item, index) =>
                renderItem(item, INITIAL_VISIBLE_ITEMS + index)
              )}
            </motion.div>
          )}
        </AnimatePresence>

        {showToggleBtn && (
          <S.Item>
            <S.ItemBtn type="button" onClick={handleViewMoreClick}>
              <S.ItemNumber>
                {showAll ? "-" : "+"}
                {hiddenItemsAmount}
              </S.ItemNumber>
              <S.ItemTitle level="h3">
                View {showAll ? "less" : "all"}
              </S.ItemTitle>
            </S.ItemBtn>
          </S.Item>
        )}
      </S.List>
    </S.Wrapper>
  )
}

export default Cases
