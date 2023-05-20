"use client"

export interface Props {
  children?: React.ReactNode
}

const PageTransitionUI: React.FC<Props> = ({ children }: Props) => (
  <div>{children}</div>
)

export default PageTransitionUI
