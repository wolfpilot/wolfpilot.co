import { useSyncExternalStore } from "react"

const QUERY = "(prefers-reduced-motion: reduce)"

const subscribe = (onChange: () => void) => {
  if (typeof window.matchMedia !== "function") return () => {}

  const media = window.matchMedia(QUERY)
  media.addEventListener("change", onChange)

  return () => media.removeEventListener("change", onChange)
}

export const prefersReducedMotion = () =>
  typeof window.matchMedia === "function" && window.matchMedia(QUERY).matches

export const usePrefersReducedMotion = () =>
  useSyncExternalStore(subscribe, prefersReducedMotion, () => false)
