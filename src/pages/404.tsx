import { NextPage } from "next"

// Styles
import * as S from "@styles/pages/errorPage"

// Components
import Container from "@components/layout/Container/Container"
import InternalLink from "@components/generic/InternalLink"

const Error404Page: NextPage = () => {
  return (
    <S.Wrapper>
      <Container>
        <S.Heading level="h1">404</S.Heading>
        <S.SubHeading level="h2">page not found</S.SubHeading>

        <S.Text>
          Go back <InternalLink href="/">home</InternalLink> instead?
        </S.Text>
      </Container>
    </S.Wrapper>
  )
}

export default Error404Page
