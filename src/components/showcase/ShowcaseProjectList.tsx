import styled from "styled-components"
import { Variants, motion } from "framer-motion"

// Types
import { ShowcaseItem } from "./Showcase"

// Styles
import { mq } from "@styles/utils/mediaQueries"

// Components
import ShowcaseProjectItem from "./ShowcaseProjectItem"

export interface Props {
  items: ShowcaseItem[]
}

// Setup
const variants: Variants = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
  },
}

const ShowcaseProjectList: React.FC<Props> = ({ items }) => (
  <Wrapper variants={variants} initial="hidden" animate="visible" exit="hidden">
    {items.map((item) => (
      <ShowcaseProjectItem
        key={item.id}
        name={item.name}
        tagline={item.tagline}
        thumb={item.thumb}
        links={item.links}
      />
    ))}
  </Wrapper>
)

const Wrapper = styled(motion.div)`
  ${mq.from.M`
    column-count: 2;
    column-gap: var(--grid-gutter);
  `}

  ${mq.from.L`
    column-count: 3;
  `}
`

export default ShowcaseProjectList
