"use client"

import styled, { css, keyframes } from "styled-components"

// Assets
import LogoLetter from "@/components/logo/LogoLetter"
import LogoShading from "@/components/logo/LogoShading"
import LogoTriangle from "@/components/logo/LogoTriangle"

// Styles
import { mq } from "@/styles/utils/mediaQueries"
import { ease, animFadeIn, animFadeOut, animOilSpill } from "@/styles/animation"

// Setup
const INITIAL_ANIM_DELAY = 0
const DRAW_ANIM_DURATION = 900
const PAINT_ANIM_DURATION = 600
const STAGGER_ANIM_DELAY = 100

const TOTAL_ANIM_DURATION =
  INITIAL_ANIM_DELAY + 3.5 * DRAW_ANIM_DURATION + PAINT_ANIM_DURATION

const SplashScreenUI: React.FC = () => (
  <Wrapper>
    <Backdrop />

    <LogoWrapper>
      <StyledLogoTriangle />
      <StyledLogoShading />
      <StyledLogoLetter />
    </LogoWrapper>
  </Wrapper>
)

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
  width: 75vw;
  height: auto;

  ${mq.from.S`
    width: 50vw;
  `}

  ${mq.from.L`
    width: 25vw;
  `}

  path {
    animation-fill-mode: both;
  }
`

// Main styles
const Wrapper = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  animation: ${animFadeOut} ${PAINT_ANIM_DURATION}ms ${ease.cubic}
    ${INITIAL_ANIM_DELAY + TOTAL_ANIM_DURATION}ms both;
`

const Backdrop = styled.div`
  position: absolute;
  z-index: -1;
  width: 60vw;
  height: 60vw;
  border-radius: 50%;
  background-color: var(--c-neutral4);

  animation: ${animPaintBackdrop} ${TOTAL_ANIM_DURATION}ms ${ease.cubic}
    ${INITIAL_ANIM_DELAY}ms both;

  ${mq.from.S`
    width: 40vw;
    height: 40vw;
  `}

  ${mq.from.M`
    width: 20vw;
    height: 20vw;
  `}
`

const LogoWrapper = styled.div`
  position: relative;

  animation: ${animShiftLogo} ${TOTAL_ANIM_DURATION}ms ${ease.cubic}
    ${INITIAL_ANIM_DELAY}ms both;
`

const StyledLogoTriangle = styled(LogoTriangle)`
  ${sharedLogoStyles};

  animation-name: ${animPushOut3D};
  animation-timing-function: ${ease.cubic};
  animation-duration: ${PAINT_ANIM_DURATION}ms;
  animation-delay: ${INITIAL_ANIM_DELAY + 3.5 * DRAW_ANIM_DURATION}ms;
  animation-fill-mode: both;

  g {
    // Contour
    &:nth-of-type(1) {
      path {
        animation-name: ${animDrawLines}, ${animFadeOut};
        animation-timing-function: linear, ${ease.cubic};
        animation-duration: ${DRAW_ANIM_DURATION}ms, ${DRAW_ANIM_DURATION}ms;

        &:nth-of-type(1) {
          animation-delay: ${INITIAL_ANIM_DELAY + PAINT_ANIM_DURATION}ms,
            ${INITIAL_ANIM_DELAY + 3 * DRAW_ANIM_DURATION}ms;
        }

        &:nth-of-type(2) {
          animation-delay: ${INITIAL_ANIM_DELAY + 0.5 * PAINT_ANIM_DURATION}ms,
            ${INITIAL_ANIM_DELAY + 3 * DRAW_ANIM_DURATION}ms;
        }
      }
    }

    // Fill
    &:nth-of-type(2) {
      path {
        animation-name: ${animFadeIn}, ${animOilSpill};
        animation-timing-function: ${ease.cubic};
        animation-duration: ${PAINT_ANIM_DURATION}ms;
        animation-delay: ${INITIAL_ANIM_DELAY + 3.5 * DRAW_ANIM_DURATION}ms;
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
  animation-duration: ${PAINT_ANIM_DURATION}ms;
  animation-timing-function: ${ease.cubic};
  animation-fill-mode: both;
  animation-delay: ${INITIAL_ANIM_DELAY +
  2.5 * DRAW_ANIM_DURATION +
  4 * STAGGER_ANIM_DELAY}ms;

  // Fill
  path {
    opacity: 0;

    animation-name: ${animFadeIn}, ${animOilSpill};
    animation-duration: ${PAINT_ANIM_DURATION}ms;
    animation-timing-function: ${ease.cubic};
    animation-fill-mode: both;

    &:nth-of-type(1) {
      animation-delay: ${INITIAL_ANIM_DELAY + 2.5 * DRAW_ANIM_DURATION}ms;
    }

    &:nth-of-type(2) {
      animation-delay: ${INITIAL_ANIM_DELAY +
      2.5 * DRAW_ANIM_DURATION +
      STAGGER_ANIM_DELAY}ms;
    }

    &:nth-of-type(3) {
      animation-delay: ${INITIAL_ANIM_DELAY +
      2.5 * DRAW_ANIM_DURATION +
      2 * STAGGER_ANIM_DELAY}ms;
    }

    &:nth-of-type(4) {
      animation-delay: ${INITIAL_ANIM_DELAY +
      2.5 * DRAW_ANIM_DURATION +
      3 * STAGGER_ANIM_DELAY}ms;
    }

    &:nth-of-type(5) {
      animation-delay: ${INITIAL_ANIM_DELAY +
      2.5 * DRAW_ANIM_DURATION +
      4 * STAGGER_ANIM_DELAY}ms;
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
  animation-duration: ${PAINT_ANIM_DURATION}ms;
  animation-delay: ${INITIAL_ANIM_DELAY + 2 * DRAW_ANIM_DURATION}ms;
  animation-fill-mode: both;

  path {
    // Contour
    &:nth-of-type(1) {
      animation-name: ${animDrawLines}, ${animFadeOut};
      animation-timing-function: linear, ${ease.cubic};
      animation-duration: ${DRAW_ANIM_DURATION}ms, ${DRAW_ANIM_DURATION}ms;
      animation-delay: ${INITIAL_ANIM_DELAY + 1.5 * PAINT_ANIM_DURATION}ms,
        ${INITIAL_ANIM_DELAY + 2 * DRAW_ANIM_DURATION}ms;
    }

    // Fill
    &:nth-of-type(2) {
      animation-name: ${animFadeIn};
      animation-timing-function: ${ease.cubic};
      animation-duration: ${PAINT_ANIM_DURATION}ms;
      animation-delay: ${INITIAL_ANIM_DELAY + 2 * DRAW_ANIM_DURATION}ms;
    }
  }
`

export default SplashScreenUI
