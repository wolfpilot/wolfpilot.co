// Styles
import * as S from "./styles"

// Components
import SiteMobNav from "@components/site/SiteMobNav/SiteMobNav"
import SiteDeskNav from "@components/site/SiteDeskNav/SiteDeskNav"

const SiteHeader: React.FC = () => (
  <S.Wrapper>
    <SiteMobNav />
    <SiteDeskNav />
  </S.Wrapper>
)

export default SiteHeader
