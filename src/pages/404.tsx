import { NextPage } from "next"
import { NextSeo } from "next-seo"

// Styles
import * as S from "@styles/pages/errorPage"

// Components
import Container from "@components/layout/Container/Container"
import InternalLink from "@components/generic/InternalLink"

// Setup
const META_TITLE = "Error 404"
const META_DESCRIPTION = "Page not found"

const Error404Page: NextPage = () => (
  <>
    <NextSeo title={META_TITLE} description={META_DESCRIPTION} />

    <S.Wrapper>
      <Container>
        <S.Heading level="h1">404</S.Heading>
        <S.SubHeading level="h2">page not found</S.SubHeading>

        <S.Text>
          Go back <InternalLink href="/">home</InternalLink> instead?
        </S.Text>
      </Container>
    </S.Wrapper>
  </>
)

export default Error404Page
