// Types
import { ShowcaseItem } from "../types"

// Styles
import * as S from "./styles"

// Components
import ShowcaseProjectItem from "../ShowcaseProjectItem/ShowcaseProjectItem"

// Animation
import { animProps } from "./animation"

export interface Props {
  items: ShowcaseItem[]
}

const ShowcaseProjectList: React.FC<Props> = ({ items }) => (
  <S.Wrapper {...animProps}>
    {items.map((item, index) => (
      <ShowcaseProjectItem key={item.id} index={index} data={item} />
    ))}
  </S.Wrapper>
)

export default ShowcaseProjectList
