import { useSyncExternalStore } from "react"

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

const serverSnapshot: ReturnType<UseScroll> = {
  offset: { x: null, y: null },
  direction: { x: null, y: null },
}
const subscribers = new Set<() => void>()
let snapshot: ReturnType<UseScroll> = serverSnapshot
let hasSnapshot = false
let frame: number | null = null

export const getScrollPosition = (): ScrollOffset => ({
  x: isClient ? window.scrollX : null,
  y: isClient ? window.scrollY : null,
})

export const getScrollDirection = (
  newOffset: ScrollOffset,
  oldOffset: ScrollOffset
): Direction => {
  if (
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

const setInitialSnapshot = () => {
  const offset = getScrollPosition()
  if (
    offset.x === snapshot.offset.x &&
    offset.y === snapshot.offset.y &&
    snapshot.direction.x === null &&
    snapshot.direction.y === null
  ) {
    return
  }

  snapshot = { offset, direction: { x: null, y: null } }
  subscribers.forEach((notify) => notify())
}

const updateSnapshot = () => {
  const offset = getScrollPosition()
  if (offset.x === snapshot.offset.x && offset.y === snapshot.offset.y) return

  snapshot = {
    offset,
    direction: getScrollDirection(offset, snapshot.offset),
  }
  subscribers.forEach((notify) => notify())
}

const getSnapshot = (): ReturnType<UseScroll> => {
  if (!isClient) return serverSnapshot

  // A new subscriber starts with the current offset and no direction.
  if (!hasSnapshot || subscribers.size === 0) {
    setInitialSnapshot()
    hasSnapshot = true
  }

  return snapshot
}

const subscribe = (notify: () => void) => {
  const isFirstSubscriber = subscribers.size === 0
  subscribers.add(notify)
  if (isFirstSubscriber) {
    window.addEventListener("scroll", handleScroll)
    // Catch a scroll between rendering and subscribing.
    setInitialSnapshot()
  }

  return () => {
    subscribers.delete(notify)
    if (subscribers.size > 0) return

    window.removeEventListener("scroll", handleScroll)
    if (frame !== null) window.cancelAnimationFrame(frame)
    frame = null
  }
}

const handleScroll = () => {
  if (frame !== null) return

  frame = window.requestAnimationFrame(() => {
    frame = null
    updateSnapshot()
  })
}

export const useScroll: UseScroll = () =>
  useSyncExternalStore(subscribe, getSnapshot, () => serverSnapshot)

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
