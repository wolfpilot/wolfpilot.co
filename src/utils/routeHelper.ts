// Types
import { RouteType } from "@ts/routes"

export const getDomain = (url: string): string => {
  const urlObj = new URL(url)
  const hostname = urlObj.hostname

  // Trim any subdomains
  return hostname.split(".").slice(-2).join(".")
}

export const getLinkType = (url: string): RouteType =>
  url.includes("://") ? "external" : "internal"
