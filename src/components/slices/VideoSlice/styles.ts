import NextImage from "next/image"
import styled from "styled-components"

// Styles
import { btnResetStyles } from "@styles/button"
import { duration, ease } from "@styles/animation"

// Components
import IconComponent from "@components/icons/Icon"

export const Wrapper = styled.div<{ $fullWidth: boolean }>`
  position: relative;
  width: 100%;
  margin: 0 auto;
  ${({ $fullWidth }) => !$fullWidth && `max-width: var(--max-content-width);`}

  &:not(:last-child) {
    margin-bottom: var(--spacing-block);
  }
`

export const Placeholder = styled(NextImage)<{ $isVideoInit: boolean }>`
  display: block;
  width: 100%;
  height: auto;
  object-fit: cover;
  transition:
    visibility ${duration.medium}s ${ease.cubic},
    opacity ${duration.medium}s ${ease.cubic};

  ${({ $isVideoInit }) =>
    $isVideoInit
      ? `
      visibility: hidden;
      opacity: 0;
    `
      : `
      visibility: visible;
      opacity: 1;
    `}
`

export const Video = styled.video`
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 100%;
`

export const Icon = styled(IconComponent)`
  fill: none;
  stroke-dasharray: 1;
  stroke-dashoffset: 0;
  stroke: var(--c-white);
  transition: stroke-dashoffset ${duration.verySlow}s ${ease.cubic};
`

export const OverlayBtn = styled.button<{ $isVideoInit: boolean }>`
  ${btnResetStyles};

  position: absolute;
  z-index: 1;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  // Fixes Firefox issue where the element collapses into itself
  width: 100%;
  transition:
    visibility ${duration.medium}s ${ease.cubic},
    opacity ${duration.medium}s ${ease.cubic};

  ${({ $isVideoInit }) =>
    $isVideoInit
      ? `
      visibility: hidden;
      opacity: 0;
    `
      : `
      visibility: visible;
      opacity: 1;
    `}

  &::before {
    content: "";
    position: absolute;
    z-index: -1;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    background-color: var(--c-black);
    opacity: 0.2;
    transition: opacity ${duration.slow}s ${ease.cubic};
  }

  &:hover,
  &:focus {
    &::before {
      opacity: 0.4;
    }

    ${Icon} {
      stroke-dashoffset: 2;
    }
  }
`
