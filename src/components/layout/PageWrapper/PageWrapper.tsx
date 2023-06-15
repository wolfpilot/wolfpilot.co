// Config
import { config as pageConfig } from "@config/page.config"

// Styles
import * as S from "./styles"

// Components
import SplashScreenUI from "@components/screens/SplashScreenUI/SplashScreenUI"
import PageTransitionUI from "@components/screens/PageTransitionUI/PageTransitionUI"
import CustomCursor from "@components/cursor/CustomCursor"
import ScrollToTop from "@components/scrollToTop/ScrollToTop"

export interface Props {
  children?: React.ReactNode
}

const PageWrapper: React.FC<Props> = ({ children }: Props) => (
  <S.Main>
    {pageConfig.showCustomCursor && <CustomCursor />}
    {pageConfig.showSplashScreen && <SplashScreenUI />}

    <ScrollToTop />

    <PageTransitionUI>{children}</PageTransitionUI>
  </S.Main>
)

export default PageWrapper
