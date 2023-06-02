// Types
import { Tag } from "../types"

// Utils
import { useShowcaseDispatch } from "../Context"

// Styles
import * as S from "./styles"

export interface Props {
  tag: Tag
  isActive: boolean
  taggedItemsAmount: number
}

const ShowcaseNavItem: React.FC<Props> = ({
  tag,
  isActive,
  taggedItemsAmount,
}) => {
  const showcaseDispatch = useShowcaseDispatch()

  const handleClickTag = () => {
    showcaseDispatch({
      type: "updateActiveTag",
      payload: tag,
    })
  }

  return (
    <S.Wrapper>
      <S.Button $isActive={isActive} onClick={handleClickTag}>
        {tag} <sup>{taggedItemsAmount}</sup>
      </S.Button>
    </S.Wrapper>
  )
}

export default ShowcaseNavItem
