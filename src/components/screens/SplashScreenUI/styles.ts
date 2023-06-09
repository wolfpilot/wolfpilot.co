import styled, { css } from "styled-components"

// Styles
import { mq } from "@styles/utils/mediaQueries"
import { zIndexes } from "@styles/zIndexes"
import { ease, animFadeIn, animFadeOut, animOilSpill } from "@styles/animation"

// Components
import LogoLetter from "@components/logo/LogoLetter"
import LogoDetails from "@components/logo/LogoDetails"
import LogoTriangle from "@components/logo/LogoTriangle"

// Animation
import {
  DRAW_DURATION,
  PAINT_DURATION,
  STAGGER_DELAY,
  animShiftLogo,
  animPaintBackdrop,
  animDrawLines,
  animPulse3d,
} from "./animation"

/**
 * * Design philosophy:
 *
 * The whole idea behind this animation is to emphasize the building order,
 * starting with the bare outlines, dropping in solid blocks of colour and
 * eventually the entire thing comes together.
 *
 * You get a little bit of time to look at the result, then it disappears.
 *
 * * Animation order explained:
 *
 * 1. Enter backdrop.
 * 2. Draw in triangle top, then bottom, then letter, staggered.
 * 3. Paint in letter.
 * 4. Paint in details, staggered.
 * 5. Fade out drawings.
 * 6. Paint in triangle.
 * 7. Display.
 * 8. Fade out.
 *
 * * Other notes:
 *
 * Throughout the animation, the LogoWrapper manipulates the overall shape.
 * Drawings fade out prior to shaped being painted in.
 * Shapes pulse outwards at various intervals.
 */

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

  animation-name: ${animFadeOut};
  animation-duration: ${PAINT_DURATION}s;
  animation-delay: ${3.5 * DRAW_DURATION + PAINT_DURATION}s;
  animation-timing-function: ${ease.cubic};
  animation-fill-mode: both;

  svg,
  g,
  path {
    animation-fill-mode: both;
  }
`

export const Backdrop = styled.div`
  position: absolute;
  z-index: -1;
  width: calc(2 * var(--grid-column-size) + var(--grid-gutter-size));
  height: calc(2 * var(--grid-column-size) + var(--grid-gutter-size));
  border-radius: 50%;
  background-color: var(--c-neutral4);

  animation-name: ${animPaintBackdrop};
  animation-duration: ${3.5 * DRAW_DURATION + PAINT_DURATION}s;
  animation-timing-function: ${ease.cubic};
  animation-fill-mode: both;

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

  animation-name: ${animShiftLogo};
  animation-duration: ${3.5 * DRAW_DURATION + PAINT_DURATION}s;
  animation-timing-function: ${ease.cubic};
`

export const StyledLogoTriangle = styled(LogoTriangle)`
  ${sharedLogoStyles};

  animation-name: ${animPulse3d};
  animation-duration: ${PAINT_DURATION}s;
  animation-delay: ${3.5 * DRAW_DURATION}s;
  animation-timing-function: ${ease.cubic};

  &__contour {
    &-path {
      animation-name: ${animDrawLines}, ${animFadeOut};
      animation-duration: ${DRAW_DURATION}s;
      animation-timing-function: linear, ${ease.cubic};

      &-top {
        animation-delay: ${0.5 * PAINT_DURATION}s, ${3 * DRAW_DURATION}s;
      }

      &-bottom {
        animation-delay: ${PAINT_DURATION}s, ${3 * DRAW_DURATION}s;
      }
    }
  }

  &__shading {
    &-path {
      animation-name: ${animFadeIn}, ${animOilSpill};
      animation-duration: ${PAINT_DURATION}s;
      animation-delay: ${3.5 * DRAW_DURATION}s;
      animation-timing-function: ${ease.cubic};
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

  animation-name: ${animPulse3d};
  animation-duration: ${PAINT_DURATION}s;
  animation-delay: ${2 * DRAW_DURATION}s;
  animation-timing-function: ${ease.elastic};

  &__contour {
    &-path {
      animation-name: ${animDrawLines}, ${animFadeOut};
      animation-duration: ${DRAW_DURATION}s;
      animation-delay: ${1.5 * PAINT_DURATION}s, ${2 * DRAW_DURATION}s;
      animation-timing-function: linear, ${ease.cubic};
    }
  }

  &__shading {
    &-path {
      animation-name: ${animFadeIn};
      animation-duration: ${PAINT_DURATION}s;
      animation-delay: ${2 * DRAW_DURATION}s;
      animation-timing-function: ${ease.cubic};
    }
  }
`

export const StyledLogoDetails = styled(LogoDetails)`
  ${sharedLogoStyles};

  // Height & width inferred from the triangle logo
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;

  animation-name: ${animPulse3d};
  animation-duration: ${PAINT_DURATION}s;
  animation-delay: ${2.5 * DRAW_DURATION + 4 * STAGGER_DELAY}s;
  animation-timing-function: ${ease.cubic};

  &__shading {
    &-path {
      animation-name: ${animFadeIn}, ${animOilSpill};
      animation-duration: ${PAINT_DURATION}s;
      animation-timing-function: ${ease.cubic};

      &:nth-of-type(1) {
        animation-delay: ${2.5 * DRAW_DURATION}s;
      }

      &:nth-of-type(2) {
        animation-delay: ${2.5 * DRAW_DURATION + STAGGER_DELAY}s;
      }

      &:nth-of-type(3) {
        animation-delay: ${2.5 * DRAW_DURATION + 2 * STAGGER_DELAY}s;
      }

      &:nth-of-type(4) {
        animation-delay: ${2.5 * DRAW_DURATION + 3 * STAGGER_DELAY}s;
      }

      &:nth-of-type(5) {
        animation-delay: ${2.5 * DRAW_DURATION + 4 * STAGGER_DELAY}s;
      }
    }
  }
`
