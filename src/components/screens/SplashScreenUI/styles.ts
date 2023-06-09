import styled, { css } from "styled-components"

// Styles
import { mq } from "@styles/utils/mediaQueries"
import { zIndexes } from "@styles/zIndexes"
import { ease, animFadeIn, animFadeOut, animOilSpill } from "@styles/animation"

// Components
import LogoLetter from "@components/logo/LogoLetter"
import LogoShading from "@components/logo/LogoShading"
import LogoTriangle from "@components/logo/LogoTriangle"

// Animation
import {
  DRAW_ANIM_DURATION,
  PAINT_ANIM_DURATION,
  STAGGER_ANIM_DELAY,
  animShiftLogo,
  animPaintBackdrop,
  animDrawLines,
  animPushOut3D,
} from "./animation"

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
export const Wrapper = styled.div`
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

export const Backdrop = styled.div`
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

export const LogoWrapper = styled.div`
  position: relative;

  animation: ${animShiftLogo} ${3.5 * DRAW_ANIM_DURATION + PAINT_ANIM_DURATION}s
    ${ease.cubic} both;
`

export const StyledLogoTriangle = styled(LogoTriangle)`
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

export const StyledLogoShading = styled(LogoShading)`
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

export const StyledLogoLetter = styled(LogoLetter)`
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
