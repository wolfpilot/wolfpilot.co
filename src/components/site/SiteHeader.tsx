import styled from "styled-components"

// Styles
import { zIndexes } from "@styles/zIndexes"

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
  position: fixed;
  z-index: ${zIndexes.siteHeader};
  top: 0;
  right: 0;
  left: 0;
  height: var(--site-header-height);
  background: var(--c-pageColor);
  border-top: 3px solid var(--c-accent1);
  border-bottom: 1px solid var(--c-neutral3);
`

export default SiteHeader
