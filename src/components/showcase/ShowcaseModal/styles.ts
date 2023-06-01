import NextLink from "next/link"
import NextImage from "next/image"
import styled, { css } from "styled-components"
import { motion } from "framer-motion"

// Styles
import { mq } from "@styles/utils/mediaQueries"
import { zIndexes } from "@styles/zIndexes"
import { colors } from "@styles/colors"
import { duration, ease } from "@styles/animation"
import { btnResetStyles } from "@styles/button"

// Components
import ContainerComponent from "@components/layout/Container"
import Tooltip from "@components/generic/Tooltip"
import IconComponent from "@components/icons/Icon"

// Shared styles
const sharedControlStyles = css`
  ${btnResetStyles};
  position: relative;

  &:not(:last-child) {
    margin-bottom: var(--spacing-default);
  }

  &:hover,
  &:focus {
    > span {
      visibility: visible;
      opacity: 1;
      padding-right: 40px;
    }

    svg {
      transform: scale(0.85);
    }
  }

  svg {
    fill: var(--c-white);
    transform-origin: center center;
    transition: transform ${duration.medium}s ${ease.cubic};
  }
`

const sharedNavigationStyles = css<{ $showTooltip: boolean }>`
  ${btnResetStyles};
  position: relative;
  padding: 5px;
  margin: 0 5px;

  &:hover,
  &:focus {
    ~ span {
      ${({ $showTooltip }) =>
        $showTooltip &&
        `
        visibility: visible;
        opacity: 1;
        transform: translate(-50%, -10px);
      `}
    }
  }
`

// Main styles
export const Wrapper = styled(motion.div)`
  position: fixed;
  z-index: ${zIndexes.modal};
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  padding-top: calc(2 * var(--spacing-default));
  padding-bottom: calc(2 * var(--spacing-default));
  background-color: ${colors.black}99;

  // prettier-ignore
  @media (hover: hover)
    and (pointer: fine)
    and (min-width: ${mq.breakpoints.M}px) {
    padding-top: 20vh;
    padding-bottom: 20vh;
  }
`

export const Container = styled(ContainerComponent)`
  height: 100%;

  ${mq.from.L`
    display: flex;
    justify-content: center;
  `}
`

export const Content = styled(motion.div)`
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

export const Details = styled(motion.div)`
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

export const Controls = styled.div`
  position: absolute;
  z-index: 1;
  top: var(--spacing-default);
  right: var(--spacing-default);
  display: flex;
  flex-direction: column;
  opacity: 0.5;
  transition: opacity ${duration.medium}s ${ease.cubic};
`

export const ControlTooltip = styled(Tooltip)`
  display: none;

  @media (hover: hover) and (pointer: fine) {
    position: absolute;
    z-index: -1;
    top: 50%;
    right: -4px;
    display: initial;
    width: max-content;
    text-align: right;
    visibility: hidden;
    opacity: 0;
    transform: translateY(-50%);
    transition: visibility ${duration.medium}s ${ease.cubic},
      opacity ${duration.medium}s ${ease.cubic},
      padding ${duration.medium}s ${ease.cubic};
  }
`

export const ControlCloseBtn = styled.button`
  ${sharedControlStyles};
`

export const ControlZoomBtn = styled.button`
  ${sharedControlStyles};
`

export const ControlExternalLink = styled.a`
  ${sharedControlStyles};
`

export const ControlInternalLink = styled(NextLink)`
  ${sharedControlStyles};
`

export const Navigation = styled.div`
  position: absolute;
  z-index: 1;
  bottom: var(--spacing-default);
  left: 50%;
  display: flex;
  justify-content: center;
  opacity: 0.5;
  transform: translateX(-50%);
  transition: opacity ${duration.medium}s ${ease.cubic};
`

export const Icon = styled(IconComponent)`
  fill: var(--c-white);

  .path {
    transition: transform ${duration.medium}s ${ease.cubic};
  }
`

export const NavigationTooltip = styled(Tooltip)`
  display: none;

  @media (hover: hover) and (pointer: fine) {
    position: absolute;
    z-index: -1;
    top: -100%;
    left: 50%;
    display: initial;
    width: max-content;
    visibility: hidden;
    opacity: 0;
    transform: translate(-50%, 0);
    transition: visibility ${duration.medium}s ${ease.cubic},
      opacity ${duration.medium}s ${ease.cubic},
      transform ${duration.medium}s ${ease.cubic};
  }
`

export const NavigationPrevBtn = styled.button<{ $showTooltip: boolean }>`
  ${sharedNavigationStyles};

  &:hover,
  &:focus {
    .path__triangle {
      transform: translateX(-3px);
    }
  }
`

export const NavigationNextBtn = styled.button<{ $showTooltip: boolean }>`
  ${sharedNavigationStyles};

  &:hover,
  &:focus {
    .path__triangle {
      transform: translateX(3px);
    }
  }
`

export const Media = styled.div`
  position: relative;
  display: flex;
  width: 100%;
  height: 100%;
  background-color: ${colors.black}20;
  overflow: hidden;

  &:hover,
  &:focus-within {
    &::after {
      opacity: 0.25;
    }

    ${Controls},
    ${Navigation} {
      opacity: 1;
    }
  }

  &::after {
    content: "";
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    background: linear-gradient(
      to bottom,
      var(--c-black),
      transparent,
      transparent,
      var(--c-black)
    );
    opacity: 0.25;
    transition: opacity ${duration.medium}s ${ease.cubic};
    pointer-events: none;

    @media (hover: hover) and (pointer: fine) {
      opacity: 0;
    }
  }
`

export const ImageWrapper = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
`

export const ImageScroller = styled(motion.div)<{ $isImgMax: boolean }>`
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

export const Image = styled(NextImage)<{
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
