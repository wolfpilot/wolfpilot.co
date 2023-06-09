import { Variants, AnimationProps } from "framer-motion"

const variants: Variants = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
  },
}

export const animProps: AnimationProps = {
  variants: variants,
  initial: "hidden",
  animate: "visible",
  exit: "hidden",
}
