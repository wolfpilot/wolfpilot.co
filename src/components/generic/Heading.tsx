export type HeadingTypes = "h1" | "h2" | "h3" | "h4" | "h5" | "h6"

export interface IProps {
  level: HeadingTypes
  className?: string
  children?: React.ReactNode
}

const Heading: React.FC<IProps> = ({ className, children, level }) => {
  /**
   * Infer the correct heading tag automatically
   * ex: level h2 => <H2>...</H2>
   */
  const Tag = level

  return <Tag className={className}>{children}</Tag>
}

export default Heading
