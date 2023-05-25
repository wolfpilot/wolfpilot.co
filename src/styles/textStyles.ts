import { css } from "styled-components"

// Styles
import { mq } from "@styles/utils/mediaQueries"

/**
 * Keeping global text styles here for a quick overview
 */
export const textStyles = {
  copy: css`
    font-size: 16px;
    line-height: 1.5;
  `,
  copyL: css`
    font-size: 22px;
    line-height: 1;
  `,
  headingL: css`
    font-size: 80px;
    line-height: 1.15;

    ${mq.from.M`
      font-size: 96px;
    `}

    ${mq.from.L`
      font-size: 144px;
    `}
  `,
  headingM: css`
    font-size: 36px;
    line-height: 1.15;

    ${mq.from.M`
      font-size: 48px;
    `}

    ${mq.from.L`
      font-size: 72px;
    `}
  `,
  headingS: css`
    font-size: 20px;
    line-height: 1.15;

    ${mq.from.M`
      font-size: 24px;
    `}

    ${mq.from.L`
      font-size: 32px;
    `}
  `,
  navLinkMob: css`
    font-size: 32px;
  `,
  navLinkDesk: css`
    font-size: 18px;

    ${mq.from.L`
      font-size: 20px;
    `}

    ${mq.from.XL`
      font-size: 24px;
    `}
  `,
}
