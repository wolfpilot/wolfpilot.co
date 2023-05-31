export enum IconTypesEnum {
  // Generic
  Logo = "logo",
  Prev = "prev",
  Next = "next",
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
