import { useEffect } from "react"
import styled from "styled-components"
import { AnimatePresence } from "framer-motion"

// Types
import { Tag, ShowcaseItem } from "./types"

// Utils
import { usePageState, usePageDispatch } from "@utils/context/PageContext"

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
  const pageState = usePageState()
  const pageDispatch = usePageDispatch()

  const { showcaseActiveTag: activeTag, showcaseActiveItems: activeItems } =
    pageState

  /**
   * Update the active items when active tag changes
   */
  useEffect(() => {
    const newActiveItems = items.filter((item) => item.tags.includes(activeTag))

    pageDispatch({
      type: "updateShowcaseActiveItems",
      payload: newActiveItems,
    })
  }, [items, activeTag, pageDispatch])

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
