import { useRouter } from "next/router"
import { useState, useEffect } from "react"

// Utils
import { useWindowSize } from "@utils/hooks/useWindowSize"
import { useAppState, useAppDispatch } from "@utils/context/AppContext"

// Styles
import * as S from "./styles"

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
    <S.Wrapper>
      <S.Info>
        {width} x {height}
      </S.Info>

      <S.Grid>
        {new Array(columnsNr).fill(0).map((_, index) => (
          <S.Column key={index}>{index + 1}</S.Column>
        ))}
      </S.Grid>
    </S.Wrapper>
  )
}

export default DebugGrid
