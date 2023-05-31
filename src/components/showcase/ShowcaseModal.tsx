import { useState, useEffect, useCallback, useRef } from "react"
import NextImage from "next/image"
import styled from "styled-components"
import { Variants, AnimatePresence, motion } from "framer-motion"

// Utils
import { usePageState, usePageDispatch } from "@utils/context/PageContext"
import { useClickOutside } from "@utils/hooks/useClickOutside"
import { disableScroll } from "@utils/domHelper"
import { calculateAspectRatio } from "@utils/mathHelper"

// Styles
import { mq } from "@styles/utils/mediaQueries"
import { zIndexes } from "@styles/zIndexes"
import { colors } from "@styles/colors"
import { duration, ease } from "@styles/animation"
import { btnResetStyles } from "@styles/button"

// Components
import ContainerComponent from "@components/layout/Container"
import Heading from "@components/generic/Heading"
import Text from "@components/generic/Text"
import IconComponent from "@components/icons/Icon"

type Axis = "vertical" | "horizontal"

// Setup
const ANIM_DURATION = duration.slow
const ANIM_DELAY = duration.medium
const ANIM_EASE = ease.framer.cubic

const wrapperAnimVariants: Variants = {
  hidden: {
    opacity: 0,
    transition: {
      duration: ANIM_DURATION,
      delay: ANIM_DELAY,
      ease: ANIM_EASE,
    },
  },
  visible: {
    opacity: 1,
    transition: {
      duration: ANIM_DURATION,
      delay: ANIM_DELAY,
      ease: ANIM_EASE,
    },
  },
}

const contentAnimVariants: Variants = {
  hidden: {
    opacity: 0,
    translateY: -20,
    transition: {
      duration: ANIM_DURATION,
      delay: ANIM_DELAY,
      ease: ANIM_EASE,
    },
  },
  visible: {
    opacity: 1,
    translateY: 0,
    transition: {
      duration: ANIM_DURATION,
      delay: ANIM_DELAY,
      ease: ANIM_EASE,
    },
  },
}

const detailsAnimVariants: Variants = {
  initial: {
    opacity: 0,
    translateY: -20,
  },
  hidden: {
    opacity: 0,
    translateY: 20,
    transition: {
      duration: 0.75,
      ease: ANIM_EASE,
    },
  },
  visible: {
    opacity: 1,
    translateY: 0,
    transition: {
      duration: 0.75,
      ease: ANIM_EASE,
    },
  },
}

const imgScrollerAnimVariants: Variants = {
  initial: {
    opacity: 0,
    scale: 1.05,
  },
  hidden: {
    opacity: 0,
    scale: 1,
    transition: {
      duration: ANIM_DURATION,
      ease: ANIM_EASE,
    },
  },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: ANIM_DURATION,
      ease: ANIM_EASE,
    },
  },
}

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

  const handleImgClick = () => {
    setIsImgMax(!isImgMax)
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
        <Wrapper
          key="modal"
          variants={wrapperAnimVariants}
          initial="hidden"
          animate={isOpen ? "visible" : "hidden"}
          exit="hidden"
        >
          <Container>
            <Content
              key="modal-content"
              variants={contentAnimVariants}
              initial="hidden"
              animate={isOpen ? "visible" : "hidden"}
              exit="hidden"
              ref={contentRef}
            >
              <AnimatePresence initial={false} mode="popLayout">
                <Details
                  key={`modal-details-${pageState.showcaseActiveItemIndex}`}
                  variants={detailsAnimVariants}
                  initial="initial"
                  animate={isImgLoaded ? "visible" : "hidden"}
                  exit="hidden"
                >
                  {data.name && <Heading level="h3">{data.name}</Heading>}
                  {data.tagline && <Text>{data.tagline}</Text>}
                </Details>
              </AnimatePresence>

              <Media ref={mediaRef}>
                {data.image &&
                  data.image.src &&
                  data.image.width &&
                  data.image.height &&
                  data.image.alt && (
                    <ImageWrapper>
                      <AnimatePresence mode="popLayout" initial={false}>
                        <ImageScroller
                          key={`modal-image-scroller-${pageState.showcaseActiveItemIndex}`}
                          variants={imgScrollerAnimVariants}
                          initial="initial"
                          animate={isImgLoaded ? "visible" : "hidden"}
                          exit="hidden"
                          $isImgMax={isImgMax}
                        >
                          <Image
                            ref={imgRef}
                            src={data.image.src}
                            width={data.image.width}
                            height={data.image.height}
                            alt={data.image.alt}
                            $isImgMax={isImgMax}
                            $imgFillAxis={imgFillAxis}
                            onLoadingComplete={handleImgLoadingComplete}
                            onClick={handleImgClick}
                          />
                        </ImageScroller>
                      </AnimatePresence>
                    </ImageWrapper>
                  )}

                <Navigation>
                  <NavigationPrevBtn
                    aria-label="View previous project"
                    onClick={() => cycle(-1)}
                  >
                    <Icon type="prev" />
                  </NavigationPrevBtn>

                  <NavigationNextBtn
                    aria-label="View next project"
                    onClick={() => cycle(1)}
                  >
                    <Icon type="next" />
                  </NavigationNextBtn>
                </Navigation>
              </Media>
            </Content>
          </Container>
        </Wrapper>
      )}
    </AnimatePresence>
  )
}

