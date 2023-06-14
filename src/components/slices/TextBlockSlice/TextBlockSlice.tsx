// Styles
import * as S from "./styles"

// Components
import Container from "@components/layout/Container/Container"

export interface Props {
  heading?: string
  subheading?: string
  html?: string
}

const TextBlockSlice: React.FC<Props> = ({ heading, subheading, html }) => {
  if (!(heading && subheading && html)) return null

  return (
    <S.Wrapper>
      <Container>
        {heading && <S.Heading level="h2">{heading}</S.Heading>}
        {subheading && <S.Subheading level="h3">{subheading}</S.Subheading>}
        {html && <S.RichText html={html} />}
      </Container>
    </S.Wrapper>
  )
}

export default TextBlockSlice
