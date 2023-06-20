import { useScroll } from "@utils/hooks/useScroll"

// Styles
import * as S from "./styles"

// Components
import SiteMobNav from "@components/site/SiteMobNav/SiteMobNav"
import SiteDeskNav from "@components/site/SiteDeskNav/SiteDeskNav"

const SiteHeader: React.FC = () => {
  // Call hook in the header to keep nr of listeners to a minimum
  const scroll = useScroll()

  return (
    <S.Wrapper>
      <SiteMobNav scrollYDirection={scroll.direction.y} />
      <SiteDeskNav scrollYOffset={scroll.offset.y} />
    </S.Wrapper>
  )
}

export default SiteHeader
