import { useSyncExternalStore } from "react"

// Utils
import { isClient } from "@utils/domHelper"

export interface WindowSize {
  width: number | null
  height: number | null
}

export type GetWindowSize = () => WindowSize
export type UseWindowSize = () => WindowSize

const serverSnapshot: WindowSize = { width: null, height: null }
const subscribers = new Set<() => void>()
let snapshot: WindowSize = serverSnapshot
let hasSnapshot = false
let frame: number | null = null

export const getWindowSize: GetWindowSize = () => ({
  width: isClient ? window.innerWidth : null,
  height: isClient ? window.innerHeight : null,
})

const updateSnapshot = () => {
  const next = getWindowSize()
  if (next.width === snapshot.width && next.height === snapshot.height) return

  snapshot = next
  subscribers.forEach((notify) => notify())
}

const getSnapshot = (): WindowSize => {
  if (!isClient) return serverSnapshot

  // Refresh when a store is first read or after all subscribers have left.
  if (!hasSnapshot || subscribers.size === 0) {
    const next = getWindowSize()
    if (next.width !== snapshot.width || next.height !== snapshot.height) {
      snapshot = next
    }
    hasSnapshot = true
  }

  return snapshot
}

const subscribe = (notify: () => void) => {
  subscribers.add(notify)

  if (subscribers.size === 1) {
    window.addEventListener("resize", handleResize)
  }

  // Catch a resize between rendering and subscribing.
  updateSnapshot()

  return () => {
    subscribers.delete(notify)
    if (subscribers.size > 0) return

    window.removeEventListener("resize", handleResize)
    if (frame !== null) window.cancelAnimationFrame(frame)
    frame = null
  }
}

const handleResize = () => {
  if (frame !== null) return

  frame = window.requestAnimationFrame(() => {
    frame = null
    updateSnapshot()
  })
}

export const useWindowSize: UseWindowSize = () =>
  useSyncExternalStore(subscribe, getSnapshot, () => serverSnapshot)
