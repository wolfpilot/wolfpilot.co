// Styles
import * as S from "./styles"

export interface Props {
  isLoaded: boolean
  className?: string
}

const ImageShimmer: React.FC<Props> = ({ className, isLoaded }) => (
  <S.Wrapper className={className} $isLoaded={isLoaded} />
)

export default ImageShimmer
