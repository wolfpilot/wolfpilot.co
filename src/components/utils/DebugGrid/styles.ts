import styled from "styled-components"

// Styles
import { zIndexes } from "@styles/zIndexes"

export const Wrapper = styled.div`
  position: fixed;
  z-index: ${zIndexes.gridOverlay};
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  pointer-events: none;
`

export const Info = styled.h2`
  position: absolute;
  top: var(--grid-gutter-size);
  left: 0;
  right: 0;
  text-align: center;
`

export const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(var(--grid-columns), 1fr);
  grid-gap: var(--grid-gutter-size);
  max-width: var(--max-content-width);
  width: 100%;
  height: 100%;
  margin: 0 auto;
  padding: 0 var(--grid-offset-size);
  background-color: var(--c-gridBgColor);
`

export const Column = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: var(--c-gridColumnBgColor);
  color: var(--c-gridTextColor);
`
