// Types
import { StaticImageData } from "next/image"
import { Tag } from "@components/showcase/types"

// Data
import { pageData as cawrPageData } from "./cawr"
import { pageData as retrocadePageData } from "./retrocade"
import { pageData as wolfPilotPageData } from "./wolfPilot"

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

export interface PageData {
  meta: Meta
}

export const data: Record<string, PageData> = {
  cawr: cawrPageData,
  retrocade: retrocadePageData,
  wolfPilot: wolfPilotPageData,
}
