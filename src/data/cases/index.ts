// Types
import { Tag } from "@components/showcase/types"

// Data
import { pageData as cawrPageData } from "./cawr"
import { pageData as retrocadePageData } from "./retrocade"
import { pageData as wolfPilotPageData } from "./wolfPilot"

export type CaseType = "personal" | "commercial" | "agency"

export interface Meta {
  date: Date
  title: string
  tagline: string
  category: CaseType
  tags: Tag[]
  technologies: string
}

export interface PageData {
  meta: Meta
}

export const data: Record<string, PageData> = {
  cawr: cawrPageData,
  retrocade: retrocadePageData,
  wolfPilot: wolfPilotPageData,
}
