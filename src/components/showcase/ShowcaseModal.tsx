import { useState, useEffect, useCallback, useRef } from "react"
import NextImage from "next/image"
import styled from "styled-components"

// Utils
import { usePageState, usePageDispatch } from "@utils/context/PageContext"
import { disableScroll } from "@utils/domHelper"
import { calculateAspectRatio } from "@utils/mathHelper"

// Styles
import { mq } from "@styles/utils/mediaQueries"
import { zIndexes } from "@styles/zIndexes"
import { colors } from "@styles/colors"
import { duration, ease } from "@styles/animation"

// Components
import ContainerComponent from "@components/layout/Container"
import Heading from "@components/generic/Heading"
import Text from "@components/generic/Text"

type Axis = "vertical" | "horizontal"

const ShowcaseModal: React.FC = () => {
  const pageState = usePageState()
  const pageDispatch = usePageDispatch()

  const data = pageState.showcaseActiveItem

  const [isOpen, setIsOpen] = useState<boolean>(false)
  const [isImgMax, setIsImgMax] = useState<boolean>(false)
  const [imgFillAxis, setImgFillAxis] = useState<Axis | null>(null)

  const imgWrapperRef = useRef<HTMLDivElement | null>(null)
  const imgRef = useRef<HTMLImageElement | null>(null)

  const toggle = useCallback(
    (newState: boolean) => {
      setIsOpen(newState)
      disableScroll(document.documentElement, newState)

      if (newState === false) {
        setIsImgMax(false)

        pageDispatch({
          type: "updateShowcaseActiveItem",
          payload: null,
        })
      }
    },
    [pageDispatch]
  )

  const handleImgClick = () => {
    setIsImgMax(!isImgMax)
  }

  /**
   * Expand automatically when data is set
   */
  useEffect(() => {
    if (!data) return

    toggle(true)
  }, [data, toggle])

  /**
   * Find out which axis the image should expand on when maximised
   */
  useEffect(() => {
    if (!imgWrapperRef?.current || !data?.image.width || !data?.image.height) {
      return
    }

    const imgWidth = Number(data.image.width)
    const imgHeight = Number(data.image.height)

    const imgAR = calculateAspectRatio(imgWidth, imgHeight)
    const wrapperAR = calculateAspectRatio(
      imgWrapperRef.current.scrollWidth,
      imgWrapperRef.current.scrollHeight
    )

    const newImgFillAxis = imgAR > wrapperAR ? "vertical" : "horizontal"

    setImgFillAxis(newImgFillAxis)
  }, [data])

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

          <ImageWrapper ref={imgWrapperRef} $isImgMax={isImgMax}>
            <Image
              ref={imgRef}
              src={image.src}
              width={image.width}
              height={image.height}
              alt={image.alt}
              $isImgMax={isImgMax}
              $imgFillAxis={imgFillAxis}
              onClick={handleImgClick}
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
  background-color: ${colors.black}80;

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

  ${mq.from.M`
    padding-top: 20vh;
    padding-bottom: 20vh;
  `}
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

const ImageWrapper = styled.div<{ $isImgMax: boolean }>`
  display: flex;
  width: 100%;
  height: 100%;
  background-color: ${colors.black}20;

  /**
   * When image is maximised, allow overflowing in either direction. Otherwise,
   * force the flex children to stay contained to their parents' size.
   *
   * For more info on the latter, see:
   * https://stackoverflow.com/questions/36247140/why-dont-flex-items-shrink-past-content-size
   */
  ${({ $isImgMax }) =>
    $isImgMax
      ? `
      justify-content: flex-start;
      align-items: flex-start;
      overflow: scroll;
    `
      : `
      justify-content: center;
      min-width: 0;
      min-height: 0;
  `}
`

const Image = styled(NextImage)<{
  $isImgMax: boolean
  $imgFillAxis: string | null
}>`
  width: 100%;
  height: 100%;
  object-fit: contain;

  ${({ $isImgMax }) =>
    $isImgMax
      ? `
      max-width: none;
      max-height: none;
      cursor: zoom-out;
      `
      : `
      max-width: 100%;
      max-height: 100%;
      cursor: zoom-in;
    `}

  ${({ $imgFillAxis }) =>
    $imgFillAxis === "vertical" &&
    `
      width: auto;
      height: 100%;
    `}

  ${({ $imgFillAxis }) =>
    $imgFillAxis === "horizontal" &&
    `
      width: 100%;
      height: auto;
    `}
`

export default ShowcaseModal
