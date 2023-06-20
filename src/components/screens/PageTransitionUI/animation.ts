import { AnimationProps } from "framer-motion"

// Styles
import { ease } from "@styles/animation"

// Setup
export const ANIM_COVER_DURATION = 0.5
export const ANIM_SWIPER_DURATION = 1.5
export const ANIM_DELAY = 0.5
export const ANIM_EASE = ease.framer.cubic

export const coverAnimProps: AnimationProps = {
  initial: {
    opacity: 1,
  },
  animate: {
    opacity: 0,
  },
  exit: {
    opacity: 1,
  },
  transition: {
    duration: ANIM_COVER_DURATION,
    ease: ANIM_EASE,
  },
}

export const swiperAnimProps: AnimationProps = {
  initial: false,
  animate: {
    scaleY: 0,
    translateY: "0%",
    transition: {
      duration: ANIM_SWIPER_DURATION,
      ease: ANIM_EASE,
    },
  },
  exit: {
    scaleY: [0, 1, 1],
    translateY: ["0%", "0%", "100%"],
    transition: {
      duration: ANIM_SWIPER_DURATION,
      delay: ANIM_DELAY,
      ease: ANIM_EASE,
    },
  },
}

export const contentAnimProps: AnimationProps = {
  initial: {
    translateY: -20,
  },
  animate: {
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
    translateY: 0,
  },
  transition: {
    duration: ANIM_COVER_DURATION,
    ease: ANIM_EASE,
  },
}
