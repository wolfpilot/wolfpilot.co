import { Variants, AnimationProps } from "framer-motion"

// Styles
import { duration, ease } from "@styles/animation"

const itemVariants: Variants = {
  hidden: {
    height: 0,
    opacity: 0,
    transition: {
      duration: duration.slow,
      ease: ease.framer.cubic,
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
      ease: ease.framer.cubic,
    },
  },
}

export const getItemAnimProps = (isSelected: boolean): AnimationProps => ({
  variants: itemVariants,
  initial: "hidden",
  animate: isSelected ? "visible" : "hidden",
  exit: "hidden",
})
