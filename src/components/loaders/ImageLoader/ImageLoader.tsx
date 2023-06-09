// Styles
import * as S from "./styles"
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
  <S.Wrapper
    className={className}
    $isLoaded={isLoaded}
    duration={duration}
    ease={ease}
    delay={delay}
  />
)

export default ImageLoader
