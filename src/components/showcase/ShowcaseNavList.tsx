import styled from "styled-components"

// Types
import { Tag, ShowcaseItem, HandleClickTag } from "./Showcase"

// Styles
import { mq } from "@styles/utils/mediaQueries"

// Components
import ShowcaseNavItem from "./ShowcaseNavItem"

export interface Props {
  items: ShowcaseItem[]
  tags: Tag[]
  activeTag: Tag
  handleClickTag: HandleClickTag
}

const ShowcaseNavList: React.FC<Props> = ({
  items,
  tags,
  activeTag,
  handleClickTag,
}) => (
  <Wrapper>
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
          handleClickTag={handleClickTag}
        />
      )
    })}
  </Wrapper>
)

const Wrapper = styled.ul`
  list-style: none;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  margin-top: 0;
  margin-bottom: var(--spacing-default);
  padding-right: calc(var(--spacing-default) / 2);
  padding-left: calc(var(--spacing-default) / 2);
  background-color: var(--c-neutral5);

  ${mq.from.L`
    justify-content: flex-start;
    background: none;
  `}
`

export default ShowcaseNavList
