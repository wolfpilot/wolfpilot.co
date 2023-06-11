import { Fragment, useState } from "react"

// Types
import { Meta } from "@data/cases"

// Styles
import * as S from "@styles/pages/cases"
import { mq } from "@styles/utils/mediaQueries"

// Components
import Container from "@components/layout/Container/Container"
import Heading from "@components/generic/Heading"
import ImageLoader from "@components/loaders/ImageLoader/ImageLoader"

export interface Props {
  children: React.ReactNode
  meta: Meta
}

const CaseLayout: React.FC<Props> = ({ children, meta }) => {
  const { title, tagline, image, date, technologies, tags } = meta

  const [isHeroImgLoaded, setIsHeroImgLoaded] = useState<boolean>(false)

  if (!title || !tagline || !image?.src || !image?.alt) {
    return null
  }

  const formattedDate = date.toLocaleDateString("en-US", {
    month: "short",
    year: "numeric",
  })

  // Handlers
  const handleHeroImgLoadingComplete = () => {
    setIsHeroImgLoaded(true)
  }

  return (
    <S.Wrapper>
      <S.Header>
        <Container>
          <Heading level="h1">{title}</Heading>
        </Container>

        <S.Hero>
          <Container>
            <S.HeroTagline>{tagline}</S.HeroTagline>
          </Container>

          {/**
           * next/image doesn't currently support setting multiple sources,
           * which means no art direction.
           *
           * Unfortunately, that means we're stuck with very blurry images on
           * small screens due to the AR being so wide, so the only way to keep
           * the benefits of the components is to force-load larger images than
           * necessary on small viewports.
           *
           * For more info, see:
           * https://github.com/vercel/next.js/discussions/25393
           */}
          <S.HeroImageWrapper>
            <S.HeroImage
              src={image.src}
              sizes={`
            (min-width: ${mq.breakpoints.S}px) 100vw,
            (min-width: ${mq.breakpoints.XS}px) 150vw,
            200vw,
            `}
              alt={image.alt}
              priority
              onLoadingComplete={handleHeroImgLoadingComplete}
            />

            <ImageLoader isLoaded={isHeroImgLoaded} />
          </S.HeroImageWrapper>

          <Container>
            <S.HeroInfo>
              <S.HeroInfoBlock>
                <S.HeroInfoType>date</S.HeroInfoType>
                <S.HeroInfoText>{formattedDate}</S.HeroInfoText>
              </S.HeroInfoBlock>

              <S.HeroInfoBlock>
                <S.HeroInfoType>technologies</S.HeroInfoType>
                <S.HeroInfoText>{technologies}</S.HeroInfoText>
              </S.HeroInfoBlock>

              <S.HeroInfoBlock>
                <S.HeroInfoType>tags</S.HeroInfoType>
                <S.HeroInfoText>
                  {tags.map((tag, index) => (
                    <Fragment key={index}>
                      <S.HeroInfoLink href={`/#work?tag=${tag}`}>
                        {tag}
                      </S.HeroInfoLink>
                      {index !== tags.length - 1 && `, `}
                    </Fragment>
                  ))}
                </S.HeroInfoText>
              </S.HeroInfoBlock>
            </S.HeroInfo>
          </Container>
        </S.Hero>
      </S.Header>

      <S.Content>{children}</S.Content>
    </S.Wrapper>
  )
}

export default CaseLayout
