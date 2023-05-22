// Constants
import { DISABLE_SCROLL_CLASSNAME } from "@/constants/dom"

/**
 * Check if scripts are running on the client or server-side
 */
export const isClient = typeof window !== "undefined"

/**
 * Why not set the overflow style directly?
 *
 * Well, if there are existing default, such as "overflow-x: hidden"
 * they would be overriden by a generic "auto"
 */
export const disableScroll = (elem: HTMLElement, value: boolean) => {
  value
    ? elem.classList.add(DISABLE_SCROLL_CLASSNAME)
    : elem.classList.remove(DISABLE_SCROLL_CLASSNAME)
}
