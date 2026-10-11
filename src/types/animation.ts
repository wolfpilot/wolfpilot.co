import { MotionProps as AnimationProps } from "motion/react"

export type ListAnimProps = Pick<
  AnimationProps,
  "variants" | "initial" | "animate" | "exit"
>
