import { Variants, AnimationProps } from "framer-motion"

// Constants
import { routes } from "@constants/routes"

// Styles
import { duration } from "@styles/animation"

// List
const listVariants: Variants = {
  hidden: {
    visibility: "hidden",
    transition: {
      staggerChildren: 0,
      staggerDirection: -1,
    },
  },
  visible: {
    visibility: "visible",
    transition: {
      when: "beforeChildren",
      delay: duration.medium,
      staggerChildren: duration.veryFast,
    },
  },
}

export const getListAnimProps = (isOpen: boolean): AnimationProps => ({
  variants: listVariants,
  initial: "hidden",
  animate: isOpen ? "visible" : "hidden",
  exit: "hidden",
})

// Item
export const itemVariants: Variants = {
  hidden: {
    opacity: 0,
    y: 16,
  },
  visible: {
    opacity: 1,
    y: 0,
  },
}

// Social
const getSocialVariants: Variants = {
  hidden: {
    visibility: "hidden",
    opacity: 0,
    y: 16,
  },
  visible: {
    visibility: "visible",
    opacity: 1,
    y: 0,
    transition: {
      delay: duration.medium + Object.keys(routes).length * duration.veryFast,
    },
  },
}

export const getSocialAnimProps = (isOpen: boolean): AnimationProps => ({
  variants: getSocialVariants,
  initial: "hidden",
  animate: isOpen ? "visible" : "hidden",
  exit: "hidden",
})
