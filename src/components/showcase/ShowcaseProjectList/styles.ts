import styled from "styled-components"
import { motion } from "framer-motion"

// Styles
import { mq } from "@styles/utils/mediaQueries"
import { listResetStyles } from "@styles/list"

export const Wrapper = styled(motion.ul)`
  ${listResetStyles};

  ${mq.from.M`
    column-count: 2;
    column-gap: var(--grid-gutter-size);
  `}

  ${mq.from.L`
    column-count: 3;
  `}
`
