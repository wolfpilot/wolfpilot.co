import NextImage from "next/image"
import styled from "styled-components"

// Styles
import { fixBorderRadiusOverflow } from "@styles/vendor/safari"
import { mq } from "@styles/utils/mediaQueries"

// Components
import ImageLoaderComponent from "@components/loaders/ImageLoader/ImageLoader"

export const Wrapper = styled.div`
  &:not(:last-child) {
    margin-bottom: calc(var(--spacing-block) + var(--spacing-default));
  }
`

export const Figure = styled.figure`
  ${fixBorderRadiusOverflow}
  position: relative;
  overflow: hidden;
  width: 100%;
  margin: 0 auto;
  padding: var(--spacing-default);
  border-radius: var(--border-radius-lrg);
  background-color: var(--c-neutral5);
`

export const Image = styled(NextImage)`
  ${fixBorderRadiusOverflow}
  width: 100%;
  height: auto;
  border-radius: var(--border-radius-sml);
`

export const ImageLoader = styled(ImageLoaderComponent)`
  background-color: var(--c-neutral5);
`

export const Caption = styled.figcaption`
  padding-top: var(--spacing-default);
  color: var(--c-neutral1);
  text-align: center;

  ${mq.from.M`
    padding-top: calc(2 * var(--spacing-default));
    padding-bottom: var(--spacing-default);
  `}
`
