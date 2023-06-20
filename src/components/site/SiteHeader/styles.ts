import styled from "styled-components"

// Styles
import { zIndexes } from "@styles/zIndexes"

export const Wrapper = styled.header`
  position: fixed;
  z-index: ${zIndexes.siteHeader};
  top: 0;
  right: 0;
  left: 0;

  /**
   * Events are restored in the individual Nav components.
   *
   * We're only blocking them here so that when the header hides on mobile,
   * it doesn't block any of the interactions underneath.
   */
  pointer-events: none;
`
