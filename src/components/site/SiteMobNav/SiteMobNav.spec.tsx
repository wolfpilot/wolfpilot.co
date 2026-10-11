import { render, screen, fireEvent, waitFor } from "@testing-library/react"

// Constants
import { routes } from "@constants/routes"

// Styles
import { breakpoints } from "@styles/utils/mediaQueries"

// Utils
import { updateWindowSize } from "@utils/hooks/useWindowSize.spec"

// Components
import SiteMobNav, { Props } from "./SiteMobNav"

// Setup
const mockProps: Props = {
  scrollYDirection: null,
}

describe("SiteMobNav", () => {
  it("renders correctly", () => {
    updateWindowSize({
      width: breakpoints.S,
    })

    render(<SiteMobNav {...mockProps} />)

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

    render(<SiteMobNav {...mockProps} />)

    const toggleButton = screen.getByRole("button", {
      name: "Toggle mobile navigation",
    })

    // Check that the links are not rendered initially
    Object.keys(routes).forEach((key) => {
      const { label } = routes[key]

      expect(screen.getByText(label)).not.toBeVisible()
    })

    // Fire ze interaction!
    fireEvent.click(toggleButton)

    // Check that the links are now rendered as expected
    await waitFor(() => {
      Object.keys(routes).forEach((key) => {
        const { label, href } = routes[key]
        const link = screen.getByRole("link", { name: label })

        expect(link).toBeVisible()
        expect(link).toHaveAttribute("href", href)
      })
    })
  })
})
