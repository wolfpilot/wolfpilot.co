import { useState } from "react"

// Types
import { StaticImageData } from "next/image"

// Styles
import * as S from "./styles"
import { mq } from "@styles/utils/mediaQueries"

export interface Props {
  className?: string
  src: StaticImageData
  alt: string
  fullWidth?: boolean
}

const ImageSlice: React.FC<Props> = ({
  className,
  src,
  alt,
  fullWidth = false,
}) => {
  const [isLoaded, setIsLoaded] = useState<boolean>(false)

  if (!src || !alt) return null

  // Handlers
  const handleLoadingComplete = () => {
    setIsLoaded(true)
  }

  return (
    <S.Wrapper $fullWidth={fullWidth}>
      <S.Image
        className={className}
        src={src}
        sizes={`
          ${
            fullWidth
              ? `
                100vw
              `
              : `
                (min-width: ${mq.breakpoints.L}px) 1440px,
                100vw,
                `
          }
        `}
        alt={alt}
        onLoadingComplete={handleLoadingComplete}
        $isLoaded={isLoaded}
      />
    </S.Wrapper>
  )
}

export default ImageSlice
