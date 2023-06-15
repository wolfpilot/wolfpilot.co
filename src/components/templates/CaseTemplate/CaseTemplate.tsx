import { Fragment, useState } from "react"

// Types
import { PageData } from "@data/cases"

// Styles
import * as S from "./styles"
import { mq } from "@styles/utils/mediaQueries"

// Components
import Container from "@components/layout/Container/Container"
import Heading from "@components/generic/Heading"
import RichText from "@components/generic/RichText"
import Card from "@components/generic/Card"
import ImageLoader from "@components/loaders/ImageLoader/ImageLoader"
import Slice from "@components/slices/Slice"

const CaseLayout: React.FC<PageData> = ({
  meta,
  summary,
  statement,
  content,
}) => {
  const {
    title,
    tagline,
    date,
    technologies,
    tags,
    image,
    prevCase,
    nextCase,
  } = meta

  const [isHeroImgLoaded, setIsHeroImgLoaded] = useState<boolean>(false)
  const [isFooterImgLoaded, setIsFooterImgLoaded] = useState<boolean>(false)

  if (
    !title ||
    !tagline ||
    !image?.src ||
    !image?.alt ||
    !summary?.heading ||
    !summary?.html ||
    !statement.featuredImg?.src ||
    !statement.featuredImg?.alt ||
    !statement?.heading ||
    !statement?.copy
  ) {
    return null
  }

  const formattedDate = date.toLocaleDateString("en-UK", {
    month: "short",
    year: "numeric",
  })

  // Handlers
  const handleHeroImgLoadingComplete = () => {
    setIsHeroImgLoaded(true)
  }

  const handleFooterImgLoadingComplete = () => {
    setIsFooterImgLoaded(true)
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

      <S.Summary>
        <Container>
          <S.SummaryContent>
            <S.SummaryHeadingWrapper>
              <Heading level="h3">{summary.heading}</Heading>
            </S.SummaryHeadingWrapper>

            <S.SummaryRichTextWrapper>
              <RichText html={summary.html} />
            </S.SummaryRichTextWrapper>
          </S.SummaryContent>
        </Container>
      </S.Summary>

      <S.Statement>
        <Container>
          <Card
            featuredImg={statement.featuredImg}
            heading={statement.heading}
            copy={statement.copy}
            backgroundImg={image}
          />
        </Container>
      </S.Statement>

      <S.Content>
        {content.map((item, index) => (
          <Slice key={index} slice={item} />
        ))}
      </S.Content>

      <S.Footer>
        <S.FooterImageWrapper>
          <S.FooterImage
            src={image.src}
            sizes={`
              (min-width: ${mq.breakpoints.S}px) 100vw,
              (min-width: ${mq.breakpoints.XS}px) 150vw,
              200vw,
          `}
            alt={image.alt}
            fill
            priority
            onLoadingComplete={handleFooterImgLoadingComplete}
            $isLoaded={isFooterImgLoaded}
          />
        </S.FooterImageWrapper>

        <S.FooterNavContainer>
          <S.FooterNav>
            <S.FooterNavLinkWrapper>
              {prevCase?.label && prevCase?.url && (
                <S.FooterNavLink href={prevCase.url}>
                  <S.FooterNavLinkText>Previous</S.FooterNavLinkText>
                  <S.FooterNavLinkTitle>{prevCase.label}</S.FooterNavLinkTitle>
                </S.FooterNavLink>
              )}
            </S.FooterNavLinkWrapper>

            <S.FooterCaseCurrent>
              <S.FooterCaseText>You are now browing</S.FooterCaseText>
              <S.FooterCaseName>{title}</S.FooterCaseName>
            </S.FooterCaseCurrent>

            <S.FooterNavLinkWrapper>
              {nextCase?.label && nextCase?.url && (
                <S.FooterNavLink href={nextCase.url}>
                  <S.FooterNavLinkText>Next</S.FooterNavLinkText>
                  <S.FooterNavLinkTitle>{nextCase.label}</S.FooterNavLinkTitle>
                </S.FooterNavLink>
              )}
            </S.FooterNavLinkWrapper>
          </S.FooterNav>
        </S.FooterNavContainer>
      </S.Footer>
    </S.Wrapper>
  )
}

export default CaseLayout
