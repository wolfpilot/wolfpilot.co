// Types
import { StaticImageData } from "next/image"
import { Tag } from "@components/showcase/types"
import { Props as CardProps } from "@components/generic/Card"
import { Props as ImageProps } from "@components/slices/ImageSlice/ImageSlice"

// Data
import { pageData as cawrPageData } from "./cawr"
import { pageData as retrocadePageData } from "./retrocade"
import { pageData as wolfPilotPageData } from "./wolfPilot"

// Static page data
export type CaseType = "personal" | "commercial" | "agency"

export interface Meta {
  title: string
  tagline: string
  category: CaseType
  date: Date
  technologies: string
  tags: Tag[]
  image: {
    src: StaticImageData
    alt: string
  }
}

export interface Summary {
  heading: string
  text: string
}

export interface Statement extends CardProps {}

// Dynamic content data
export interface ImageSlice {
  type: "image"
  data: ImageProps
}

export type SliceType = ImageSlice

export type Content = SliceType[]

// Result
export interface PageData {
  meta: Meta
  summary: Summary
  statement: Statement
  content: Content
}

export const data: Record<string, PageData> = {
  cawr: cawrPageData,
  retrocade: retrocadePageData,
  wolfPilot: wolfPilotPageData,
}
