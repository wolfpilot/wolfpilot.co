import { useEffect } from "react"
import { useSearchParams } from "next/navigation"
import styled from "styled-components"
import { AnimatePresence } from "framer-motion"

// Types
import { Tag, ShowcaseItem } from "./types"

// Utils
import { useShowcaseState, useShowcaseDispatch } from "./Context"

// Components
import ShowcaseNavList from "./ShowcaseNavList/ShowcaseNavList"
import ShowcaseProjectList from "./ShowcaseProjectList/ShowcaseProjectList"

export interface Props {
  items: ShowcaseItem[]
}
// Setup
const tags: Tag[] = [
  "featured",
  "web development",
  "web design",
  "concept art",
  "illustration",
]

const Showcase: React.FC<Props> = ({ items }) => {
  const showcaseState = useShowcaseState()
  const showcaseDispatch = useShowcaseDispatch()

  const searchParams = useSearchParams()
  const tagParam = searchParams?.get("tag") as Tag | null

  const { activeTag, activeItems } = showcaseState

  /**
   * Update active tag if found in URL params
   */
  useEffect(() => {
    if (!tagParam || !tags.includes(tagParam)) return

    showcaseDispatch({
      type: "updateActiveTag",
      payload: tagParam,
    })
  }, [tagParam, showcaseDispatch])

  /**
   * Update the active items when active tag changes
   */
  useEffect(() => {
    const newActiveItems = items.filter((item) => item.tags.includes(activeTag))

    showcaseDispatch({
      type: "updateActiveItems",
      payload: newActiveItems,
    })
  }, [items, activeTag, showcaseDispatch])

  if (!items?.length) return null

  return (
    <Wrapper>
      <ShowcaseNavList items={items} tags={tags} activeTag={activeTag} />

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
