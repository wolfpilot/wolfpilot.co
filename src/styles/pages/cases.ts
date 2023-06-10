/**
 * * Next.js doesn't accept style files in the pages directory,
 * * so so we keep 'em here instead.
 */

import Link from "next/link"
import Image from "next/image"
import styled from "styled-components"

// Styles
import { mq } from "@styles/utils/mediaQueries"
import { textStyles } from "@styles/textStyles"

// Components
import Text from "@components/generic/Text"

export const Wrapper = styled.article`
  padding: var(--spacing-block) 0;
`

export const Header = styled.header``

export const Hero = styled.div`
  background-color: var(--c-neutral5);
`

export const HeroTagline = styled(Text)`
  ${textStyles.copyL};
  padding-top: var(--spacing-default);
  padding-bottom: var(--spacing-default);
`

export const HeroImageWrapper = styled.div`
  position: relative;
  overflow: hidden;
`

export const HeroImage = styled(Image)`
  display: block;
  width: 100%;
  height: auto;
  min-height: 320px;
  object-fit: cover;

  ${mq.from.XL`
    max-height: 640px;
  `}
`

export const HeroInfo = styled.div`
  padding-top: calc(2 * var(--spacing-default));
  padding-bottom: calc(2 * var(--spacing-default));

  ${mq.from.M`
    display: flex;
  `}
`

export const HeroInfoBlock = styled.div`
  text-align: center;

  ${mq.from.M`
    flex: 1;
  `}

  &:not(:last-child) {
    margin-bottom: var(--spacing-default);

    ${mq.from.M`
      margin-bottom: 0;
    `}
  }
`

export const HeroInfoType = styled.div`
  ${textStyles.copy};
  color: var(--c-neutral2);
`

export const HeroInfoText = styled.div`
  ${textStyles.copy};
`

export const HeroInfoLink = styled(Link)`
  ${textStyles.copy};
  ${textStyles.hyperlink};
`

export const Content = styled.div``
