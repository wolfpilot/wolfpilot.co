import { useEffect } from "react"

// Utils
import { usePageState, usePageDispatch } from "@utils/context/PageContext"
import { delay } from "@utils/helper"
import { disableScroll } from "@utils/domHelper"

// Styles
import * as S from "./styles"

// Animation
import { TOTAL_DURATION } from "./animation"

const SplashScreenUI: React.FC = () => {
  const pageState = usePageState()
  const pageDispatch = usePageDispatch()

  // Handle animation cycle
  useEffect(() => {
    const onAnimEnd = async () => {
      await delay(TOTAL_DURATION * 1000)

      pageDispatch({
        type: "updateHasSplashScreenPlayed",
        payload: true,
      })
    }

    onAnimEnd()
  }, [pageDispatch])

  // Handle scroll lock
  useEffect(() => {
    disableScroll(document.documentElement, !pageState.hasSplashScreenPlayed)
  }, [pageState.hasSplashScreenPlayed])

  if (pageState.hasSplashScreenPlayed) return null

  return (
    <S.Wrapper>
      <S.Backdrop />

      <S.LogoWrapper>
        <S.StyledLogoTriangle />
        <S.StyledLogoDetails />
        <S.StyledLogoLetter />
      </S.LogoWrapper>
    </S.Wrapper>
  )
}

export default SplashScreenUI
