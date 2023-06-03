// Types
import { Tag, ShowcaseItem } from "../types"

// Styles
import * as S from "./styles"

// Components
import ShowcaseNavItem from "../ShowcaseNavItem/ShowcaseNavItem"

export interface Props {
  items: ShowcaseItem[]
  tags: Tag[]
  activeTag: Tag
}

const ShowcaseNavList: React.FC<Props> = ({ items, tags, activeTag }) => {
  if (!items.length) return null

  return (
    <S.Wrapper>
      {tags.map((tag, index) => {
        const taggedItemsAmount = items
          .filter((item) => item.tags.includes(tag))
          .reduce((sum, _) => sum + 1, 0)

        return (
          <ShowcaseNavItem
            key={index}
            tag={tag}
            isActive={activeTag === tag}
            taggedItemsAmount={taggedItemsAmount}
          />
        )
      })}
    </S.Wrapper>
  )
}

export default ShowcaseNavList
