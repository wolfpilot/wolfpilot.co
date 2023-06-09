import { render, screen } from "@testing-library/react"

// Data
import { mockItems } from "./__mocks__/data"

// Components
import Timeline, { Props } from "./Timeline"

window.scrollTo = jest.fn()

describe("Timeline", () => {
  it("renders correctly", async () => {
    const mockData: Props = {
      items: mockItems,
    }

    render(<Timeline {...mockData} />)

    // Check that the first item is visible by default
    expect(
      screen.getByText(
        "Tech Lead for clients such as Tom Holkenborg, Leading Courses (BETA), Rouze and PON Automotive",
        { exact: false }
      )
    ).toBeVisible()

    // Check that other items are hidden by default
    expect(
      screen.getByText(
        "Lead Front-End Developer in charge of building user dashboard for employment mediator Brunel International.",
        { exact: false }
      )
    ).not.toBeVisible()
  })
})
