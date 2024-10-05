// Types
import { StaticImageData } from "next/image"
import { Route } from "@ts/routes"
import { Tag } from "@components/showcase/types"
import { Props as CardProps } from "@components/generic/Card"
import { Props as ImageProps } from "@components/slices/ImageSlice/ImageSlice"
import { Props as FigureProps } from "@components/slices/FigureSlice/FigureSlice"
import { Props as VideoProps } from "@components/slices/VideoSlice/VideoSlice"
import { Props as TextBlockProps } from "@components/slices/TextBlockSlice/TextBlockSlice"
import { Props as CodeProps } from "@components/slices/CodeSlice/CodeSlice"

// Data
import { pageData as cawrPageData } from "./cawr"
import { pageData as retrocadePageData } from "./retrocade"
import { pageData as wolfPilotPageData } from "./wolfPilot"

// Utils
import { dashToCamel } from "@utils/stringHelper"

// Static page data
export type CaseType = "personal" | "commercial" | "agency"

export interface Meta {
  id: string
  title: string
  description: string
  tagline: string
  category: CaseType
  date: Date
  technologies: string
  tags: Tag[]
  image: {
    src: StaticImageData
    alt: string
    credits?: {
      label: string
      url: string
    }
  }
  prevCase?: Route
  nextCase?: Route
}

export interface Summary {
  heading: string
  html: string
}

export interface Statement extends CardProps {}

// Dynamic content data
export interface ImageSlice {
  type: "image"
  data: ImageProps
}

export interface FigureSlice {
  type: "figure"
  data: FigureProps
}

export interface VideoSlice {
  type: "video"
  data: VideoProps
}

export interface TextBlockSlice {
  type: "textBlock"
  data: TextBlockProps
}

export interface CodeSlice {
  type: "code"
  data: CodeProps
}

export type SliceType =
  | ImageSlice
  | FigureSlice
  | VideoSlice
  | TextBlockSlice
  | CodeSlice

export type Content = SliceType[]

// Result
export interface PageData {
  meta: Meta
  summary: Summary
  statement: Statement
  content: Content
}

/**
 * Parse all pages data to add properties like prev/next case
 * which would otherwise involve manual updating on every change
 */

// Compile a list of all data
const dataArray: PageData[] = [
  cawrPageData,
  retrocadePageData,
  wolfPilotPageData,
]

// Sort from new to old
const dataChronoArray = dataArray.sort(
  (a, b) => a.meta.date.getTime() - b.meta.date.getTime()
)

// Loop through array and add extra properties
export const data = dataChronoArray.reduce(
  (acc, val, index) => {
    // Skip if first item
    const prevIndex = index === 0 ? null : index - 1

    // Skip if last item
    const nextIndex = index === dataChronoArray.length - 1 ? null : index + 1

    const prevCaseData =
      prevIndex === null
        ? null
        : {
            label: dataChronoArray[prevIndex].meta.title,
            url: `/cases/${dataChronoArray[prevIndex].meta.id}`,
          }

    const nextCaseData =
      nextIndex === null
        ? null
        : {
            label: dataChronoArray[nextIndex].meta.title,
            url: `/cases/${dataChronoArray[nextIndex].meta.id}`,
          }

    const newPageData: PageData = {
      ...val,
      meta: {
        ...val.meta,
        ...(prevCaseData !== null && { prevCase: prevCaseData }),
        ...(nextCaseData !== null && { nextCase: nextCaseData }),
      },
    }

    acc[dashToCamel(val.meta.id)] = newPageData

    return acc
  },
  {} as Record<string, PageData>
)
