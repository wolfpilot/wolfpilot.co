import styled from "styled-components"

// Styles
import { mq } from "@styles/utils/mediaQueries"

// Components
import ExternalLink from "@components/generic/ExternalLink"

export const Wrapper = styled.div`
  padding-top: calc(2 * var(--spacing-block));
  padding-bottom: calc(2 * var(--spacing-block));
  background-color: var(--c-black);
  color: var(--c-white);
  text-align: center;
`

export const EmailLink = styled(ExternalLink)`
  margin-bottom: var(--spacing-default);

  font-size: 28px;
  line-height: 1.15;

  ${mq.from.S`
    font-size: 32px;
  `}

  ${mq.from.M`
    font-size: 40px;
  `}

  ${mq.from.L`
    font-size: 60px;
  `}
`
