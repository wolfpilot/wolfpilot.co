// Types
import { IconTypesEnum, Icon } from "@ts/icons"

// SVGs
import Logo from "./Logo"
import LinkExternal from "./LinkExternal"
import LinkInternal from "./LinkInternal"

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

const Icon: React.FC<Icon> = ({ type, ...props }) => {
  switch (type) {
    // Generic
    case IconTypesEnum.Logo:
      return <Logo {...props} />
    case IconTypesEnum.LinkExternal:
      return <LinkExternal {...props} />
    case IconTypesEnum.LinkInternal:
      return <LinkInternal {...props} />
    // Interaction
    case IconTypesEnum.Play:
      return <Play {...props} />
    case IconTypesEnum.Prev:
      return <Prev {...props} />
    case IconTypesEnum.Next:
      return <Next {...props} />
    case IconTypesEnum.Close:
      return <Close {...props} />
    case IconTypesEnum.Expand:
      return <Expand {...props} />
    case IconTypesEnum.Collapse:
      return <Collapse {...props} />
    // Info
    case IconTypesEnum.Email:
      return <Email {...props} />
    // Social
    case IconTypesEnum.Codepen:
      return <Codepen {...props} />
    case IconTypesEnum.DeviantArt:
      return <DeviantArt {...props} />
    case IconTypesEnum.Github:
      return <Github {...props} />
    case IconTypesEnum.LinkedIn:
      return <LinkedIn {...props} />
    default:
      throw new Error(`Icon type ${type} not found.`)
  }
}

export default Icon
