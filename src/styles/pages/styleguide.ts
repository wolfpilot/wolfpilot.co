/**
 * * Next.js doesn't accept style files in the pages directory,
 * * so so we keep 'em here instead.
 */

import styled from "styled-components"

// Styles
import { colors } from "@styles/colors"

// Components
import Heading from "@components/generic/Heading"

export const Header = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  min-height: 25vh;
  margin-bottom: var(--spacing-block);
  padding: var(--spacing-block) 0;
  border-radius: var(--border-radius-sml);
  background-color: var(--c-neutral4);
  color: var(--c-black);
`

export const Title = styled.h1`
  font-size: 72px;
`

export const Section = styled.div`
  &:not(:last-of-type) {
    margin-bottom: var(--spacing-section);
  }
`

export const ContentHeading = styled(Heading)`
  padding-bottom: var(--spacing-default);
  text-transform: uppercase;
  letter-spacing: 0.5em;
  border-bottom: 1px solid var(--c-neutral3);
`

export const ColorList = styled.div``

export const ColorBlock = styled.div<{ hex: string }>`
  margin: var(--spacing-default) 0;
  padding: var(--spacing-default);
  border-radius: var(--border-radius-sml);
  background-color: ${({ hex }) => hex};
  ${({ hex }) => hex === colors.black && `color: ${colors.white}`};
`
