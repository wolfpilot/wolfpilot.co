export interface Route {
  label: string
  url: string
}

export type Routes = Record<string, Route>

export const routes: Routes = {
  work: {
    label: "Work",
    url: "/#work",
  },
  about: {
    label: "About",
    url: "/#about",
  },
  cases: {
    label: "Cases",
    url: "/#cases",
  },
  experience: {
    label: "Experience",
    url: "/#experience",
  },
  contact: {
    label: "Contact",
    url: "/#contact",
  },
  resume: {
    label: "Résumé",
    url: "/resume.pdf",
  },
}
