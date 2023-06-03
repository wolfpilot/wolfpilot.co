import { Fragment, useState, useEffect, useCallback, useRef } from "react"
import { AnimatePresence } from "framer-motion"

// Utils
import { useShowcaseState, useShowcaseDispatch } from "../Context"
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
  const showcaseState = useShowcaseState()
  const showcaseDispatch = useShowcaseDispatch()

  const { activeItems, activeItemIndex } = showcaseState

  const data =
    activeItems !== null && activeItemIndex !== null
      ? activeItems[activeItemIndex]
      : null

  const [isOpen, setIsOpen] = useState<boolean>(false)
  const [isImgLoaded, setIsImgLoaded] = useState<boolean>(false)
  const [isImgMax, setIsImgMax] = useState<boolean>(false)
  const [imgFillAxis, setImgFillAxis] = useState<Axis | null>(null)
  const [imgScrollDP, setImgScrollDP] = useState<Record<string, number> | null>(
    null
  )
  const [hasCycled, setHasCycled] = useState<boolean>(false)

  const wrapperRef = useRef<HTMLDivElement | null>(null)
  const contentRef = useRef<HTMLDivElement | null>(null)
  const mediaRef = useRef<HTMLDivElement | null>(null)

  /**
   * TODO: Report bug to Framer Motion.
   *
   * Work-around since both "sync" and "popLayout" modes return refs backwards,
   * first the new element, then null, overwriting the value of the ref.
   *
   * In our case, imgRef becomes null on any state update, whereas arrays
   * keep the latest object references intact.
   */
  const imgRefArray = useRef<HTMLImageElement[] | null[]>([])
  const activeImgRef = imgRefArray.current[activeItemIndex || 0]

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

      if (value) {
        wrapperRef.current?.focus()
      } else {
        setIsImgLoaded(false)
        setIsImgMax(false)
        setImgFillAxis(null)
        setImgScrollDP(null)
        setHasCycled(false)

        showcaseDispatch({
          type: "updateActiveItemIndex",
          payload: null,
        })
      }
    },
    [showcaseDispatch]
  )

  const cycle = useCallback(
    (value: number) => {
      if (activeItemIndex === null || activeItems === null) {
        return
      }

      const targetIndex = activeItemIndex + value
      const itemsAmount = activeItems.length

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
      setImgFillAxis(null)
      setImgScrollDP(null)
      setHasCycled(true)

      showcaseDispatch({
        type: "updateActiveItemIndex",
        payload: newIndex,
      })
    },
    [activeItemIndex, activeItems, showcaseDispatch]
  )

  const zoomOut = () => {
    setIsImgMax(false)
    setImgScrollDP(null)
  }

  const zoomIn = (dpX: number, dpY: number) => {
    setIsImgMax(true)
    setImgScrollDP({
      x: dpX,
      y: dpY,
    })
  }

  // Handlers
  const handleImgLoadingComplete = () => {
    setIsImgLoaded(true)
  }

  const handleCloseBtnClick = () => {
    toggle(false)
  }

  const handleZoomBtnClick = () => {
    // Zooming out
    if (isImgMax) {
      zoomOut()

      return
    }

    // Zooming in

    // Simulate click in the middle of the image
    const dpX = 50
    const dpY = 50

    zoomIn(dpX, dpY)
  }

  const handleZoomImgClick = (e: React.MouseEvent) => {
    // Zooming out
    if (isImgMax) {
      zoomOut()

      return
    }

    // Zooming in
    if (!activeImgRef || !data?.image.width || !data?.image.height) {
      return
    }

    // Get the cursor position at the time of the interaction
    const { clientX, clientY } = e

    // Get the visible element coordinates and dimensions
    const renderedImgBounds = activeImgRef.getBoundingClientRect()

    const renderedImgWidth = Math.floor(renderedImgBounds.width)
    const renderedImgHeight = Math.floor(renderedImgBounds.height)

    // Calculate the distance (px) from the cursor to the edges of the image
    const dX = clientX - renderedImgBounds.x
    const dY = clientY - renderedImgBounds.y

    // Calculate the distance (%) from the cursor to the edges of the image
    const dpX = (dX * 100) / renderedImgWidth
    const dpY = (dY * 100) / renderedImgHeight

    zoomIn(dpX, dpY)
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

    // Convert Next's SafeNumber type to Number
    const imgWidth = Number(data.image.width)
    const imgHeight = Number(data.image.height)
    const imgAR = calculateAspectRatio(imgWidth, imgHeight)

    // Use client dimensions to ignore invisible content such as an image loader
    const mediaWidth = mediaRef.current.clientWidth
    const mediaHeight = mediaRef.current.clientHeight
    const mediaAR = calculateAspectRatio(mediaWidth, mediaHeight)

    /**
     * Think of the fill axis like this:
     *
     * A narrow (width) image, when zoomed in, will expand horizontally.
     * A short (height) image, when zoomed in, will expand vertically.
     */
    const newImgFillAxis = imgAR > mediaAR ? "vertical" : "horizontal"

    setImgFillAxis(newImgFillAxis)
  }, [data?.image.width, data?.image.height])

  /**
   * Scroll to the zoom-in coords
   *
   * * NOTE (to self): Why not do all of this in one function?
   *
   * Because we need to wait for the image to actually expand past its container
   * before scrolling, aka wait for the CSS styles to apply. That's why it's
   * necessary to have isImgMax as a dependency of this effect.
   */
  useEffect(() => {
    if (!activeImgRef || !isImgMax || !imgFillAxis || imgScrollDP === null) {
      return
    }

    const containerElem = activeImgRef.parentElement

    if (!containerElem) return

    // Get the visible element coordinates and dimensions
    const renderedContainerBounds = containerElem.getBoundingClientRect()

    const renderedContainerWidth = Math.floor(renderedContainerBounds.width)
    const renderedContainerHeight = Math.floor(renderedContainerBounds.height)

    // Calculate the distance (px) available for scrolling
    const dX = activeImgRef.scrollWidth - renderedContainerWidth
    const dY = activeImgRef.scrollHeight - renderedContainerHeight

    // Calculate the distance (px) to scroll from the top / left of the container
    const dScrollX = (imgScrollDP.x * dX) / 100
    const dScrollY = (imgScrollDP.y * dY) / 100

    containerElem.scrollLeft = dScrollX
    containerElem.scrollTop = dScrollY
  }, [isImgMax, imgFillAxis, imgScrollDP, activeImgRef])

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
          if (!e.ctrlKey) return

          cycle(-1)
          break
        case "ArrowRight":
          if (!e.ctrlKey) return

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
        <S.Wrapper
          key="modal"
          ref={wrapperRef}
          tabIndex={0}
          {...animProps.wrapper}
        >
          <S.Container>
            <S.Content
              key="modal-content"
              ref={contentRef}
              {...animProps.content}
            >
              <AnimatePresence initial={false} mode="popLayout">
                <S.Details
                  key={`modal-details-${data.id}`}
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
                      <AnimatePresence initial={false} mode="popLayout">
                        <S.ImageScroller
                          key={activeItemIndex || 0}
                          $isImgMax={isImgMax}
                          {...animProps.imgScroller}
                        >
                          <S.Image
                            ref={(ref) => {
                              imgRefArray.current[activeItemIndex || 0] = ref
                            }}
                            src={data.image.src}
                            width={data.image.width}
                            height={data.image.height}
                            alt={data.image.alt}
                            $isImgMax={isImgMax}
                            $imgFillAxis={imgFillAxis}
                            onLoadingComplete={handleImgLoadingComplete}
                            onClick={handleZoomImgClick}
                          />
                        </S.ImageScroller>
                      </AnimatePresence>
                    </S.ImageWrapper>
                  )}

                <S.Controls>
                  <S.ControlCloseBtn
                    aria-label="Close"
                    onClick={handleCloseBtnClick}
                  >
                    <S.Icon type="close" />
                  </S.ControlCloseBtn>

                  <S.ControlZoomBtn
                    aria-label={isImgMax ? "Zoom out" : "Zoom in"}
                    onClick={handleZoomBtnClick}
                  >
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
                          <S.ControlTooltip>
                            View on {getDomain(link.url)}
                          </S.ControlTooltip>
                          <S.Icon type="linkExternal" />
                        </S.ControlExternalLink>
                      ) : (
                        <S.ControlInternalLink href={link.url}>
                          <S.ControlTooltip>Go to case study</S.ControlTooltip>
                          <S.Icon type="linkInternal" />
                        </S.ControlInternalLink>
                      )}
                    </Fragment>
                  ))}
                </S.Controls>

                <S.Navigation>
                  <S.NavigationPrevBtn
                    aria-label="View previous project"
                    $showTooltip={!hasCycled}
                    onClick={() => cycle(-1)}
                  >
                    <S.Icon type="prev" />
                  </S.NavigationPrevBtn>

                  <S.NavigationNextBtn
                    aria-label="View next project"
                    $showTooltip={!hasCycled}
                    onClick={() => cycle(1)}
                  >
                    <S.Icon type="next" />
                  </S.NavigationNextBtn>

                  <S.NavigationTooltip>
                    Or press CTRL + ⇦ / ⇨
                  </S.NavigationTooltip>
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
