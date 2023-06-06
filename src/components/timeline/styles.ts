import styled from "styled-components"

// Styles
import { mq } from "@styles/utils/mediaQueries"
import { listResetStyles } from "@styles/list"
import { btnResetStyles } from "@styles/button"
import { textStyles } from "@styles/textStyles"
import { duration, ease } from "@styles/animation"

// Components
import Text from "@components/generic/Text"

export const Wrapper = styled.div`
  ${mq.from.M`
    display: flex;
    width: calc(8 * var(--grid-column-size) + 7 * var(--grid-gutter-size));
  `}
`

export const List = styled.ul`
  ${listResetStyles};
`

export const ItemContent = styled.div<{ $isActive: boolean }>`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  opacity: ${({ $isActive }) => ($isActive ? 1 : 0.3)};
  transition: opacity ${duration.medium}s ${ease.cubic};
`

export const Item = styled.li<{ $isHighlighted: boolean }>`
  position: relative;
  display: flex;

  // Safe padding for content to animate to
  padding-right: var(--spacing-default);

  &:not(:last-child) {
    padding-bottom: var(--spacing-default);

    &::before {
      content: "";
      position: absolute;
      top: 30px;
      left: 3px;
      bottom: 0;
      width: 2px;
      transition: background-color ${duration.medium}s ${ease.cubic},
        opacity ${duration.medium}s ${ease.cubic};

      ${({ $isHighlighted }) =>
        $isHighlighted
          ? `
          background-color: var(--c-accent1);
          opacity: 1;
        `
          : `
          background-color: var(--c-neutral3);
          opacity: 0.3;
        `}
    }
  }

  &:focus-within,
  &:hover {
    ${ItemContent} {
      opacity: 1;
    }
  }
`

export const ItemTrack = styled.div`
  display: flex;
  align-items: baseline;
  margin-right: var(--grid-gutter-size);
`

export const ItemBullet = styled.div<{
  $isActive: boolean
  $isHighlighted: boolean
}>`
  ${textStyles.copyL};
  color: ${({ $isHighlighted }) =>
    $isHighlighted ? "var(--c-accent1)" : "var(--c-neutral3)"};
  transition: color ${duration.medium}s ${ease.cubic},
    transform ${duration.medium}s ${ease.cubic};

  ${({ $isActive }) =>
    $isActive &&
    `
    color: var(--c-accent1);
    transform: scale(2);
  `}
`

export const ItemToggleBtn = styled.button`
  ${btnResetStyles};
  ${textStyles.copy};
  text-align: left;

  ${mq.from.XS`
    ${textStyles.copyL};
  `}
`

export const ItemCompanyLink = styled.a`
  ${textStyles.copyS};
  color: var(--c-accent2);

  ${mq.from.XS`
    ${textStyles.copy};
  `}
`

export const ItemCompanyName = styled(Text)`
  margin-bottom: 0;
`

export const Date = styled(Text)`
  margin-bottom: 0;
`

export const Description = styled(Text)`
  padding-top: var(--spacing-default);
`
