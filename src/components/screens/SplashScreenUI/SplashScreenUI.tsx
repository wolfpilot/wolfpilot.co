import { useEffect } from "react"

// Utils
import { usePageState, usePageDispatch } from "@utils/context/PageContext"
import { disableScroll } from "@utils/domHelper"
import { usePrefersReducedMotion } from "@utils/hooks/usePrefersReducedMotion"

// Styles
import * as S from "./styles"

// Animation
import { TOTAL_DURATION } from "./animation"

const SplashScreenUI: React.FC = () => {
  const pageState = usePageState()
  const pageDispatch = usePageDispatch()
  const reducedMotion = usePrefersReducedMotion()

  // Handle animation cycle
  useEffect(() => {
    if (pageState.hasSplashScreenPlayed) return

    if (reducedMotion) {
      pageDispatch({
        type: "updateHasSplashScreenPlayed",
        payload: true,
      })
      return
    }

    const timer = setTimeout(() => {
      pageDispatch({
        type: "updateHasSplashScreenPlayed",
        payload: true,
      })
    }, TOTAL_DURATION * 1000)

    return () => clearTimeout(timer)
  }, [pageDispatch, pageState.hasSplashScreenPlayed, reducedMotion])

  // Handle scroll lock
  useEffect(() => {
    const shouldLock =
      !pageState.hasSplashScreenPlayed &&
      !reducedMotion &&
      !window.matchMedia?.("(prefers-reduced-motion: reduce)").matches

    disableScroll(document.documentElement, shouldLock)
    return () => disableScroll(document.documentElement, false)
  }, [pageState.hasSplashScreenPlayed, reducedMotion])

  if (pageState.hasSplashScreenPlayed || reducedMotion) return null

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
