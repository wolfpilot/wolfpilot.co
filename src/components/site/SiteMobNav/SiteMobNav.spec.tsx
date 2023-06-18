import { render, screen, fireEvent } from "@testing-library/react"

// Constants
import { routes } from "@constants/routes"

// Styles
import { breakpoints } from "@styles/utils/mediaQueries"

// Utils
import { updateWindowSize } from "@utils/hooks/useWindowSize.spec"

// Components
import SiteMobNav from "./SiteMobNav"

describe("SiteMobNav", () => {
  it("renders correctly", () => {
    updateWindowSize({
      width: breakpoints.S,
    })

    render(<SiteMobNav />)

    // Check that the logo link is being rendered
    expect(screen.getByRole("link", { name: "Homepage" })).toHaveAttribute(
      "href",
      "/"
    )

    // Check that the toggle is being rendered
    expect(
      screen.getByRole("button", {
        name: "Toggle mobile navigation",
      })
    ).toBeInTheDocument()
  })

  it("shows the nav content when toggle is pressed", async () => {
    updateWindowSize({
      width: breakpoints.S,
    })

    render(<SiteMobNav />)

    const toggleButton = screen.getByRole("button", {
      name: "Toggle mobile navigation",
    })

    // Check that the links are not rendered initially
    Object.keys(routes).forEach((key) => {
      const { label } = routes[key]

      expect(screen.queryByRole("link", { name: label })).not.toBeVisible()
    })

    // Fire ze interaction!
    fireEvent.click(toggleButton)

    // Check that the links are now rendered as expected
    await Promise.all(
      Object.keys(routes).map((key) =>
        screen.findByRole("link", { name: routes[key].label })
      )
    )
  })
})
