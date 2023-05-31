import { Fragment, useState, useEffect, useCallback, useRef } from "react"
import { AnimatePresence } from "framer-motion"

// Utils
import { usePageState, usePageDispatch } from "@utils/context/PageContext"
import { useClickOutside } from "@utils/hooks/useClickOutside"
import { disableScroll } from "@utils/domHelper"
import { calculateAspectRatio } from "@utils/mathHelper"
import { getDomain } from "@utils/routeHelper"

// Styles
import * as S from "./styles"

// Components
import Heading from "@components/generic/Heading"
import Text from "@components/generic/Text"

// Animation
import {
  getWrapperAnimProps,
  getContentAnimProps,
  getDetailsAnimProps,
  getImgScrollerAnimProps,
} from "./animation"

type Axis = "vertical" | "horizontal"

const ShowcaseModal: React.FC = () => {
  const pageState = usePageState()
  const pageDispatch = usePageDispatch()

  const {
    showcaseActiveItems: activeItems,
    showcaseActiveItemIndex: activeItemIndex,
  } = pageState

  const data =
    (activeItems !== null &&
      activeItemIndex !== null &&
      activeItems[activeItemIndex]) ||
    null

  const [isOpen, setIsOpen] = useState<boolean>(false)
  const [isImgLoaded, setIsImgLoaded] = useState<boolean>(false)
  const [isImgMax, setIsImgMax] = useState<boolean>(false)
  const [imgFillAxis, setImgFillAxis] = useState<Axis | null>(null)

  const contentRef = useRef<HTMLDivElement | null>(null)
  const mediaRef = useRef<HTMLDivElement | null>(null)
  const imgRef = useRef<HTMLImageElement | null>(null)

  const animProps = {
    wrapper: getWrapperAnimProps(isOpen),
    content: getContentAnimProps(isOpen),
    details: getDetailsAnimProps(isImgLoaded),
    imgScroller: getImgScrollerAnimProps(isImgLoaded),
  }

  // Utils
  const toggle = useCallback(
    (value: boolean) => {
      setIsOpen(value)
      disableScroll(document.documentElement, value)

      if (value === false) {
        setIsImgLoaded(false)
        setIsImgMax(false)

        pageDispatch({
          type: "updateShowcaseActiveItemIndex",
          payload: null,
        })
      }
    },
    [pageDispatch]
  )

  const cycle = useCallback(
    (value: number) => {
      if (
        pageState.showcaseActiveItemIndex === null ||
        pageState.showcaseActiveItems === null
      ) {
        return
      }

      const targetIndex = pageState.showcaseActiveItemIndex + value
      const itemsAmount = pageState.showcaseActiveItems.length

      if (!itemsAmount) return

      // prettier-ignore
      const newIndex =
      // Loop around to the first item
      targetIndex >= itemsAmount ? 0
      // Loop around to the last item
      : targetIndex < 0 ? itemsAmount - 1
      // Default to the provided index
      : targetIndex

      setIsImgLoaded(false)
      setIsImgMax(false)

      pageDispatch({
        type: "updateShowcaseActiveItemIndex",
        payload: newIndex,
      })
    },
    [
      pageState.showcaseActiveItemIndex,
      pageState.showcaseActiveItems,
      pageDispatch,
    ]
  )

  // Handlers
  const handleImgLoadingComplete = () => {
    setIsImgLoaded(true)
  }

  const handleZoomClick = () => {
    setIsImgMax(!isImgMax)
  }

  const handleCloseClick = () => {
    toggle(false)
  }

  // Hooks

  /**
   * Expand automatically when data is set
   */
  useEffect(() => {
    if (isOpen || !data) return

    toggle(true)
  }, [isOpen, data, toggle])

  /**
   * Find out which axis the image should expand on when maximised
   */
  useEffect(() => {
    if (!mediaRef?.current || !data?.image.width || !data?.image.height) {
      return
    }

    const imgWidth = Number(data.image.width)
    const imgHeight = Number(data.image.height)

    /**
     * When calculating the wrapper's size, use client dimensions to ignore
     * invisible content such as an image loader.
     */
    const imgAR = calculateAspectRatio(imgWidth, imgHeight)
    const mediaAR = calculateAspectRatio(
      mediaRef.current.clientWidth,
      mediaRef.current.clientHeight
    )

    const newImgFillAxis = imgAR > mediaAR ? "vertical" : "horizontal"

    setImgFillAxis(newImgFillAxis)
  }, [data?.image.width, data?.image.height])

  /**
   * Monitor key presses for various actions
   */
  useEffect(() => {
    const handleOnKeydown = (e: KeyboardEvent) => {
      if (!isOpen) return

      switch (e.key) {
        case "Escape":
          toggle(false)
          break
        case "ArrowLeft":
          cycle(-1)
          break
        case "ArrowRight":
          cycle(1)
          break
      }
    }

    document.addEventListener("keydown", handleOnKeydown)

    return () => document.removeEventListener("keydown", handleOnKeydown)
  }, [isOpen, toggle, cycle])

  /**
   * Close when clicking outside the content
   */
  useClickOutside(contentRef, () => {
    if (!isOpen) return

    toggle(false)
  })

  return (
    <AnimatePresence>
      {data && (
        <S.Wrapper key="modal" {...animProps.wrapper}>
          <S.Container>
            <S.Content
              key="modal-content"
              ref={contentRef}
              {...animProps.content}
            >
              <AnimatePresence initial={false} mode="popLayout">
                <S.Details
                  key={`modal-details-${pageState.showcaseActiveItemIndex}`}
                  {...animProps.details}
                >
                  {data.name && <Heading level="h3">{data.name}</Heading>}
                  {data.tagline && <Text>{data.tagline}</Text>}
                </S.Details>
              </AnimatePresence>

              <S.Media ref={mediaRef}>
                {data.image &&
                  data.image.src &&
                  data.image.width &&
                  data.image.height &&
                  data.image.alt && (
                    <S.ImageWrapper>
                      <AnimatePresence mode="popLayout" initial={false}>
                        <S.ImageScroller
                          key={`modal-image-scroller-${pageState.showcaseActiveItemIndex}`}
                          $isImgMax={isImgMax}
                          {...animProps.imgScroller}
                        >
                          <S.Image
                            ref={imgRef}
                            src={data.image.src}
                            width={data.image.width}
                            height={data.image.height}
                            alt={data.image.alt}
                            $isImgMax={isImgMax}
                            $imgFillAxis={imgFillAxis}
                            onLoadingComplete={handleImgLoadingComplete}
                            onClick={handleZoomClick}
                          />
                        </S.ImageScroller>
                      </AnimatePresence>
                    </S.ImageWrapper>
                  )}

                <S.Controls>
                  <S.ControlCloseBtn onClick={handleCloseClick}>
                    <S.Icon type="close" />
                  </S.ControlCloseBtn>

                  <S.ControlZoomBtn onClick={handleZoomClick}>
                    {isImgMax ? (
                      <S.Icon type="collapse" />
                    ) : (
                      <S.Icon type="expand" />
                    )}
                  </S.ControlZoomBtn>

                  {data.links?.map((link, index) => (
                    <Fragment key={index}>
                      {link.type === "external" ? (
                        <S.ControlExternalLink
                          href={link.url}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <S.ControlLinkText>
                            View on {getDomain(link.url)}
                          </S.ControlLinkText>
                          <S.Icon type="linkExternal" />
                        </S.ControlExternalLink>
                      ) : (
                        <S.ControlInternalLink href={link.url}>
                          <S.ControlLinkText>
                            Go to case study
                          </S.ControlLinkText>
                          <S.Icon type="linkInternal" />
                        </S.ControlInternalLink>
                      )}
                    </Fragment>
                  ))}
                </S.Controls>

                <S.Navigation>
                  <S.NavigationPrevBtn
                    aria-label="View previous project"
                    onClick={() => cycle(-1)}
                  >
                    <S.Icon type="prev" />
                  </S.NavigationPrevBtn>

                  <S.NavigationNextBtn
                    aria-label="View next project"
                    onClick={() => cycle(1)}
                  >
                    <S.Icon type="next" />
                  </S.NavigationNextBtn>
                </S.Navigation>
              </S.Media>
            </S.Content>
          </S.Container>
        </S.Wrapper>
      )}
    </AnimatePresence>
  )
}

export default ShowcaseModal
