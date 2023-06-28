import styled from "styled-components"

// Styles
import { mq } from "@styles/utils/mediaQueries"
import { weights } from "@styles/typography"
import { duration, ease } from "@styles/animation"

export const Wrapper = styled.li`
  display: flex;
  margin-top: 8px;
  margin-bottom: 8px;

  ${mq.from.L`
    margin-top: 0;
    margin-bottom: 0;
  `}

  &:not(:last-child) {
    // Spacer pseudo-element
    &::after {
      content: "|";
      display: block;
      margin-right: calc(var(--spacing-default) / 2);
      margin-left: calc(var(--spacing-default) / 2);
      color: var(--c-neutral2);
    }
  }
`

export const Button = styled.button<{ $isActive: boolean }>`
  padding: 4px 0;
  outline: none;
  border: none;
  background: none;
  color: ${({ $isActive }) =>
    $isActive ? "var(--c-accent2)" : "var(--c-neutral2)"};
  transition: color ${duration.medium}s ${ease.cubic};

  &:hover,
  &:focus-visible {
    color: ${({ $isActive }) =>
      $isActive ? "var(--c-accent2)" : " var(--c-black)"};
  }

  &:focus-visible {
    font-weight: ${weights.bold};
  }
`
