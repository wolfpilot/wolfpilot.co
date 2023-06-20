import { useState, useRef } from "react"
import Image, { ImageProps } from "next/image"
import { sanitize } from "isomorphic-dompurify"
import styled from "styled-components"
import { motion, useScroll, useTransform, MotionValue } from "framer-motion"

// Styles
import { fixBorderRadiusOverflow } from "@styles/vendor/safari"
import { mq } from "@styles/utils/mediaQueries"
import { duration, ease } from "@styles/animation"

// Components
import ExternalLink from "./ExternalLink"
import Text from "@components/generic/Text"
import Tooltip from "@components/generic/Tooltip"
import ImageLoader from "@components/loaders/ImageLoader/ImageLoader"

export interface Props {
  featuredImg: ImageProps & {
    credits?: {
      label: string
      url: string
    }
  }
  heading: string
  copy: string
  backgroundImg?: ImageProps
}

// Setup
const PARALLAX_SCROLL_DISTANCE = -10

// Map total percentage scrolled from -10% to 10%
const useParallax = (value: MotionValue<number>, distance: number) =>
  useTransform(value, [0, 1], [`${-distance}%`, `${distance}%`])

const Card: React.FC<Props> = ({
  featuredImg,
  heading,
  copy,
  backgroundImg,
}) => {
  const [isFeaturedImgLoaded, setIsFeaturedImgLoaded] = useState<boolean>(false)
  const [isBackgroundImgLoaded, setIsBackgroundImgLoaded] =
    useState<boolean>(false)

  const wrapperRef = useRef(null)

  // Parallax
  const { scrollYProgress } = useScroll({ target: wrapperRef })
  const y = useParallax(scrollYProgress, PARALLAX_SCROLL_DISTANCE)

  if (!featuredImg || !heading || !copy) return null

  // Handlers
  const handleFeaturedImgLoadingComplete = () => {
    setIsFeaturedImgLoaded(true)
  }

  const handleBackgroundImgLoadingComplete = () => {
    setIsBackgroundImgLoaded(true)
  }

  const hasFtImg = !!(featuredImg?.src && featuredImg?.alt)
  const hasBgImg = !!(backgroundImg?.src && backgroundImg?.alt)

  return (
    <Wrapper $hasBgImage={hasBgImg}>
      {hasBgImg && (
        <BackgroundImageWrapper>
          <BackgroundImage
            src={backgroundImg.src}
            sizes={`
              (min-width: ${mq.breakpoints.M}px) 66vw
            `}
            alt={backgroundImg.alt}
            onLoadingComplete={handleBackgroundImgLoadingComplete}
          />

          <BackgroundImageLoader isLoaded={isBackgroundImgLoaded} />
        </BackgroundImageWrapper>
      )}

      <MediaWrapper>
        {hasFtImg && (
          <FeaturedImageWrapper ref={wrapperRef}>
            <FeaturedImageResizer>
              <FeaturedImage
                src={featuredImg.src}
                sizes={`
                  (min-width: ${mq.breakpoints.M}px) 33vw,
                  100vw,
                `}
                alt={featuredImg.alt}
                style={{ y }}
                onLoadingComplete={handleFeaturedImgLoadingComplete}
              />
            </FeaturedImageResizer>

            {featuredImg.credits?.label && featuredImg.credits?.url && (
              <ImageCreditsLink href={featuredImg.credits.url}>
                <ImageCredits>{featuredImg.credits.label}</ImageCredits>
              </ImageCreditsLink>
            )}

            <FeaturedImageLoader isLoaded={isFeaturedImgLoaded} />
          </FeaturedImageWrapper>
        )}

        <Content>
          <Heading dangerouslySetInnerHTML={{ __html: sanitize(heading) }} />
          <Text>{copy}</Text>
        </Content>
      </MediaWrapper>
    </Wrapper>
  )
}

