import { useState, useEffect } from "react"

export interface Coords {
  x: number | null
  y: number | null
}

const initialCoords: Coords = {
  x: null,
  y: null,
}

export const useMousePosition = () => {
  const [coords, setCoords] = useState<Coords>(initialCoords)

  useEffect(() => {
    const updateMousePos = (e: MouseEvent) => {
      setCoords({
        x: e.clientX,
        y: e.clientY,
      })
    }

    window.addEventListener("mousemove", updateMousePos)

    return () => window.removeEventListener("mousemove", updateMousePos)
  }, [])

  return coords
}
