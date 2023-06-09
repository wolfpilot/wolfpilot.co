import { useState } from "react"
import Link from "next/link"

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
import Heading from "@components/generic/Heading"
import Text from "@components/generic/Text"
import ImageLoader from "@components/loaders/ImageLoader/ImageLoader"

export interface Props {
  index: number
  data: ShowcaseItem
}

// Helpers
const renderLinkText = (link: Route) => {
  if (!link || !link.type || !link.url) return null

  return link.type === "external" ? (
    <>
      View on{" "}
      <a href={link.url} target="_blank" rel="noopener noreferrer">
        {getDomain(link.url)}
      </a>
    </>
  ) : (
    <>
      Go to <Link href={link.url}>case study</Link>
    </>
  )
}

const ShowcaseProjectItem: React.FC<Props> = ({ index, data }) => {
  const [isImgLoaded, setIsImgLoaded] = useState<boolean>(false)

  const showcaseDispatch = useShowcaseDispatch()

  // Early exit check
  if (!data) return null

  const { name, tagline, thumb, links = [] } = data

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
  const handleImgLoadingComplete = () => {
    setIsImgLoaded(true)
  }

  const handleImgClick = () => {
    showcaseDispatch({
      type: "updateActiveItemIndex",
      payload: index,
    })
  }

  return (
    <S.Wrapper>
      <S.ThumbnailWrapper $isLoaded={isImgLoaded}>
        <S.ThumbnailBtn aria-label="Open in modal" onClick={handleImgClick}>
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
            onLoadingComplete={handleImgLoadingComplete}
            $isLoaded={isImgLoaded}
          />

          <ImageLoader isLoaded={isImgLoaded} />
        </S.ThumbnailBtn>
      </S.ThumbnailWrapper>

      <S.ContentWrapper
        tabIndex={0}
        $isLoaded={isImgLoaded}
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
