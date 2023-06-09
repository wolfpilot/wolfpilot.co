// Styles
import * as S from "./styles"

export interface Props {
  children: React.ReactNode
  className?: string
}

const Container: React.FC<Props> = ({ children, className }) => (
  <S.Wrapper className={className}>{children}</S.Wrapper>
)

export default Container
