import styled from "styled-components"

export const Wrapper = styled.div<{
  $isLoaded: boolean
  duration: number
  ease: string
  delay: number
}>`
  position: absolute;
  z-index: 1;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  background-color: var(--c-neutral4);
  transform: ${({ $isLoaded }) =>
    $isLoaded ? "translateY(100%)" : "translateY(0)"};
  ${({ duration, ease, delay }) =>
    duration && `transition: transform ${duration}s ${ease} ${delay}s;`}
`
