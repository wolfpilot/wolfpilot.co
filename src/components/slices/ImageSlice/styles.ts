import NextImage from "next/image"
import styled from "styled-components"

// Styles
import { duration, ease } from "@styles/animation"

// Components
import ExternalLink from "@components/generic/ExternalLink"
import Tooltip from "@components/generic/Tooltip"

export const ImageCredits = styled(Tooltip)`
  display: block;
`

export const ImageCreditsLink = styled(ExternalLink)`
  position: absolute;
  right: var(--spacing-default);
  bottom: var(--spacing-default);
  color: var(--c-white);
  opacity: 0.2;
  transition: opacity ${duration.medium}s ${ease.cubic};

  &:hover {
    text-decoration: underline;
  }

  &:focus {
    opacity: 1;
    outline: none;
    text-decoration: underline;
  }
`

export const Wrapper = styled.div<{ $fullWidth: boolean }>`
  position: relative;
  width: 100%;
  overflow: hidden;
  margin: 0 auto;
  ${({ $fullWidth }) => !$fullWidth && `max-width: var(--max-content-width);`}

  &:hover {
    ${ImageCreditsLink} {
      opacity: 1;
    }
  }

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
