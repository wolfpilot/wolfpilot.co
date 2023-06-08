import { css } from "styled-components"

import { BASE_FONT_SIZE } from "../typography"

interface IBreakpoints {
  [index: string]: number
}

type IBreakpointPresets = {
  [key in string]: (...args: any) => any
}

type IBreakpointFunction = { [key: string]: any }

// These sizes are arbitrary and you can set them to whatever you wish
export const breakpoints: IBreakpoints = {
  XXS: 320,
  XS: 375,
  S: 425,
  M: 768,
  L: 1024,
  XL: 1440,
  XXL: 1920,
}

/**
 * Use em in breakpoints to work properly cross-browser and support users
 * changing their browsers font-size. For more info, see:
 * https://zellwk.com/blog/media-query-units/
 */
export const emBreakpoints = Object.freeze(
  Object.keys(breakpoints).reduce(
    (mqObject, size) => ({
      ...mqObject,
      [size]: breakpoints[size] / BASE_FONT_SIZE,
    }),
    {} as typeof breakpoints
  )
)

/**
 * Iterate through the sizes and create a media template
 *
 * Example:
 *
 * ${fromPx(mq.from.M)`
 *  display: block;
 * `}
 */
export const from = Object.freeze(
  Object.keys(breakpoints).reduce(
    (mqObject, size) => ({
      ...mqObject,
      [size]: (...args: any) => {
        const [first, ...rest] = args

        return css`
          @media (min-width: ${emBreakpoints[size]}em) {
            ${css(first, ...rest)}
          }
        `
      },
    }),
    {} as IBreakpointPresets
  )
)

/**
 * Use these for adjustments outside the pre-defined breakpoints
 *
 * Example:
 *
 * ${fromPx(400)`
 *  display: block;
 * `}
 */
export const fromPx =
  (px: number) => (cssStrings: TemplateStringsArray, breakpointSize: string) =>
    css`
      @media (min-width: ${px}px) {
        ${css(cssStrings, breakpointSize)}
      }
    ` as IBreakpointFunction

/**
 * Media queries targeting Safari browser
 */
export const safariOnly = (cssStrings: TemplateStringsArray) => css`
  @media not all and (min-resolution: 0.001dpcm) {
    @supports (-webkit-appearance: none) {
      ${css(cssStrings)}
    }
  }
`

export const mq = {
  breakpoints,
  from,
  fromPx,
  vendor: {
    safariOnly,
  },
}
