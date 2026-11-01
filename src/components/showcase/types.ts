// Types
import { ImageProps } from "next/image"
import { Route } from "@ts/routes"

export type Tag =
  | "featured"
  | "web development"
  | "web design"
  | "concept art"
  | "illustration"

export interface ShowcaseItem {
  id: string
  name: string
  tagline: string
  tags: Tag[]
  thumb: ImageProps
  thumbVideo?: string
  image: ImageProps
  video?: string
  alt: string
  links?: Route[]
}
