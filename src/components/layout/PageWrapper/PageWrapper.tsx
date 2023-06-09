// Config
import { config as pageConfig } from "@config/page.config"

// Styles
import * as S from "./styles"

// Components
import SplashScreenUI from "@components/screens/SplashScreenUI"
import PageTransitionUI from "@components/screens/PageTransitionUI"
import CustomCursor from "@components/cursor/CustomCursor"

export interface Props {
  children?: React.ReactNode
}

const PageWrapper: React.FC<Props> = ({ children }: Props) => (
  <S.Main>
    {pageConfig.showCustomCursor && <CustomCursor />}
    {pageConfig.showSplashScreen && <SplashScreenUI />}

    <PageTransitionUI>{children}</PageTransitionUI>
  </S.Main>
)

export default PageWrapper
