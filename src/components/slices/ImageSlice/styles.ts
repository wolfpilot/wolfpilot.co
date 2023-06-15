import NextImage from "next/image"
import styled from "styled-components"

// Styles
import { duration, ease } from "@styles/animation"

export const Wrapper = styled.div<{ $fullWidth: boolean }>`
  width: 100%;
  margin: 0 auto;
  ${({ $fullWidth }) => !$fullWidth && `max-width: var(--max-content-width);`}

  &:not(:last-child) {
    margin-bottom: var(--spacing-block);
  }
`

export const Image = styled(NextImage)<{ $isLoaded: boolean }>`
  // Remove extra spacing under images
  display: block;
  width: 100%;
  height: auto;
  opacity: ${({ $isLoaded }) => ($isLoaded ? 1 : 0)};
  transition: opacity ${duration.slow}s ${ease.cubic};
`
