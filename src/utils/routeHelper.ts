// Types
import { RouteType } from "@ts/routes"

export const getDomain = (href: string): string => {
  const urlObj = new URL(href)
  const hostname = urlObj.hostname

  // Trim any subdomains
  return hostname.split(".").slice(-2).join(".")
}

export const getLinkType = (href: string): RouteType =>
  href.includes("://") ? "external" : "internal"
