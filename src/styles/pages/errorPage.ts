import styled from "styled-components"

// Styles
import { mq } from "@styles/utils/mediaQueries"
import { weights } from "@styles/typography"

// Components
import HeadingComponent from "@components/generic/Heading"
import TextComponent from "@components/generic/Text"

export const Wrapper = styled.div`
  padding: var(--spacing-block) 0;
  text-align: center;
`

export const Heading = styled(HeadingComponent)`
  color: var(--c-accent1);
  color: var(--c-neutral3);
  font-size: 50vw;
  font-weight: ${weights.bold};
  line-height: 1;

  ${mq.from.XL`
    font-size: 640px;
  `}
`

export const SubHeading = styled(HeadingComponent)`
  margin-bottom: calc(3 * var(--spacing-default));
`

export const Text = styled(TextComponent)``
