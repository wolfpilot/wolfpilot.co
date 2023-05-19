export const delay = <T>(delay: number, result?: T) => {
  return new Promise((resolve) => setTimeout(() => resolve(result), delay))
}
