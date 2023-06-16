import styled from "styled-components"

// Styles
import { mq } from "@styles/utils/mediaQueries"
import { textStyles } from "@styles/textStyles"

// Components
import HeadingComponent from "@components/generic/Heading"
import RichTextComponent from "@components/generic/RichText"

export const Wrapper = styled.div`
  padding-top: calc(2 * var(--spacing-default));
  padding-bottom: calc(3 * var(--spacing-default));
  background-color: var(--c-neutral5);

  &:not(:last-child) {
    margin-bottom: var(--spacing-block);
  }
`

export const Heading = styled(HeadingComponent)``

export const Subheading = styled(HeadingComponent)`
  ${textStyles.copyL};
`

export const RichText = styled(RichTextComponent)`
  ${mq.from.M`
    columns: 2;
    column-gap: var(--spacing-default);
  `}
`
