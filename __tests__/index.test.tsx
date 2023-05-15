import { render, screen } from "@testing-library/react"
import Home from "../src/app/page"

describe("Home", () => {
  it("renders a button", () => {
    render(<Home />)

    const button = screen.getByRole("button", {
      name: "test",
    })

    expect(button).toBeInTheDocument()
  })
})
