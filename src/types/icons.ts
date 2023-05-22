export enum IconTypesEnum {
  // Generic
  Logo = "logo",
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
  color?: string
}
