import { useRouter } from "next/router"
import { useState, useEffect } from "react"
import styled from "styled-components"

// Utils
import { useWindowSize } from "@utils/hooks/useWindowSize"
import { useAppState, useAppDispatch } from "@utils/context/AppContext"

// Styles
import { zIndexes } from "@styles/zIndexes"

const DebugGrid: React.FC = () => {
  const appState = useAppState()
  const appDispatch = useAppDispatch()

  const showDebugGrid = appState.showDebugGrid
  const [columnsNr, setColumnsNr] = useState<number>(0)

  const { width, height } = useWindowSize()

  const router = useRouter()
  const { debugGrid = "" } = router.query
  const debugGridParam =
    typeof debugGrid === "string" ? debugGrid : debugGrid[0]

  /**
   * Update the App ctx if debugGrid param is found
   */
  useEffect(() => {
    if (debugGridParam === null) return

    // Parse string for value and mixed case typing
    const newDebugGridParam = /true/i.test(debugGridParam)

    appDispatch({
      type: "updateShowDebugGrid",
      payload: newDebugGridParam,
    })
  }, [appDispatch, debugGridParam])

  /**
   * Update the number of columns from the DOM
   */
  useEffect(() => {
    const baseColumnsStr = getComputedStyle(
      document.documentElement
    ).getPropertyValue("--grid-columns")
    const baseColumnsNr = parseInt(baseColumnsStr, 10)

    setColumnsNr(baseColumnsNr)
  }, [width, height])

  if (
    // Check if it's enabled in the App State
    !showDebugGrid ||
    // Check if all necessary params are available
    !(width || height || columnsNr)
  ) {
    return null
  }

  return (
    <Wrapper>
      <Info>
        {width} x {height}
      </Info>

      <Grid>
        {new Array(columnsNr).fill(0).map((_, index) => (
          <Column key={index}>{index + 1}</Column>
        ))}
      </Grid>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  position: fixed;
  z-index: ${zIndexes.gridOverlay};
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  pointer-events: none;
`
Wrapper.displayName = "Wrapper"

const Info = styled.h2`
  position: absolute;
  top: var(--grid-gutter-size);
  left: 0;
  right: 0;
  text-align: center;
`
Info.displayName = "Info"

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(var(--grid-columns), 1fr);
  grid-gap: var(--grid-gutter-size);
  max-width: var(--max-content-width);
  width: 100%;
  height: 100%;
  margin: 0 auto;
  padding: 0 var(--grid-gutter-size);
  background-color: var(--c-gridBgColor);
`
Grid.displayName = "Grid"

const Column = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: var(--c-gridColumnBgColor);
  color: var(--c-gridTextColor);
`
Column.displayName = "Column"

export default DebugGrid
