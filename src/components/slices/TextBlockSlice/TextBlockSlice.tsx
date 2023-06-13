// Styles
import * as S from "./styles"

// Components
import Container from "@components/layout/Container/Container"

export interface Props {
  heading?: string
  subheading?: string
  copy?: string
}

const TextBlockSlice: React.FC<Props> = ({ heading, subheading, copy }) => {
  if (!(heading && subheading && copy)) return null

  return (
    <S.Wrapper>
      <Container>
        {heading && <S.Heading level="h2">{heading}</S.Heading>}
        {subheading && <S.Subheading level="h3">{subheading}</S.Subheading>}
        {copy && <S.Text>{copy}</S.Text>}
      </Container>
    </S.Wrapper>
  )
}

export default TextBlockSlice
