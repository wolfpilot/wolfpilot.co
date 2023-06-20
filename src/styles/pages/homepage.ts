/**
 * * Next.js doesn't accept style files in the pages directory,
 * * so so we keep 'em here instead.
 */

import Image from "next/image"
import styled from "styled-components"

// Styles
import { mq } from "@styles/utils/mediaQueries"
import { textStyles } from "@styles/textStyles"

// Components
import Heading from "@components/generic/Heading"

export const Section = styled.section`
  /**
   * Offset the header height so that we scroll just below it on # navigation
   */
  &::before {
    content: "";
    display: block;
    height: var(--site-header-height);
    margin-top: calc(-1 * var(--site-header-height));
    visibility: hidden;
  }

  &:not(:last-child) {
    margin-bottom: var(--spacing-section);
  }
`

export const SectionHeader = styled.div`
  margin-bottom: var(--spacing-block);
`

export const SectionHeading = styled(Heading)`
  ${textStyles.headingL};
`

export const Hero = styled.div`
  padding-top: calc(2 * var(--spacing-block));
  padding-bottom: calc(3 * var(--spacing-block));
  text-align: center;
`

export const HeroImageWrapper = styled.div`
  position: relative;
  margin-bottom: calc(2 * var(--spacing-block));
`

export const HeroBackdrop = styled.div`
  width: calc(2 * var(--grid-column-size));
  height: calc(2 * var(--grid-column-size));
  margin: 0 auto;
  background: var(--g-primary-diagonal);
  border-radius: 50%;

  ${mq.from.S`
    width: calc(1.5 * var(--grid-column-size));
    height: calc(1.5 * var(--grid-column-size));
  `}

  ${mq.from.M`
    width: calc(2 * var(--grid-column-size));
    height: calc(2 * var(--grid-column-size));
  `}

  ${mq.from.L`
    width: calc(2 * var(--grid-column-size) + 3 * var(--grid-gutter-size));
    height: calc(2 * var(--grid-column-size) + 3 * var(--grid-gutter-size));
  `}
`

export const HeroImage = styled(Image)`
  position: absolute;
  top: 50%;
  left: 50%;
  width: calc(2 * var(--grid-column-size) - 2 * var(--grid-gutter-size));
  height: auto;
  mix-blend-mode: darken;
  transform: translate(-50%, -45%);

  ${mq.from.S`
    width: calc(1.5 * var(--grid-column-size) - 1.5 * var(--grid-gutter-size));
  `}

  ${mq.from.M`
    width: calc(2 * var(--grid-column-size) - 2 * var(--grid-gutter-size));
  `}

  ${mq.from.L`
    width: calc(2 * var(--grid-column-size) + 2 * var(--grid-gutter-size));
  `}
`

export const HeroHeading = styled(Heading)`
  ${textStyles.headingM};
`
