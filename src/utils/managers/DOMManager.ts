import { useState, useEffect } from "react"

// Utils
import { useWindowSize } from "@utils/hooks/useWindowSize"

/**
 * Manager for various DOM manipulations
 *
 * This is a bit of a hack since we're not returning any DOM elements,
 * but that allows us to use existing hooks as any other functions.
 */
const DOMManager: React.FC = () => {
  const [scrollBarWidth, setScrollBarWidth] = useState<number>(0)
  const windowSize = useWindowSize()

  useEffect(() => {
    if (windowSize.width === null) return

    setScrollBarWidth(windowSize.width - document.documentElement.clientWidth)
  }, [windowSize.width])

  useEffect(() => {
    document.documentElement.style.setProperty(
      "--scrollbar-width",
      `${scrollBarWidth}px`
    )
  }, [scrollBarWidth])

  return null
}

export default DOMManager
