// Utils
import { useMousePosition } from "@utils/hooks/useMousePosition"

// Styles
import * as S from "./styles"

const CustomCursor: React.FC = () => {
  const mouseCoords = useMousePosition()

  if (!mouseCoords.x || !mouseCoords.y) return null

  /**
   * * Note: Only possible by applying styles inline.
   * *
   * * Otherwise, Styled Components will flood the CSS class namespace
   * * with hundreds of classes per second.
   */
  return (
    <S.Wrapper
      style={{
        transform: `translate3d(
          ${mouseCoords.x - S.CURSOR_RADIUS}px,
          ${mouseCoords.y - S.CURSOR_RADIUS}px,
          0
        )`,
      }}
    />
  )
}

export default CustomCursor
