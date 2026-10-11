import {
  render,
  screen,
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

    expect(screen.getByRole("link", { name: /CAWR/i })).toHaveAttribute(
      "href",
      "/cases/cawr"
    )
    expect(screen.getByRole("link", { name: /RetroCade/i })).toHaveAttribute(
      "href",
      "/cases/retrocade"
    )
    expect(screen.getByRole("link", { name: /Wolf Pilot/i })).toHaveAttribute(
      "href",
      "/cases/wolf-pilot"
    )
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
    await userEvent.click(toggleBtn)

    await screen.findByRole("link", { name: /Some random stuff/i })

    // Show less cases
    await userEvent.click(toggleBtn)

    await waitForElementToBeRemoved(() =>
      screen.queryByRole("link", { name: /Some random stuff/i })
    )
  })
})
