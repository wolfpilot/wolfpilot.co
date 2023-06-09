import { AnimationProps } from "framer-motion"

// Styles
import { ease } from "@styles/animation"

// Setup
const ANIM_DURATION = 1.5
const ANIM_EASE = ease.framer.cubic

export const coverAnimProps: AnimationProps = {
  initial: false,
  animate: {
    scaleY: 0,
    translateY: "0%",
  },
  exit: {
    scaleY: [0, 1, 1],
    translateY: ["0%", "0%", "-100%"],
  },
  transition: {
    duration: ANIM_DURATION,
    ease: ANIM_EASE,
  },
}

export const contentAnimProps: AnimationProps = {
  initial: {
    opacity: 0,
    translateY: -20,
  },
  animate: {
    opacity: 1,
    translateY: 0,
    transitionEnd: {
      /**
       * Fix Framer leaving transform property inline which screws up
       * any sort of absolute or fixed positioning.
       *
       * For more info, see:
       * https://github.com/framer/motion/issues/823
       */
      translateY: 0,
    },
  },
  exit: {
    opacity: 0,
    translateY: 0,
  },
  transition: {
    duration: ANIM_DURATION / 3,
    delay: ANIM_DURATION / 3,
    ease: ANIM_EASE,
  },
}
