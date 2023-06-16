import styled, { keyframes } from "styled-components"

// Styles
import { duration, ease } from "@styles/animation"

export const animBg = keyframes`
  0% {
    background-position: 0% 0%;
  }

  100% {
    background-position: 200% 200%;
  }
`

export const Wrapper = styled.div<{ $isLoaded: boolean }>`
  position: absolute;
  z-index: 1;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  background: linear-gradient(
    90deg,
    var(--c-white),
    var(--c-neutral2),
    var(--c-neutral2),
    var(--c-white)
  );
  background-size: 200% 200%;
  transition: opacity ${duration.medium}s ${ease.cubic};
  animation: ${animBg} 2.5s both linear infinite;

  ${({ $isLoaded }) =>
    $isLoaded &&
    `
    opacity: 0;
    animation-play-state: paused;
  `}
`
