// Styles
import * as S from "./styles"

// Types
import { CaseType } from "@data/cases"

// Utils
import { prefixLeadingZeroes } from "@utils/stringHelper"

export interface Case {
  id: string
  title: string
  category: CaseType
}

export interface Props {
  items: Case[]
}

const Cases: React.FC<Props> = ({ items }) => {
  if (!items.length) return null

  return (
    <S.Wrapper>
      {items.map((item, index) => {
        if (!item.id || !item.title || !item.category) return null

        return (
          <S.Item key={`case-${item.id}`}>
            <S.ItemLink href={`/cases/${item.id}`}>
              <S.ItemNumber>{prefixLeadingZeroes(10, index + 1)}</S.ItemNumber>
              <S.ItemTitle level="h3">{item.title}</S.ItemTitle>
              <S.ItemCategory>{item.category}</S.ItemCategory>
            </S.ItemLink>
          </S.Item>
        )
      })}
    </S.Wrapper>
  )
}

export default Cases
