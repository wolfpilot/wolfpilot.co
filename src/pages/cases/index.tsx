// Types
import { Meta } from "@data/cases"

// Styles
import * as S from "@styles/pages/cases"

// Components
import Heading from "@components/generic/Heading"
import Text from "@components/generic/Text"

export interface Props {
  children: React.ReactNode
  meta: Meta
}

const CaseLayout: React.FC<Props> = ({ children, meta }) => {
  if (!meta?.title || !meta?.tagline) {
    return null
  }

  return (
    <S.Wrapper>
      <S.Header>
        <Heading level="h1">{meta.title}</Heading>
        <Text>{meta.tagline}</Text>
      </S.Header>

      <S.Content>{children}</S.Content>
    </S.Wrapper>
  )
}

export default CaseLayout
