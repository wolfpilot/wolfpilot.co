export type RouteType = "internal" | "external"

export interface Route {
  label: string
  url: string
  type?: RouteType
}

export type Routes = Record<string, Route>
