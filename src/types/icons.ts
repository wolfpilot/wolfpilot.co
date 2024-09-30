export enum IconTypes {
  // Generic
  Logo = "logo",
  LinkExternal = "linkExternal",
  LinkInternal = "linkInternal",
  // Interaction
  Arrow = "arrow",
  Play = "play",
  Prev = "prev",
  Next = "next",
  Close = "close",
  Expand = "expand",
  Collapse = "collapse",
  // Info
  Email = "email",
  // Social
  Codepen = "codepen",
  DeviantArt = "deviantart",
  Github = "github",
  LinkedIn = "linkedin",
}

export interface Icon extends React.SVGAttributes<SVGElement> {
  className?: string
  width?: number
  height?: number
  color?: string
}
