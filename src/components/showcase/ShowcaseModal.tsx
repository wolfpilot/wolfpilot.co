import { useState, useEffect, useCallback, useRef } from "react"
import NextImage from "next/image"
import styled from "styled-components"

// Types
import { ShowcaseItem } from "./Showcase"

// Utils
import { usePageState, usePageDispatch } from "@utils/context/PageContext"
import { disableScroll } from "@utils/domHelper"

// Styles
import { mq } from "@styles/utils/mediaQueries"
import { zIndexes } from "@styles/zIndexes"
import { colors } from "@styles/colors"
import { duration, ease } from "@styles/animation"

// Components
import ContainerComponent from "@components/layout/Container"
import Heading from "@components/generic/Heading"
import Text from "@components/generic/Text"

export interface Props {
  data: ShowcaseItem | null
}

const ShowcaseModal: React.FC = () => {
  const pageState = usePageState()
  const pageDispatch = usePageDispatch()

  const data = pageState.showcaseActiveItem

  const [isOpen, setIsOpen] = useState<boolean>(false)

  const imgWrapperRef = useRef<HTMLDivElement | null>(null)
  const imgRef = useRef<HTMLImageElement | null>(null)

  // Handlers
  const toggle = useCallback(
    (newState: boolean) => {
      setIsOpen(newState)
      disableScroll(document.documentElement, newState)

      if (newState === false) {
        pageDispatch({
          type: "updateShowcaseActiveItem",
          payload: null,
        })
      }
    },
    [pageDispatch]
  )

  useEffect(() => {
    if (!data) return

    toggle(true)
  }, [data, toggle])

  // Close on ESC
  useEffect(() => {
    const handleOnKeydown = (e: KeyboardEvent) => {
      if (isOpen && e.key === "Escape") {
        toggle(false)
      }
    }

    document.addEventListener("keydown", handleOnKeydown)

    return () => document.removeEventListener("keydown", handleOnKeydown)
  }, [isOpen, toggle])

  // Early exit check
  if (!data) return null

  const { name, tagline, image } = data

  // Ensure required data is present
  if (!name || !tagline || !image?.width || !image?.height) {
    return null
  }

  return (
    <Wrapper $isOpen={isOpen}>
      <Container>
        <Content>
          <Details>
            {name && <Heading level="h3">{name}</Heading>}
            {tagline && <Text>{tagline}</Text>}
          </Details>

          <ImageWrapper ref={imgWrapperRef}>
            <Image
              ref={imgRef}
              src={image.src}
              width={image.width}
              height={image.height}
              alt={image.alt}
            />
          </ImageWrapper>
        </Content>
      </Container>
    </Wrapper>
  )
}

const Wrapper = styled.div<{ $isOpen: boolean }>`
  position: fixed;
  z-index: ${zIndexes.modal};
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  padding-top: calc(2 * var(--spacing-default));
  padding-bottom: calc(2 * var(--spacing-default));
  background-color: ${colors.black}60;

  ${({ $isOpen }) =>
    $isOpen
      ? `
    visibility: visible;
    opacity: 1;
  `
      : `
    visibility: hidden;
    opacity: 0;
  `};

  transition: visibility ${duration.slow}s ${ease.cubic},
    opacity ${duration.slow}s ${ease.cubic};
`

const Container = styled(ContainerComponent)`
  height: 100%;

  ${mq.from.L`
    display: flex;
    justify-content: center;
  `}
`

const Content = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  background-color: var(--c-white);
  border-radius: var(--border-radius-sml);
  overflow: hidden;

  ${mq.from.M`
    flex-direction: row;
  `}

  ${mq.from.L`
    width: calc(10 * var(--grid-column-size) + 9 * var(--grid-gutter-size));
  `}
`

const Details = styled.div`
  padding: var(--spacing-default);

  ${mq.from.M`
    display: flex;
    flex-direction: column;
    flex-shrink: 0;
    justify-content: center;
    width: calc(2 * var(--grid-column-size) + var(--grid-gutter-size));
  `}

  ${mq.from.L`
    width: calc(3 * var(--grid-column-size) + 2 * var(--grid-gutter-size));
  `}
`

const ImageWrapper = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  height: 100%;
  /**
   * Force flex children to respect their parents' size.
   *
   * For more info, see:
   * https://stackoverflow.com/questions/36247140/why-dont-flex-items-shrink-past-content-size
   */
  min-width: 0;
  min-height: 0;
  background-color: ${colors.black}20;
`

const Image = styled(NextImage)`
  width: 100%;
  height: 100%;
  object-fit: contain;
`

export default ShowcaseModal
