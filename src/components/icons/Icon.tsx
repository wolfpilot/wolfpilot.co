// Types
import { IconTypes, Icon as Props } from "@ts/icons"

// SVGs
import Logo from "./Logo"
import LinkExternal from "./LinkExternal"
import LinkInternal from "./LinkInternal"

import Arrow from "./Arrow"
import Play from "./Play"
import Prev from "./Prev"
import Next from "./Next"
import Close from "./Close"
import Expand from "./Expand"
import Collapse from "./Collapse"

import Email from "./Email"

import Codepen from "./Codepen"
import DeviantArt from "./DeviantArt"
import Github from "./Github"
import LinkedIn from "./LinkedIn"

const Icon: React.FC<Props> = ({ type, ...props }) => {
  switch (type) {
    // Generic
    case IconTypes.Logo:
      return <Logo {...props} />
    case IconTypes.LinkExternal:
      return <LinkExternal {...props} />
    case IconTypes.LinkInternal:
      return <LinkInternal {...props} />
    // Interaction
    case IconTypes.Arrow:
      return <Arrow {...props} />
    case IconTypes.Play:
      return <Play {...props} />
    case IconTypes.Prev:
      return <Prev {...props} />
    case IconTypes.Next:
      return <Next {...props} />
    case IconTypes.Close:
      return <Close {...props} />
    case IconTypes.Expand:
      return <Expand {...props} />
    case IconTypes.Collapse:
      return <Collapse {...props} />
    // Info
    case IconTypes.Email:
      return <Email {...props} />
    // Social
    case IconTypes.Codepen:
      return <Codepen {...props} />
    case IconTypes.DeviantArt:
      return <DeviantArt {...props} />
    case IconTypes.Github:
      return <Github {...props} />
    case IconTypes.LinkedIn:
      return <LinkedIn {...props} />
    default:
      throw new Error(`Icon type ${type} not found.`)
  }
}

export default Icon
