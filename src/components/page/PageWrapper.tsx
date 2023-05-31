import { useRouter } from "next/router"
import styled from "styled-components"

// Config
import { config as pageConfig } from "@config/page.config"

// Components
import SplashScreenUI from "@components/screens/SplashScreenUI"
import PageTransitionUI from "@components/screens/PageTransitionUI"
import CustomCursor from "@components/cursor/CustomCursor"
import ShowcaseModal from "@components/showcase/ShowcaseModal/ShowcaseModal"

export interface Props {
  children?: React.ReactNode
}

const PageWrapper: React.FC<Props> = ({ children }: Props) => {
  const router = useRouter()

  const isHomepage = router.pathname === "/"

  return (
    <Main>
      {pageConfig.showCustomCursor && <CustomCursor />}
      {pageConfig.showSplashScreen && <SplashScreenUI />}

      {isHomepage && <ShowcaseModal />}

      <PageTransitionUI>{children}</PageTransitionUI>
    </Main>
  )
}

const Main = styled.main`
  padding-top: var(--site-header-height);
`

export default PageWrapper
