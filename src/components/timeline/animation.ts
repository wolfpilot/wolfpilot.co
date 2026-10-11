import { Variants, MotionProps as AnimationProps } from "motion/react"

// Styles
import { duration, easeFramer } from "@styles/animation"

const itemVariants: Variants = {
  hidden: {
    height: 0,
    opacity: 0,
    transition: {
      duration: duration.slow,
      ease: easeFramer.cubic,
    },
    transitionEnd: {
      visibility: "hidden",
    },
  },
  visible: {
    height: "auto",
    visibility: "visible",
    opacity: 1,
    transition: {
      duration: duration.slow,
      ease: easeFramer.cubic,
    },
  },
}

export const getItemAnimProps = (isActive: boolean): AnimationProps => ({
  variants: itemVariants,
  initial: isActive ? "visible" : "hidden",
  animate: isActive ? "visible" : "hidden",
  exit: "hidden",
})