const Wrapper = styled.div<{ $hasBgImage: boolean }>`
  position: relative;
  margin: 0 auto;

  ${mq.from.M`
    ${({ $hasBgImage }: { $hasBgImage: boolean }) =>
      $hasBgImage &&
      `
      padding-top: calc(2 * var(--spacing-default));
      padding-bottom: calc(3 * var(--spacing-default));
    `}
  `}

  ${mq.from.XL`
    padding-left: calc(var(--grid-column-size) + var(--grid-gutter-size));
    padding-right: calc(var(--grid-column-size) + var(--grid-gutter-size));
  `}
`

const BackgroundImageWrapper = styled.div`
  display: none;

  ${mq.from.M`
    ${fixBorderRadiusOverflow}
    position: absolute;
    z-index: -1;
    top: 0;
    right: calc(-1 * var(--grid-offset-size));
    bottom: 0;
    display: block;
    overflow: hidden;
    width: calc(4 * var(--grid-column-size) + 4 * var(--grid-gutter-size) + var(--grid-offset-size));
    height: 100%;
    border-top-left-radius: var(--border-radius-sml);
    border-bottom-left-radius: var(--border-radius-sml);
  `}

  ${mq.from.L`
    width: calc(8 * var(--grid-column-size) + 8 * var(--grid-gutter-size) + var(--grid-offset-size));
  `}
`

const BackgroundImage = styled(Image)`
  height: 100%;
  object-fit: cover;
  // Improve readability and reusability of assets
  filter: blur(12px);
  // Fix semi-transparent blurry edges
  transform: scale(1.05);
`

const BackgroundImageLoader = styled(ImageLoader)`
  background-color: var(--c-pageColor);
`

const MediaWrapper = styled.div`
  ${fixBorderRadiusOverflow}
  overflow: hidden;
  border-radius: var(--border-radius-sml);

  ${mq.from.M`
    display: flex;
    justify-content: center;
  `}
`

const ImageCredits = styled(Tooltip)`
  display: block;
`

const ImageCreditsLink = styled(ExternalLink)`
  position: absolute;
  right: var(--spacing-default);
  bottom: var(--spacing-default);
  color: var(--c-white);
  opacity: 0.2;
  transition: opacity ${duration.medium}s ${ease.cubic};

  &:hover {
    text-decoration: underline;
  }

  &:focus {
    opacity: 1;
    outline: none;
    text-decoration: underline;
  }
`

const FeaturedImageWrapper = styled.div`
  position: relative;
  overflow: hidden;

  ${mq.from.M`
    width: calc(2 * var(--grid-column-size) + var(--grid-gutter-size));
  `}

  ${mq.from.L`
    width: calc(4 * var(--grid-column-size) + 3 * var(--grid-gutter-size));
  `}

  ${mq.from.XL`
    width: calc(3 * var(--grid-column-size) + 2 * var(--grid-gutter-size));
  `}

  &:hover {
    ${ImageCreditsLink} {
      opacity: 1;
    }
  }
`

const FeaturedImageResizer = styled.div`
  height: 100%;
  // Make image larger to compensate for parallax motion
  transform: scale(1.2);

  &:after {
    content: "";
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    background: var(--g-primary-diagonal);
    mix-blend-mode: darken;
    pointer-events: none;
  }
`

const FeaturedImageLoader = styled(ImageLoader)`
  background-color: var(--c-black);
`

const FeaturedImage = styled(motion(Image))`
  display: block;
  width: 100%;
  height: 100%;
  object-fit: cover;
  line-height: 0;
  filter: saturate(0);
`

const Content = styled.div`
  padding: calc(2 * var(--spacing-default)) var(--spacing-default);
  background-color: var(--c-black);
  color: var(--c-white);

  ${mq.from.M`
    width: calc(4 * var(--grid-column-size) + 4 * var(--grid-gutter-size));
    `}

  ${mq.from.L`
    width: calc(8 * var(--grid-column-size) + 8 * var(--grid-gutter-size));
    `}

  ${mq.from.XL`
    width: calc(7 * var(--grid-column-size) + 7 * var(--grid-gutter-size));
  `}
`

const Heading = styled.h2`
  /* Custom style for emphasis text */
  em {
    color: var(--c-accent2);
    font-style: normal;
  }
`

export default Card
