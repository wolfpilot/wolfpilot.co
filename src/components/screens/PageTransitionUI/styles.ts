import styled from "styled-components"
import { motion } from "framer-motion"

// Styles
import { zIndexes } from "@styles/zIndexes"

export const Wrapper = styled.div``

export const Content = styled(motion.div)``

export const Cover = styled(motion.div)`
  position: fixed;
  z-index: ${zIndexes.pageTransitionUI};
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  background-color: var(--c-accent1);
  transform-origin: bottom center;
`
