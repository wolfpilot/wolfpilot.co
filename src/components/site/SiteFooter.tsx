import styled from "styled-components"

// Styles
import { mq } from "@styles/utils/mediaQueries"

// Components
import Container from "@components/layout/Container"
import SocialLinksComponent from "@components/generic/SocialLinks"

// Setup
const INITIAL_DATE_YEAR = 2023

const SiteFooter: React.FC = () => {
  const currentDateYear = new Date().getFullYear()

  const dateText =
    INITIAL_DATE_YEAR < currentDateYear
      ? `${INITIAL_DATE_YEAR} - ${currentDateYear}`
      : INITIAL_DATE_YEAR

  return (
    <Wrapper>
      <Container>
        <Content>
          <SocialLinks option="dark" />

          <Copyright>© {dateText} Designed & built by Razvan Negrea</Copyright>
        </Content>
      </Container>
    </Wrapper>
  )
}

const Wrapper = styled.footer`
  padding: var(--spacing-default) 0;
`

const Content = styled.div`
  display: flex;
  flex-direction: column;

  ${mq.from.M`
    flex-direction: row-reverse;
    justify-content: space-between;
    align-items: center;
  `}
`

const SocialLinks = styled(SocialLinksComponent)`
  margin-bottom: var(--spacing-default);

  ${mq.from.M`
    margin-bottom:0;
  `}
`

const Copyright = styled.div`
  text-align: center;

  ${mq.from.M`
    text-align: left;
  `}
`

export default SiteFooter
