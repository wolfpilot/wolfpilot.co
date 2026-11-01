import { useState } from "react"

// Types
import { Route } from "@ts/routes"
import { ShowcaseItem } from "../types"

// Utils
import { useShowcaseDispatch } from "../Context"
import { getDomain } from "@utils/routeHelper"

// Styles
import * as S from "./styles"
import { mq } from "@styles/utils/mediaQueries"

// Components
import ExternalLink from "@components/generic/ExternalLink"
import InternalLink from "@components/generic/InternalLink"
import Heading from "@components/generic/Heading"
import Text from "@components/generic/Text"
import ImageLoader from "@components/loaders/ImageLoader/ImageLoader"

export interface Props {
  index: number
  data: ShowcaseItem
}

// Helpers
const renderLinkText = (link: Route) => {
  if (!link || !link.type || !link.href) return null

  return link.type === "external" ? (
    <>
      View on{" "}
      <ExternalLink href={link.href}>{getDomain(link.href)}</ExternalLink>
    </>
  ) : (
    <>
      Go to <InternalLink href={link.href}>case study</InternalLink>
    </>
  )
}

const ShowcaseProjectItem: React.FC<Props> = ({ index, data }) => {
  const [isMediaLoaded, setIsMediaLoaded] = useState<boolean>(false)
  const [hasVideoError, setHasVideoError] = useState<boolean>(false)

  const showcaseDispatch = useShowcaseDispatch()

  // Early exit check
  if (!data) return null

  const { name, tagline, thumb, thumbVideo, links = [] } = data

  // Ensure required data is present
  if (
    !name ||
    !tagline ||
    !thumb ||
    !thumb.src ||
    !thumb.width ||
    !thumb.height
  ) {
    return null
  }

  // Handlers
  const handleMediaLoadingComplete = () => {
    setIsMediaLoaded(true)
  }

  const handleVideoError = () => {
    setHasVideoError(true)
  }

  const handleImgClick = () => {
    showcaseDispatch({
      type: "updateActiveItemIndex",
      payload: index,
    })
  }

  return (
    <S.Wrapper>
      <S.ThumbnailWrapper $isLoaded={isMediaLoaded}>
        <S.ThumbnailBtn aria-label="Open in modal" onClick={handleImgClick}>
          {thumbVideo && !hasVideoError ? (
            <S.ThumbnailVideo
              data-testid="showcase-thumbnail-video"
              src={thumbVideo}
              width={Number(thumb.width)}
              height={Number(thumb.height)}
              poster={typeof thumb.src === "string" ? thumb.src : undefined}
              autoPlay
              loop
              muted
              playsInline
              aria-hidden="true"
              onLoadedData={handleMediaLoadingComplete}
              onError={handleVideoError}
              $isLoaded={isMediaLoaded}
            />
          ) : (
            <S.Thumbnail
              src={thumb.src}
              sizes={`
            (min-width: ${mq.breakpoints.L}px) 456px,
            (min-width: ${mq.breakpoints.M}px) 50vw,
            100vw,
            `}
              width={thumb.width}
              height={thumb.height}
              alt={thumb.alt || ""}
              onLoad={handleMediaLoadingComplete}
              $isLoaded={isMediaLoaded}
            />
          )}

          <ImageLoader isLoaded={isMediaLoaded} delay={0.15} />
        </S.ThumbnailBtn>
      </S.ThumbnailWrapper>

      <S.ContentWrapper
        tabIndex={0}
        $isLoaded={isMediaLoaded}
        $linksAmount={links.length}
      >
        <S.ContentPrimary>
          <Heading level="h3">{name}</Heading>
          <Text>{tagline}</Text>
        </S.ContentPrimary>

        <S.ContentSecondary>
          <Heading level="h3">Project details</Heading>

          {links.length ? (
            <S.Links>
              {links.map((link, index) => (
                <li key={index}>{renderLinkText(link)}</li>
              ))}
            </S.Links>
          ) : (
            <Text>Zoom in to view more</Text>
          )}
        </S.ContentSecondary>
      </S.ContentWrapper>
    </S.Wrapper>
  )
}

export default ShowcaseProjectItem
