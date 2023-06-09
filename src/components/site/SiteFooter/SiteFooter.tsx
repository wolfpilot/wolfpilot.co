// Styles
import * as S from "./styles"

// Components
import Container from "@components/layout/Container/Container"

// Setup
const INITIAL_DATE_YEAR = 2023

const SiteFooter: React.FC = () => {
  const currentDateYear = new Date().getFullYear()

  const dateText =
    INITIAL_DATE_YEAR < currentDateYear
      ? `${INITIAL_DATE_YEAR} - ${currentDateYear}`
      : INITIAL_DATE_YEAR

  return (
    <S.Wrapper>
      <Container>
        <S.Content>
          <S.SocialLinks option="dark" />

          <S.Copyright>
            © {dateText} Designed & built by Razvan Negrea
          </S.Copyright>
        </S.Content>
      </Container>
    </S.Wrapper>
  )
}

export default SiteFooter
