// Styles
import * as S from "./styles"

// Components
import Container from "@components/layout/Container/Container"

export interface Props {
  heading?: string
  subheading?: string
  content?: React.ReactNode
}

const TextBlockSlice: React.FC<Props> = ({ heading, subheading, content }) => {
  if (!(heading || subheading) && !content) return null

  return (
    <S.Wrapper>
      <Container>
        {heading && <S.Heading level="h2">{heading}</S.Heading>}
        {subheading && <S.Subheading level="h3">{subheading}</S.Subheading>}
        {content && <S.RichText>{content}</S.RichText>}
      </Container>
    </S.Wrapper>
  )
}

export default TextBlockSlice
