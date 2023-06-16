import { useState } from "react"

// Types
import { StaticImageData } from "next/image"

// Styles
import * as S from "./styles"
import { mq } from "@styles/utils/mediaQueries"

// Components
import ImageLoader from "@components/loaders/ImageLoader/ImageLoader"

export interface Props {
  className?: string
  src: StaticImageData
  alt: string
  fullWidth?: boolean
  credits?: {
    label: string
    url: string
  }
}

const ImageSlice: React.FC<Props> = ({
  className,
  src,
  alt,
  fullWidth = false,
  credits,
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

      {credits?.label && credits?.url && (
        <S.ImageCreditsLink
          href={credits.url}
          target="_blank"
          rel="noopener noreferrer"
        >
          <S.ImageCredits>{credits.label}</S.ImageCredits>
        </S.ImageCreditsLink>
      )}

      <ImageLoader isLoaded={isLoaded} />
    </S.Wrapper>
  )
}

export default ImageSlice
