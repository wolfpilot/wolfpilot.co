export type RouteType = "internal" | "external"

export interface Route extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  label: string
  type?: RouteType
}

export type Routes = Record<string, Route>
