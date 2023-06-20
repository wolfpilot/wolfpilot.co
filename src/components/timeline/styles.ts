import styled from "styled-components"
import { motion } from "framer-motion"

// Styles
import { mq } from "@styles/utils/mediaQueries"
import { listResetStyles } from "@styles/list"
import { btnResetStyles } from "@styles/button"
import { textStyles } from "@styles/textStyles"
import { weights } from "@styles/typography"
import { duration, ease } from "@styles/animation"

// Components
import ExternalLink from "@components/generic/ExternalLink"
import Text from "@components/generic/Text"

export const Wrapper = styled.div`
  ${mq.from.M`
    display: flex;
    align-items: baseline;
  `}
`

export const Controls = styled.div`
  display: none;

  ${mq.from.M`
    display: flex;
    justify-content: flex-end;
    flex: 0 0 calc(var(--grid-column-size) + var(--grid-gutter-size));
    padding-right: var(--grid-gutter-size);
  `}
`

export const ControlToggleAll = styled.button`
  ${btnResetStyles};
  color: var(--c-accent2);
  line-height: 1.5;
  transition: color ${duration.medium}s ${ease.cubic};

  &:hover,
  &:focus-visible {
    color: var(--c-black);
  }

  &:focus-visible {
    font-weight: ${weights.semibold};
  }
`

export const List = styled.ul`
  ${listResetStyles};

  ${mq.from.M`
    padding-right: calc(var(--grid-column-size) + var(--grid-gutter-size));
  `}
`

export const ItemContent = styled.div<{ $isActive: boolean }>`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 100%;
  padding-left: var(--spacing-default);
  opacity: ${({ $isActive }) => ($isActive ? 1 : 0.3)};
  transition: opacity ${duration.medium}s ${ease.cubic};
`

export const Item = styled.li`
  position: relative;
  display: flex;

  &:not(:last-child) {
    ${ItemContent} {
      padding-bottom: var(--spacing-default);
    }
  }

  &:focus-within,
  &:hover {
    ${ItemContent} {
      opacity: 1;
    }
  }
`

export const ItemIndicator = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`

export const ItemTrack = styled.div<{ $isHighlighted: boolean }>`
  width: 2px;
  height: 100%;
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

  &[disabled] {
    color: var(--c-black);
    cursor: initial;
  }
`

export const ItemCompanyLink = styled(ExternalLink)`
  ${textStyles.hyperlink};
  ${textStyles.copyS};

  ${mq.from.XS`
    ${textStyles.copy};
  `}
`

export const ItemCompanyName = styled(Text)`
  margin-bottom: 0;
`

export const ItemDate = styled(Text)`
  margin-bottom: 0;
`

export const ItemDetails = styled(motion.div)<{ $isActive: boolean }>`
  /**
   * Fix Framer Motion bug where visibility is set to hidden at the end of
   * the show animation.
   *
   * To replicate, toggle the animation quickly a few times and notice how
   * transitionEnd applies its styles regardless of which variant is playing.
   *
   * For more info, see:
   * https://github.com/framer/motion/issues/706
   */
  ${({ $isActive }) => $isActive && "visibility: visible !important;"}
`

export const ItemDescription = styled(Text)`
  padding-top: var(--spacing-default);
`
