import { useEffect } from "react"
import styled, { css, keyframes } from "styled-components"

// Utils
import { usePageState, usePageDispatch } from "@utils/context/PageContext"
import { delay } from "@utils/helper"
import { disableScroll } from "@utils/domHelper"

// Styles
import { mq } from "@styles/utils/mediaQueries"
import { zIndexes } from "@styles/zIndexes"
import { ease, animFadeIn, animFadeOut, animOilSpill } from "@styles/animation"

// Components
import LogoLetter from "@components/logo/LogoLetter"
import LogoShading from "@components/logo/LogoShading"
import LogoTriangle from "@components/logo/LogoTriangle"

// Setup
const DRAW_ANIM_DURATION = 0.9
const PAINT_ANIM_DURATION = 0.6
const STAGGER_ANIM_DELAY = 0.1

export const TOTAL_ANIM_DURATION =
  3.5 * DRAW_ANIM_DURATION + 2 * PAINT_ANIM_DURATION

const SplashScreenUI: React.FC = () => {
  const pageState = usePageState()
  const pageDispatch = usePageDispatch()

  // Handle animation cycle
  useEffect(() => {
    const onAnimEnd = async () => {
      await delay(TOTAL_ANIM_DURATION * 1000)

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
    <Wrapper>
      <Backdrop />

      <LogoWrapper>
        <StyledLogoTriangle />
        <StyledLogoShading />
        <StyledLogoLetter />
      </LogoWrapper>
    </Wrapper>
  )
}

/**
 * * A short note on the animations:
 *
 * There are two phases to the logo animation:
 *
 * 1) Draw in: hide the fill in order to draw the lines
 * 2) Paint in: hide the lines and paint back the original fill
 *
 * Unfortunately, once the fill value is changed, there is no easy way to get
 * the original colours back. There are several CSS values that should work
 * (initial, revert), however neither does the trick. Either the fill ends up
 * transparent or black.
 *
 * Instead, we duplicate the letter and triangle paths and draw the lines on the
 * first element, while the second simply fades in with all its original
 * colours.
 *
 * One extra benefit we get is that we can now also apply 3D transforms to
 * individual parts of the logo since 3d transforms can only be used on SVG
 * elements, not on the paths or groups themselves.
 */

// Keyframes
const animShiftLogo = keyframes`
  0% {
    transform: perspective(500px) rotate3d(0, 0, 0, 0deg);
  }

  50% {
    transform: perspective(500px) rotate3d(1, 0, 0, 15deg);
  }

  65% {
    transform: perspective(500px) rotate3d(1, 1, 0, -5deg);
  }

  85% {
    transform: perspective(500px) rotate3d(1, 1, 0, 5deg);
  }

  100% {
    transform: perspective(500px) rotate3d(0, 0, 0, 0deg);
  }
`

const animPaintBackdrop = keyframes`
  0% {
    opacity: 0;
    transform: scale(1.15);
  }

  50% {
    opacity: 1;
    transform: scale(1);
  }

  65% {
    opacity: 0.75;
    transform: scale(1.25);
  }

  85% {
    opacity: 0.5;
    transform: scale(1.5);
  }

  100% {
    opacity: 0;
    transform: scale(20);
  }
`

const animDrawLines = keyframes`
  0% {
    opacity: 0;
    fill: none;
    stroke: var(--c-black);
    stroke-dasharray: 1;
    stroke-dashoffset: 1;
  }

  100% {
    opacity: 1;
    fill: none;
    stroke: var(--c-black);
    stroke-dasharray: 1;
    stroke-dashoffset: 0;
  }
`

const animPushOut3D = keyframes`
  0% {
    transform: perspective(500px) translate3d(0, 0, 50px);
  }

  100% {
    transform: perspective(500px) translate3d(0, 0, 0);
  }
`

// Shared styles
const sharedLogoStyles = css`
  width: calc(2 * var(--grid-column-size) + 3 * var(--grid-gutter-size));
  height: auto;

  ${mq.from.S`
    width: calc(1.5 * var(--grid-column-size) + 2.5 * var(--grid-gutter-size));
  `}

  ${mq.from.M`
    width: calc(2 * var(--grid-column-size) + 3 * var(--grid-gutter-size));
  `}

  ${mq.from.L`
    width: calc(3 * var(--grid-column-size) + 4 * var(--grid-gutter-size));
  `}

  path {
    animation-fill-mode: both;
  }
`

// Main styles
const Wrapper = styled.div`
  position: fixed;
  z-index: ${zIndexes.splashScreenUI};
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: var(--c-pageColor);

  animation: ${animFadeOut} ${PAINT_ANIM_DURATION}s ${ease.cubic}
    ${3.5 * DRAW_ANIM_DURATION + PAINT_ANIM_DURATION}s both;
`

const Backdrop = styled.div`
  position: absolute;
  z-index: -1;
  width: calc(2 * var(--grid-column-size) + var(--grid-gutter-size));
  height: calc(2 * var(--grid-column-size) + var(--grid-gutter-size));
  border-radius: 50%;
  background-color: var(--c-neutral4);

  animation: ${animPaintBackdrop}
    ${3.5 * DRAW_ANIM_DURATION + PAINT_ANIM_DURATION}s ${ease.cubic} both;

  ${mq.from.S`
    width: calc(1.5 * var(--grid-column-size) + 0.5 * var(--grid-gutter-size));
    height: calc(1.5 * var(--grid-column-size) + 0.5 * var(--grid-gutter-size));
  `}

  ${mq.from.M`
    width: calc(2 * var(--grid-column-size) + var(--grid-gutter-size));
    height: calc(2 * var(--grid-column-size) + var(--grid-gutter-size));
  `}

  ${mq.from.L`
    width: calc(3 * var(--grid-column-size) + 2 * var(--grid-gutter-size));
    height: calc(3 * var(--grid-column-size) + 2 * var(--grid-gutter-size));
  `}
`

const LogoWrapper = styled.div`
  position: relative;

  animation: ${animShiftLogo} ${3.5 * DRAW_ANIM_DURATION + PAINT_ANIM_DURATION}s
    ${ease.cubic} both;
`

const StyledLogoTriangle = styled(LogoTriangle)`
  ${sharedLogoStyles};

  animation-name: ${animPushOut3D};
  animation-timing-function: ${ease.cubic};
  animation-duration: ${PAINT_ANIM_DURATION}s;
  animation-delay: ${3.5 * DRAW_ANIM_DURATION}s;
  animation-fill-mode: both;

  g {
    // Contour
    &:nth-of-type(1) {
      path {
        animation-name: ${animDrawLines}, ${animFadeOut};
        animation-timing-function: linear, ${ease.cubic};
        animation-duration: ${DRAW_ANIM_DURATION}s, ${DRAW_ANIM_DURATION}s;

        &:nth-of-type(1) {
          animation-delay: ${PAINT_ANIM_DURATION}s, ${3 * DRAW_ANIM_DURATION}s;
        }

        &:nth-of-type(2) {
          animation-delay: ${0.5 * PAINT_ANIM_DURATION}s,
            ${3 * DRAW_ANIM_DURATION}s;
        }
      }
    }

    // Fill
    &:nth-of-type(2) {
      path {
        animation-name: ${animFadeIn}, ${animOilSpill};
        animation-timing-function: ${ease.cubic};
        animation-duration: ${PAINT_ANIM_DURATION}s;
        animation-delay: ${3.5 * DRAW_ANIM_DURATION}s;
      }
    }
  }
`

const StyledLogoShading = styled(LogoShading)`
  ${sharedLogoStyles};

  // Height & width inferred from the triangle logo
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;

  animation-name: ${animPushOut3D};
  animation-duration: ${PAINT_ANIM_DURATION}s;
  animation-timing-function: ${ease.cubic};
  animation-fill-mode: both;
  animation-delay: ${2.5 * DRAW_ANIM_DURATION + 4 * STAGGER_ANIM_DELAY}s;

  // Fill
  path {
    opacity: 0;

    animation-name: ${animFadeIn}, ${animOilSpill};
    animation-duration: ${PAINT_ANIM_DURATION}s;
    animation-timing-function: ${ease.cubic};
    animation-fill-mode: both;

    &:nth-of-type(1) {
      animation-delay: ${2.5 * DRAW_ANIM_DURATION}s;
    }

    &:nth-of-type(2) {
      animation-delay: ${2.5 * DRAW_ANIM_DURATION + STAGGER_ANIM_DELAY}s;
    }

    &:nth-of-type(3) {
      animation-delay: ${2.5 * DRAW_ANIM_DURATION + 2 * STAGGER_ANIM_DELAY}s;
    }

    &:nth-of-type(4) {
      animation-delay: ${2.5 * DRAW_ANIM_DURATION + 3 * STAGGER_ANIM_DELAY}s;
    }

    &:nth-of-type(5) {
      animation-delay: ${2.5 * DRAW_ANIM_DURATION + 4 * STAGGER_ANIM_DELAY}s;
    }
  }
`

const StyledLogoLetter = styled(LogoLetter)`
  ${sharedLogoStyles};

  // Height & width inferred from the triangle logo
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;

  animation-name: ${animPushOut3D};
  animation-timing-function: ${ease.elastic};
  animation-duration: ${PAINT_ANIM_DURATION}s;
  animation-delay: ${2 * DRAW_ANIM_DURATION}s;
  animation-fill-mode: both;

  path {
    // Contour
    &:nth-of-type(1) {
      animation-name: ${animDrawLines}, ${animFadeOut};
      animation-timing-function: linear, ${ease.cubic};
      animation-duration: ${DRAW_ANIM_DURATION}s, ${DRAW_ANIM_DURATION}s;
      animation-delay: ${1.5 * PAINT_ANIM_DURATION}s, ${2 * DRAW_ANIM_DURATION}s;
    }

    // Fill
    &:nth-of-type(2) {
      animation-name: ${animFadeIn};
      animation-timing-function: ${ease.cubic};
      animation-duration: ${PAINT_ANIM_DURATION}s;
      animation-delay: ${2 * DRAW_ANIM_DURATION}s;
    }
  }
`

export default SplashScreenUI
