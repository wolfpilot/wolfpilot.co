import styled from "styled-components"
import { motion } from "framer-motion"

// Styles
import { mq } from "@styles/utils/mediaQueries"

export const Wrapper = styled(motion.ul)`
  list-style: none;
  margin: 0;
  padding: 0;

  ${mq.from.M`
    column-count: 2;
    column-gap: var(--grid-gutter);
  `}

  ${mq.from.L`
    column-count: 3;
  `}
`
