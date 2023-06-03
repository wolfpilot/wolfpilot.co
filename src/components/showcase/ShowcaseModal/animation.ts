import { Variants, AnimationProps } from "framer-motion"

// Styles
import { duration, ease } from "@styles/animation"

// Setup
const ANIM_DURATION = duration.slow
const ANIM_DELAY = duration.medium
const ANIM_EASE = ease.framer.cubic

// Wrapper
const wrapperVariants: Variants = {
  hidden: {
    opacity: 0,
    transition: {
      duration: ANIM_DURATION,
      delay: ANIM_DELAY,
      ease: ANIM_EASE,
    },
  },
  visible: {
    opacity: 1,
    transition: {
      duration: ANIM_DURATION,
      delay: ANIM_DELAY,
      ease: ANIM_EASE,
    },
  },
}

export const getWrapperAnimProps = (isOpen: boolean): AnimationProps => ({
  variants: wrapperVariants,
  initial: "hidden",
  animate: isOpen ? "visible" : "hidden",
  exit: "hidden",
})

// Content
const contentVariants: Variants = {
  hidden: {
    opacity: 0,
    translateY: -20,
    transition: {
      duration: ANIM_DURATION,
      delay: ANIM_DELAY,
      ease: ANIM_EASE,
    },
  },
  visible: {
    opacity: 1,
    translateY: 0,
    transition: {
      duration: ANIM_DURATION,
      delay: ANIM_DELAY,
      ease: ANIM_EASE,
    },
  },
}

export const getContentAnimProps = (isOpen: boolean): AnimationProps => ({
  variants: contentVariants,
  initial: "hidden",
  animate: isOpen ? "visible" : "hidden",
  exit: "hidden",
})

// Details
const detailsVariants: Variants = {
  initial: {
    opacity: 0,
    translateY: -20,
  },
  hidden: {
    opacity: 0,
    translateY: 20,
    transition: {
      duration: ANIM_DURATION,
      ease: ANIM_EASE,
    },
  },
  visible: {
    opacity: 1,
    translateY: 0,
    transition: {
      duration: ANIM_DURATION,
      ease: ANIM_EASE,
    },
  },
}

export const getDetailsAnimProps = (isImgLoaded: boolean): AnimationProps => ({
  variants: detailsVariants,
  initial: "initial",
  animate: isImgLoaded ? "visible" : "hidden",
  exit: "hidden",
})

// Image Scroller
const imgScrollerVariants: Variants = {
  initial: {
    opacity: 0,
    scale: 1.05,
  },
  hidden: {
    opacity: 0,
    scale: 1,
    transition: {
      duration: ANIM_DURATION,
      ease: ANIM_EASE,
    },
  },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: ANIM_DURATION,
      ease: ANIM_EASE,
    },
  },
}

export const getImgScrollerAnimProps = (
  isImgLoaded: boolean
): AnimationProps => ({
  variants: imgScrollerVariants,
  initial: "initial",
  animate: isImgLoaded ? "visible" : "hidden",
  exit: "hidden",
})
