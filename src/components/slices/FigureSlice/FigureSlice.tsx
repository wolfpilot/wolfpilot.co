import { useState } from "react"

// Types
import { StaticImageData } from "next/image"

// Styles
import * as S from "./styles"
import { mq } from "@styles/utils/mediaQueries"

// Components
import Container from "@components/layout/Container/Container"

export interface Props {
  className?: string
  src: StaticImageData
  alt: string
  caption: string
}

const FigureSlice: React.FC<Props> = ({ className, src, alt, caption }) => {
  const [isLoaded, setIsLoaded] = useState<boolean>(false)

  if (!src || !alt || !caption) return null

  // Handlers
  const handleLoadingComplete = () => {
    setIsLoaded(true)
  }

  return (
    <S.Wrapper>
      <Container>
        <S.Figure>
          <S.Image
            className={className}
            src={src}
            sizes={`
              (min-width: ${mq.breakpoints.L}px) 1440px,
              100vw,
            `}
            alt={alt}
            onLoadingComplete={handleLoadingComplete}
          />
          <S.Caption>{caption}</S.Caption>
          <S.ImageLoader isLoaded={isLoaded} />
        </S.Figure>
      </Container>
    </S.Wrapper>
  )
}

export default FigureSlice
