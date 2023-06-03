import styled from "styled-components"

// Styles
import { duration as animDuration, ease as animEase } from "@styles/animation"

export interface Props {
  isLoaded: boolean
  className?: string
  duration?: number
  ease?: string
  delay?: number
}

const ImageLoader: React.FC<Props> = ({
  className,
  isLoaded,
  duration = animDuration.verySlow,
  ease = animEase.cubic,
  delay = 0,
}) => (
  <Wrapper
    className={className}
    $isLoaded={isLoaded}
    duration={duration}
    ease={ease}
    delay={delay}
  />
)

const Wrapper = styled.div<{
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

export default ImageLoader
