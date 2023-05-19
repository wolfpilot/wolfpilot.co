"use client"

import { useState, useEffect } from "react"

import styled, { css, keyframes } from "styled-components"

// Assets
import LogoLetter from "@/components/logo/LogoLetter"
import LogoShading from "@/components/logo/LogoShading"
import LogoTriangle from "@/components/logo/LogoTriangle"

// Utils
import { Coords, useMousePosition } from "@/utils/hooks/useMousePosition"
import { getWindowSize } from "@/utils/hooks/useWindowSize"
import { delay } from "@/utils/helper"

// Styles
import { ease, animFadeIn, animFadeOut, animOilSpill } from "@/styles/animation"

// Setup
const INITIAL_ANIM_DELAY = 0
const DRAW_ANIM_DURATION = 900
const PAINT_ANIM_DURATION = 600
const STAGGER_ANIM_DELAY = 100

const DEFAULT_PERSPECTIVE_VAL = 500
const MAX_ROTATION_DEG = 30
const MAX_TRIANGLE_DISTANCE_PX = 50
const MAX_SHADING_DISTANCE_PX = 50
const MAX_LOGO_DISTANCE_PX = 150

export interface Props {
  onLoaded: () => void
}

export interface TransformValues {
  rotation: number
  rotationXVal: number
  rotationYVal: number
  distance: number
}

// Utils

const SplashScreenUI: React.FC<Props> = ({ onLoaded }) => {
  const [logoRotation, setLogoRotation] = useState<number>(0)
  const [logoRotationX, setLogoRotationX] = useState<number>(0)
  const [logoRotationY, setLogoRotationY] = useState<number>(0)

  const [triangleDistance, setTriangleDistance] = useState<number>(0)
  const [shadingDistance, setShadingDistance] = useState<number>(0)
  const [logoDistance, setLogoDistance] = useState<number>(0)

  const mouseCoords = useMousePosition()

  // console.log("mouseCoords", mouseCoords)

  const handleMouseMove = (coords: Coords) => {
    if (!coords.x || !coords.y) return

    // transform: perspective(500px) rotate3d(1, 1, 1, 15deg) translate3d(0, 0, 100px);

    // Get coords from the middle of the screen

    // *: Explain. We need to map the mouse position to a range from 0 (center of the screen) to a limit
    // *: (say, 15 degrees) which would be at the end of the screen.

    // !: initially from top left, so we need to add half a screen height + width
    // !: and calculate left/ right from there
    const windowSize = getWindowSize()

    if (!windowSize.width || !windowSize.height) return

    const screenMidX = windowSize.width / 2
    const screenMidY = windowSize.height / 2

    const deltaX = coords.x - screenMidX
    const deltaY = coords.y - screenMidY

    // Calculate what % the mouse has moved from the center of the screen compared the edges
    const percentageX = Number((deltaX / screenMidX).toFixed(2))
    const percentageY = Number((deltaY / screenMidY).toFixed(2))

    const newLogoRotationX = Math.abs(MAX_ROTATION_DEG * percentageX)

    // Calculate an average of the X and Y rotations
    const newLogoRotation =
      deltaX > 0 ? newLogoRotationX : newLogoRotationX * -1

    setLogoRotationX(percentageX)
    setLogoRotationY(percentageY)
    setLogoRotation(newLogoRotation)

    const newLogoDistanceX = Math.abs(MAX_LOGO_DISTANCE_PX * percentageX)
    const newLogoDistanceY = Math.abs(MAX_LOGO_DISTANCE_PX * percentageY)

    // Calculate an average of the X and Y rotations
    const newLogoDistance = Number(
      ((newLogoDistanceX + newLogoDistanceY) / 2).toFixed(2)
    )

    setLogoDistance(newLogoDistance)

    const newShadingDistanceX = Math.abs(MAX_SHADING_DISTANCE_PX * percentageX)
    const newShadingDistanceY = Math.abs(MAX_SHADING_DISTANCE_PX * percentageY)

    // Calculate an average of the X and Y rotations
    const newShadingDistance = Number(
      ((newShadingDistanceX + newShadingDistanceY) / 2).toFixed(2)
    )

    setShadingDistance(newShadingDistance)
  }

  // !: on finish anim
  useEffect(() => {
    const getUsers = async () => {
      await delay(400000)

      onLoaded()
    }

    getUsers() // run it, run it
  }, [])

  useEffect(() => {
    handleMouseMove(mouseCoords)
  }, [mouseCoords])

  return (
    <Wrapper>
      <Backdrop />

      <LogoWrapper
        // !: move this to a generateCSS function?
        style={{
          transform: `
            perspective(500px)
            rotate3d(${logoRotationX}, ${logoRotationY}, 1, ${logoRotation}deg)
            translate3d(0, 0, ${shadingDistance}px)
            `,
        }}
      >
        <StyledLogoTriangle />
        <StyledLogoShading />

        {/* Add another wrapper here, think Framer Motion */}
        {/* style={{
          transform: `
          perspective(500px) translate3d(0, 0, ${logoDistance}px)
          `
        }} */}
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
const animPaintBackdrop = keyframes`
  0% {
    opacity: 0;
    transform: scale(1.15);
  }

  100% {
    opacity: 1;
    transform: scale(1);
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

// Shared styles
const sharedLogoStyles = css`
  width: 25vw;
  height: auto;

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
`

const Backdrop = styled.div`
  position: absolute;
  z-index: -1;
  width: 20vw;
  height: 20vw;
  border-radius: 50%;
  background-color: var(--c-neutral4);

  animation: ${animPaintBackdrop} ${PAINT_ANIM_DURATION}ms ${ease.cubic}
    ${INITIAL_ANIM_DELAY}ms both;
`

const LogoWrapper = styled.div`
  position: relative;
`

const StyledLogoTriangle = styled(LogoTriangle)`
  ${sharedLogoStyles};

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

        &:nth-of-type(1),
        &:nth-of-type(2) {
          animation-delay: ${INITIAL_ANIM_DELAY + 3.5 * DRAW_ANIM_DURATION}ms;
        }
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

  // Fill
  path {
    opacity: 0;
    animation-timing-function: ${ease.cubic};
    animation-fill-mode: both;

    animation-name: ${animFadeIn}, ${animOilSpill};
    animation-duration: ${PAINT_ANIM_DURATION}ms;

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
