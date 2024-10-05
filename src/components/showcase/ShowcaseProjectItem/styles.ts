import Image from "next/image"
import styled, { css } from "styled-components"

// Styles
import { fixBorderRadiusOverflow } from "@styles/vendor/safari"
import { mq } from "@styles/utils/mediaQueries"
import { listResetStyles } from "@styles/list"
import { duration, ease } from "@styles/animation"

// Helper styles
const pseudoHoverStyles = css`
  content: "";
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  background: var(--g-secondary-diagonal);
  mix-blend-mode: exclusion;
  transform: scaleY(0);
  transform-origin: top center;
  pointer-events: none;
  transition: transform ${duration.slow}s ${ease.cubic};
`

// Main styles
export const ThumbnailWrapper = styled.div<{ $isLoaded: boolean }>`
  position: relative;
  overflow: hidden;
  background: none;
  outline: none;
  border: none;
  // Hide corners again due to mix-blend-mode showing through regardless of parent styles
  border-top-left-radius: var(--border-radius-sml);
  border-top-right-radius: var(--border-radius-sml);

  &:focus-within {
    &::after {
      transform: scaleY(1);
    }
  }

  // Decorative pseudo-element shown on item hover
  &::after {
    ${pseudoHoverStyles};
  }
`

export const ThumbnailBtn = styled.button`
  display: block;
  width: 100%;
  height: 100%;
  padding: 0;
  background: none;
  outline: none;
  border: none;
  pointer-events: none;

  ${mq.from.M`
    pointer-events: all;
  `}

  &:hover {
    cursor: zoom-in;
  }
`

export const Thumbnail = styled(Image)<{ $isLoaded: boolean }>`
  display: block;
  width: 100%;
  height: 100%;
  object-fit: contain;
  transform: ${({ $isLoaded }) => ($isLoaded ? "scale(1)" : "scale(1.25)")};
  transition: transform ${duration.verySlow}s ${ease.cubic};
`

export const ContentPrimary = styled.div`
  transition:
    visibility ${duration.slow}s ${ease.cubic} ${duration.medium}s,
    opacity ${duration.slow}s ${ease.cubic} ${duration.medium}s,
    transform ${duration.slow}s ${ease.cubic} ${duration.medium}s;
`

export const ContentSecondary = styled.div`
  position: absolute;
  top: var(--spacing-default);
  left: var(--spacing-default);
  visibility: hidden;
  opacity: 0;
  color: var(--c-neutral4);
  transform: translateY(-20px);
  transition:
    visibility ${duration.slow}s ${ease.cubic},
    opacity ${duration.slow}s ${ease.cubic},
    transform ${duration.slow}s ${ease.cubic};

  a {
    color: var(--c-accent3);
  }
`

export const ContentWrapper = styled.div<{
  $isLoaded: boolean
  $linksAmount: number
}>`
  padding: var(--spacing-default);

  /**
   * Because the secondary content is positioned absolute, thus depends on the
   * primary content's height, we need to calculate the minimum wrapper height
   * so that the links don't overflow on item hover. Formula below:
   *  
   * heading height
   * + 2 * vertical padding
   * + number of links * one row's height
   */
  ${({ $linksAmount }) =>
    $linksAmount > 1 &&
    `
    min-height: calc(
      55px
      + 2 * var(--spacing-default)
      + ${$linksAmount * 24}px)
    ;
  `}

  // Set a background-color for mix-blend-mode to work with
  background-color: var(--c-neutral4);

  ${({ $isLoaded }) =>
    $isLoaded
      ? `
      opacity: 1;
      transform: translateY(0);
    `
      : `
      opacity: 0;
      transform: translateY(-10px);
    `}
  transition:
    opacity ${duration.verySlow}s ${ease.cubic} ${duration.fast}s,
    transform ${duration.verySlow}s ${ease.cubic} ${duration.fast}s;

  &:focus-within {
    &::before {
      transform: scaleY(1);
    }

    ${ContentPrimary} {
      visibility: hidden;
      opacity: 0;
      transform: translateY(20px);
      transition:
        visibility ${duration.slow}s ${ease.cubic},
        opacity ${duration.slow}s ${ease.cubic},
        transform ${duration.slow}s ${ease.cubic};
    }

    ${ContentSecondary} {
      visibility: visible;
      opacity: 1;
      transform: translateY(0);
      transition:
        visibility ${duration.slow}s ${ease.cubic} ${duration.medium}s,
        opacity ${duration.slow}s ${ease.cubic} ${duration.medium}s,
        transform ${duration.slow}s ${ease.cubic} ${duration.medium}s;
    }
  }

  // Decorative pseudo-element shown on item hover
  &::before {
    ${pseudoHoverStyles};
  }

  &:focus {
    outline: none;
  }
`

export const Links = styled.ul`
  ${listResetStyles};
`

export const Wrapper = styled.li`
  ${fixBorderRadiusOverflow}
  position: relative;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  background-color: var(--c-neutral4);
  // A little border to help out with visual separation between items on mobile
  border-width: 2px;
  border-color: var(--c-neutral4);
  border-top-style: solid;
  border-left-style: solid;
  border-right-style: solid;
  border-radius: var(--border-radius-sml);

  ${mq.from.M`
    border: none;
  `}

  &:not(:last-of-type) {
    margin-bottom: var(--grid-gutter-size);
  }

  &:hover {
    ${ThumbnailWrapper} {
      &::after {
        transform: scaleY(1);
      }
    }

    ${ContentWrapper} {
      &::before {
        transform: scaleY(1);
      }
    }

    ${ContentPrimary} {
      visibility: hidden;
      opacity: 0;
      transform: translateY(20px);
      transition:
        visibility ${duration.slow}s ${ease.cubic},
        opacity ${duration.slow}s ${ease.cubic},
        transform ${duration.slow}s ${ease.cubic};
    }

    ${ContentSecondary} {
      visibility: visible;
      opacity: 1;
      transform: translateY(0);
      transition:
        visibility ${duration.slow}s ${ease.cubic} ${duration.medium}s,
        opacity ${duration.slow}s ${ease.cubic} ${duration.medium}s,
        transform ${duration.slow}s ${ease.cubic} ${duration.medium}s;
    }
  }
`
