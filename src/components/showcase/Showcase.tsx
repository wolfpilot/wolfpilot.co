import { useState } from "react"
import { ImageProps } from "next/image"
import styled from "styled-components"
import { AnimatePresence } from "framer-motion"

// Types
import { Route } from "@ts/routes"

// Components
import ShowcaseNavList from "./ShowcaseNavList"
import ShowcaseProjectList from "./ShowcaseProjectList"

export type Tag =
  | "featured"
  | "web development"
  | "web design"
  | "concept art"
  | "illustration"

export type LinkType = "ext" | "int"

export interface ShowcaseItem {
  id: string
  name: string
  tagline: string
  tags: Tag[]
  thumb: ImageProps
  image: ImageProps
  alt: string
  links?: Route[]
}

export interface Props {
  items: ShowcaseItem[]
}

export type HandleClickTag = (tag: Tag) => void

// Setup
const tags: Tag[] = [
  "featured",
  "web development",
  "web design",
  "concept art",
  "illustration",
]

const Showcase: React.FC<Props> = ({ items }) => {
  const [activeTag, setActiveTag] = useState<Tag>("featured")

  if (!items?.length) return null

  const handleClickTag: HandleClickTag = (newTag: Tag) => {
    setActiveTag(newTag)
  }

  const activeItems = items.filter((item) => item.tags.includes(activeTag))

  return (
    <Wrapper>
      <ShowcaseNavList
        items={items}
        tags={tags}
        activeTag={activeTag}
        handleClickTag={handleClickTag}
      />

      <AnimatePresence initial={false} mode="wait">
        {activeItems && (
          <ShowcaseProjectList key={activeTag} items={activeItems} />
        )}
      </AnimatePresence>
    </Wrapper>
  )
}

const Wrapper = styled.div``

export default Showcase
