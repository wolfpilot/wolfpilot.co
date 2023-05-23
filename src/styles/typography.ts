import { css } from "styled-components"

export const fonts = {
  primary: `"Chillax", Roboto, Helvetica, Arial, sans-serif`,
}

export const BASE_FONT_SIZE = 16

export const weights = {
  light: 300,
  normal: 400,
  semibold: 600,
}

/**
 * Keeping global text styles here for a quick overview
 */
export const textStyles = {
  base: css`
    font-size: 16px;
    line-height: 1.5;
  `,
}

export const textStylesLrg = {
  base: css`
    font-size: 22px;
    line-height: 1;
  `,
}

export const mobNavLinkStyles = {
  base: css`
    font-size: 32px;
  `,
}

export const deskNavLinkStyles = {
  base: css`
    font-size: 18px;
  `,
  L: css`
    font-size: 20px;
  `,
  XL: css`
    font-size: 24px;
  `,
}
