import { Variants, MotionProps as AnimationProps } from "motion/react"

// Styles
import { duration } from "@styles/animation"

// Setup
const listVariants: Variants = {
  hidden: {
    visibility: "hidden",
    transition: {
      when: "afterChildren",
      staggerChildren: 0,
      staggerDirection: -1,
    },
  },
  visible: {
    visibility: "visible",
    transition: {
      when: "beforeChildren",
      delay: duration.medium,
      staggerChildren: duration.fast,
    },
  },
}

export const getListAnimProps = (
  showAll: boolean
): Pick<AnimationProps, "variants" | "initial" | "animate" | "exit"> => ({
  variants: listVariants,
  initial: "hidden",
  animate: showAll ? "visible" : "hidden",
  exit: "hidden",
})

export const itemVariants: Variants = {
  hidden: {
    opacity: 0,
    translateY: 16,
  },
  visible: {
    opacity: 1,
    translateY: 0,
  },
}
