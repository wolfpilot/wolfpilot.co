import { keyframes } from "styled-components"

// Constants
export const ease = {
  default: "ease-in-out",
  cubic: "cubic-bezier(0.4, 0, 0.2, 1)",
  elastic: "cubic-bezier(0.68, -0.55, 0.27, 1.55)",
}

// Effects
export const animFadeIn = keyframes`
  from {
    visibility: hidden;
    opacity: 0;
  }

  to {
    visibility: visible;
    opacity: 1;
  }
`

export const animFadeOut = keyframes`
  from {
    visibility: visible;
    opacity: 1;
  }
  
  to {
    visibility: hidden;
    opacity: 0;
  }
`

export const animOilSpill = keyframes`
  from {
    filter: hue-rotate(-270deg);
  }

  to {
    filter: hue-rotate(0deg);
  }
`
