import styled from "styled-components"

// Utils
import { useMousePosition } from "@utils/hooks/useMousePosition"

// Styles
import { zIndexes } from "@styles/zIndexes"

const CustomCursor: React.FC = () => {
  const mouseCoords = useMousePosition()

  if (!mouseCoords.x || !mouseCoords.y) return null

  return (
    <Wrapper
      style={{
        top: mouseCoords.y,
        left: mouseCoords.x,
      }}
    />
  )
}

const Wrapper = styled.div`
  // Only enable for hover capable devices, aka no touch
  @media (hover: hover) {
    position: fixed;
    z-index: ${zIndexes.customCursor};
    display: flex;
    justify-content: center;
    align-items: center;
    width: 40px;
    height: 40px;
    background-color: var(--c-cursor);
    border-radius: 50%;
    mix-blend-mode: hue;
    transform: translate(-50%, -50%);
    pointer-events: none;
  }
`

export default CustomCursor
