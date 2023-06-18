import Link, { LinkProps } from "next/link"

export interface Props extends LinkProps {
  className?: string
  children?: React.ReactNode
}

const InternalLink: React.FC<Props> = ({ className, children, ...props }) => (
  <Link {...props} className={className}>
    {children}
  </Link>
)

export default InternalLink
