import { render, screen } from "@testing-library/react"

// Constants
import { routes } from "@constants/routes"

// Components
import SiteDeskNav from "./SiteDeskNav"

describe("SiteDeskNav", () => {
  it("renders correctly", () => {
    render(<SiteDeskNav />)

    // Check that the logo link is being rendered
    expect(screen.getByRole("link", { name: "Homepage" })).toHaveAttribute(
      "href",
      "/"
    )

    // Check that the links are being rendered
    Object.keys(routes).forEach((key) => {
      const { label } = routes[key]

      expect(screen.getByRole("link", { name: label })).toBeInTheDocument()
    })
  })
})
