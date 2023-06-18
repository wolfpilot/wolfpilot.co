import { usePathname } from "next/navigation"
import Link, { LinkProps } from "next/link"

export interface Props extends LinkProps {
  className?: string
  children?: React.ReactNode
}

const InternalLink: React.FC<Props> = ({ className, children, ...props }) => {
  const routerPathname = usePathname()

  const linkPathname = props.href
    .toString()
    .replace(/#[^#]*$/, "")
    .replace(/\?[^\?]*$/, "")
    .replace(/^https:/, "http:")

  /**
   * Due to the page transition, we need to split up the links into:
   *
   * Scrollable: links leading to the same page, such as clicking on
   * the logo and thus scrolling to the top of the page.
   *
   * Non-Scrollable: links leading to other pages that first have to
   * be delayed to allow enough time for page transition to occur
   *
   * This behaviour is further enhanced by the PageTransitionUI
   */
  const shouldScroll = linkPathname === routerPathname

  return (
    <Link {...props} className={className} scroll={shouldScroll}>
      {children}
    </Link>
  )
}

export default InternalLink
