import { keyframes } from "styled-components"

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

// Setup
export const DRAW_DURATION = 0.9
export const PAINT_DURATION = 0.6
export const EXIT_DURATION = 0.6
export const STAGGER_DELAY = 0.1

export const ANIM_DURATION = 3.5 * DRAW_DURATION + PAINT_DURATION
export const TOTAL_DURATION = ANIM_DURATION + EXIT_DURATION

// Keyframes

/**
 * translateZ shouldn't be necessary, but otherwise Safari cuts off elements
 *
 * For more info, see:
 * https://stackoverflow.com/a/34863394
 */
export const animShiftLogo = keyframes`
  0% {
    transform: perspective(500px) translateZ(20px) rotate3d(0, 0, 0, 0deg);
  }

  50% {
    transform: perspective(500px) translateZ(20px) rotate3d(1, 0, 0, 15deg);
  }

  65% {
    transform: perspective(500px) translateZ(20px) rotate3d(1, 1, 0, -5deg);
  }

  85% {
    transform: perspective(500px) translateZ(20px) rotate3d(1, 1, 0, 5deg);
  }

  100% {
    transform: perspective(500px) translateZ(20px) rotate3d(0, 0, 0, 0deg);
  }
`

export const animPaintBackdrop = keyframes`
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

export const animDrawLines = keyframes`
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

export const animPulse3d = keyframes`
  0% {
    transform: perspective(500px) translateZ(50px);
  }

  100% {
    transform: perspective(500px) translateZ(0);
  }
`
