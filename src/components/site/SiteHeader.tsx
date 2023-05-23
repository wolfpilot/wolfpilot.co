import styled from "styled-components"

// Components
import SiteMobNav from "@components/site/SiteMobNav"
import SiteDeskNav from "@components/site/SiteDeskNav"

const SiteHeader: React.FC = () => (
  <Wrapper>
    <SiteMobNav />
    <SiteDeskNav />
  </Wrapper>
)

const Wrapper = styled.header`
  height: var(--site-header-height);
  background: var(--c-pageColor);
  border-top: 3px solid var(--c-accent1);
  border-bottom: 1px solid var(--c-neutral3);
`

export default SiteHeader
