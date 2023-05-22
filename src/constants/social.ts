export interface Link {
  label: string
  url: string
}

export type Links = Record<string, Link>

export const social: Links = {
  email: {
    url: "mailto:howl@wolfpilot.co",
    label: "Email",
  },
  github: {
    url: "https://github.com/wolfpilot",
    label: "Github",
  },
  codepen: {
    url: "https://codepen.io/wolfpilot",
    label: "Codepen",
  },
  deviantart: {
    url: "https://www.deviantart.com/n-deed",
    label: "DeviantArt",
  },
  linkedin: {
    url: "https://www.linkedin.com/in/razvannegrea/",
    label: "LinkedIn",
  },
}
