import {
  render,
  screen,
  waitFor,
  waitForElementToBeRemoved,
} from "@testing-library/react"
import userEvent from "@testing-library/user-event"

// Data
import { mockItems } from "./__mocks__/data"

// Components
import Cases, { Props } from "./Cases"

describe("Cases", () => {
  it("renders correctly", () => {
    const mockData: Props = {
      items: mockItems,
    }

    render(<Cases {...mockData} />)

    expect(
      screen.getByRole("link", { name: /01 CAWR commercial/i })
    ).toBeInTheDocument()
    expect(
      screen.getByRole("link", { name: /02 RetroCade personal/i })
    ).toBeInTheDocument()
    expect(
      screen.getByRole("link", { name: /03 Wolf Pilot personal/i })
    ).toBeInTheDocument()
  })

  it("doesn't render if data is missing or incomplete", () => {
    const mockData: Props = {
      items: [],
    }

    const { container } = render(<Cases {...mockData} />)

    expect(container).toBeEmptyDOMElement()
  })

  it("toggles hidden items when clicking on the button", async () => {
    const mockData: Props = {
      items: [
        ...mockItems,
        {
          id: "extra",
          title: "Some random stuff",
          category: "personal",
        },
      ],
    }

    render(<Cases {...mockData} />)

    const toggleBtn = screen.getByRole("button")

    // Show all cases
    userEvent.click(toggleBtn)

    await waitFor(() =>
      screen.findByRole("link", { name: /04 Some random stuff personal/ })
    )

    // Show less cases
    userEvent.click(toggleBtn)

    await waitForElementToBeRemoved(() =>
      screen.queryByRole("link", { name: /04 Some random stuff personal/ })
    )
  })
})
