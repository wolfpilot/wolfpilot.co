// Styles
import * as S from "./styles"

export interface Props {}

const ScrollToTop: React.FC<Props> = () => {
  const handleBtnClick = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    })
  }

  return (
    <S.Wrapper>
      <S.Btn type="button" tabIndex={-1} onClick={handleBtnClick}>
        <S.BtnContent>
          <S.ArrowIcon type="arrow" />
          <S.Text>back to top</S.Text>
        </S.BtnContent>
      </S.Btn>
    </S.Wrapper>
  )
}

export default ScrollToTop
