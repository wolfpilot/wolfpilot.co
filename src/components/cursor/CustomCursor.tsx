import styled from "styled-components"

// Utils
import { useMousePosition } from "@utils/hooks/useMousePosition"

// Styles
import { zIndexes } from "@styles/zIndexes"

// Setup
const CURSOR_RADIUS = 20

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
    <Wrapper
      style={{
        transform: `translate(
          ${mouseCoords.x - CURSOR_RADIUS}px,
          ${mouseCoords.y - CURSOR_RADIUS}px
        )`,
      }}
    />
  )
}

const Wrapper = styled.div`
  // Only enable for hover capable devices, aka no touch
  @media (hover: hover) and (pointer: fine) {
    position: fixed;
    z-index: ${zIndexes.customCursor};
    top: 0;
    left: 0;
    width: ${2 * CURSOR_RADIUS}px;
    height: ${2 * CURSOR_RADIUS}px;
    border-radius: 50%;
    background-color: var(--c-cursor);
    mix-blend-mode: hue;
    pointer-events: none;
  }
`

export default CustomCursor
