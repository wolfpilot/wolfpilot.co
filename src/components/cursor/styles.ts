import styled from "styled-components"

// Styles
import { mq } from "@styles/utils/mediaQueries"
import { zIndexes } from "@styles/zIndexes"

// Setup
export const CURSOR_RADIUS = 20

export const Wrapper = styled.div`
  display: none;

  // Only enable for precise hover devices without reduced motion.
  @media (hover: hover) and (pointer: fine) and (prefers-reduced-motion: no-preference) {
    display: block;
    position: fixed;
    z-index: ${zIndexes.customCursor};
    top: 0;
    left: 0;
    width: ${2 * CURSOR_RADIUS}px;
    height: ${2 * CURSOR_RADIUS}px;
    border-radius: 50%;
    background-color: var(--c-cursor);
    mix-blend-mode: hue;
    pointer-events: none;

    ${mq.vendor.safariOnly`
      mix-blend-mode: color-burn;
    `}
  }
`
