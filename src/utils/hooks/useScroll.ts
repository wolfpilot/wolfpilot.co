import { useState, useEffect, useRef } from "react"

// Types
import { Directions } from "@ts/global"

// Utils
import { isClient } from "@utils/domHelper"

export interface ScrollOffset {
  x: number | null
  y: number | null
}

export interface Direction {
  x: Directions | null
  y: Directions | null
}

export type UseScroll = () => {
  offset: ScrollOffset
  direction: Direction
}

export const getScrollPosition = (): ScrollOffset => ({
  x: isClient ? window.pageXOffset : null,
  y: isClient ? window.pageYOffset : null,
})

export const getScrollDirection = (
  newOffset: ScrollOffset,
  oldOffset: ScrollOffset
): Direction => {
  if (
    !isClient ||
    newOffset.x === null ||
    newOffset.y === null ||
    oldOffset.x === null ||
    oldOffset.y === null
  ) {
    return {
      x: null,
      y: null,
    }
  }

  // prettier-ignore
  const newXDirection =
    newOffset.x === oldOffset.x
      ? null
      : newOffset.x > oldOffset.x ? Directions.Right : Directions.Left

  // prettier-ignore
  const newYDirection =
    newOffset.y === oldOffset.y
      ? null
      : newOffset.y > oldOffset.y ? Directions.Down : Directions.Up

  return {
    x: newXDirection,
    y: newYDirection,
  }
}

export const useScroll: UseScroll = () => {
  const initialOffset = getScrollPosition()
  const initialDirection = {
    x: null,
    y: null,
  }

  const [offset, setOffset] = useState<ScrollOffset>(initialOffset)
  const [direction, setDirection] = useState<Direction>(initialDirection)

  const rAF = useRef<number | null>(null)

  useEffect(() => {
    if (!isClient) return

    const handleScroll = () => {
      if (rAF.current !== null) return

      rAF.current = window.requestAnimationFrame(() => {
        const newOffset = getScrollPosition()
        const newScrollDirection = getScrollDirection(newOffset, offset)

        setOffset(newOffset)
        setDirection(newScrollDirection)

        rAF.current = null
      })
    }

    window.addEventListener("scroll", handleScroll)

    return () => window.removeEventListener("scroll", handleScroll)
  }, [offset])

  return {
    offset,
    direction,
  }
}

export const useScrollXOffset = (): number | null => {
  const { offset } = useScroll()

  return offset.x
}

export const useScrollYOffset = (): number | null => {
  const { offset } = useScroll()

  return offset.y
}

export const useScrollXDirection = (): Directions | null => {
  const { direction } = useScroll()

  return direction.x
}

export const useScrollYDirection = (): Directions | null => {
  const { direction } = useScroll()

  return direction.y
}
