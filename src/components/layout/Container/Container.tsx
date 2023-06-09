// Styles
import * as S from "./styles"

export interface Props {
  children?: React.ReactNode
}

const Container: React.FC<Props> = ({ children }) => (
  <S.Wrapper>{children}</S.Wrapper>
)

export default Container
