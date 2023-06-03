import styled from "styled-components"

// Styles
import { mq } from "@styles/utils/mediaQueries"

export const Wrapper = styled.ul`
  list-style: none;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  margin-top: 0;
  margin-bottom: var(--spacing-default);
  padding-right: calc(var(--spacing-default) / 2);
  padding-left: calc(var(--spacing-default) / 2);
  background-color: var(--c-neutral5);

  ${mq.from.L`
    justify-content: flex-start;
    background: none;
  `}
`