const Wrapper = styled(motion.div)`
  position: fixed;
  z-index: ${zIndexes.modal};
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  padding-top: calc(2 * var(--spacing-default));
  padding-bottom: calc(2 * var(--spacing-default));
  background-color: ${colors.black}99;

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

const Content = styled(motion.div)`
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

const Details = styled(motion.div)`
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

const Navigation = styled.div`
  position: absolute;
  z-index: 1;
  right: 0;
  bottom: var(--spacing-default);
  left: 0;
  display: flex;
  justify-content: center;
  opacity: 0.25;
  mix-blend-mode: difference;
  transition: opacity ${duration.medium}s ${ease.cubic};
`

const Icon = styled(IconComponent)`
  fill: var(--c-white);

  .path {
    transition: transform ${duration.medium}s ${ease.cubic};
  }
`

const NavigationPrevBtn = styled.button`
  ${btnResetStyles};
  padding: 5px;
  margin: 0 5px;

  &:hover {
    .path__triangle {
      transform: translateX(-3px);
    }
  }
`

const NavigationNextBtn = styled.button`
  ${btnResetStyles};
  padding: 5px;
  margin: 0 5px;

  &:hover {
    .path__triangle {
      transform: translateX(3px);
    }
  }
`

const Media = styled.div`
  position: relative;
  display: flex;
  width: 100%;
  height: 100%;
  background-color: ${colors.black}20;
  overflow: hidden;

  &:hover {
    ${Navigation} {
      opacity: 1;
    }
  }
`

const ImageWrapper = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
`

const ImageScroller = styled(motion.div)<{ $isImgMax: boolean }>`
  position: relative;
  display: flex;
  width: 100%;
  height: 100%;

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
      overflow: scroll;
      justify-content: flex-start;
      align-items: flex-start;
    `
      : `
      overflow: hidden;
      justify-content: center;
      min-width: 0;
      min-height: 0;
  `}
`

const Image = styled(NextImage)<{
  $isImgMax: boolean
  $imgFillAxis: string | null
}>`
  object-fit: contain;

  ${({ $isImgMax }) =>
    $isImgMax
      ? `
      max-width: none;
      max-height: none;
      cursor: zoom-out;
    `
      : `
      width: 100%;
      height: 100%;
      max-width: 100%;
      max-height: 100%;
      cursor: zoom-in;
    `}

  ${({ $isImgMax, $imgFillAxis }) =>
    $isImgMax &&
    $imgFillAxis === "vertical" &&
    `
      width: auto;
      height: 100%;
    `}

  ${({ $isImgMax, $imgFillAxis }) =>
    $isImgMax &&
    $imgFillAxis === "horizontal" &&
    `
      width: 100%;
      height: auto;
    `};
`

export default ShowcaseModal
