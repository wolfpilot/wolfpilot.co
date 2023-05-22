import styled from "styled-components"

// Components
import SiteMobNav from "@components/site/SiteMobNav"
import SiteDeskNav from "@components/site/SiteDeskNav"

export interface Props {}

const SiteHeader: React.FC<Props> = () => {
  return (
    <Wrapper>
      <SiteMobNav />
      <SiteDeskNav />
    </Wrapper>
  )
}

const Wrapper = styled.header``

export default SiteHeader
