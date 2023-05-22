import styled from "styled-components"

// Config
import { config as pageConfig } from "@config/page.config"

// Utils
import { usePageState } from "@utils/context/PageContext"

// Components
import SplashScreenUI from "../screens/SplashScreenUI"
import PageTransitionUI from "../screens/PageTransitionUI"

export interface Props {
  children?: React.ReactNode
}

const PageWrapper: React.FC<Props> = ({ children }: Props) => {
  const pageState = usePageState()

  return (
    <Main>
      {pageConfig.showSplashScreen && !pageState.hasSplashScreenPlayed && (
        <SplashScreenUI />
      )}

      <PageTransitionUI>{children}</PageTransitionUI>
    </Main>
  )
}

const Main = styled.main`
  margin-top: var(--site-header-height);
`

export default PageWrapper
