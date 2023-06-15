/**
 * Format number to the same digits as a given target. Ex:
 *
 * target 182 => 000 format
 * value 5    => 005
 * value 16   => 016
 * value 101  => 101
 */
export const prefixLeadingZeroes = (target: number, value: number): string => {
  const totalDigitsAmount = target.toString().length

  return String(value).padStart(totalDigitsAmount, "0")
}

/**
 * Format dashed string to camelCase and no dashes. Ex:
 *
 * i-am-batman => iAmBatman
 */
export const dashToCamel = (value: string) =>
  value.replace(/(\-[a-z])/g, (word) => word.toUpperCase().replace("-", ""))
