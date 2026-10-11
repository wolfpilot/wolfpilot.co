import {
  render,
  screen,
  waitForElementToBeRemoved,
  within,
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

    const list = screen.getByRole("list", { hidden: true })
    expect(list).not.toHaveAttribute("variants")
    expect(list).not.toHaveAttribute("initial")
    expect(list).not.toHaveAttribute("animate")
    expect(list).not.toHaveAttribute("exit")

    const links = within(list).getAllByRole("link", { hidden: true })
    expect(links).toHaveLength(3)
    expect(links[0]).toHaveAttribute("href", "/cases/cawr")
    expect(links[1]).toHaveAttribute("href", "/cases/retrocade")
    expect(links[2]).toHaveAttribute("href", "/cases/wolf-pilot")
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

    const toggleBtn = screen.getByRole("button", { hidden: true })

    // Show all cases
    await userEvent.click(toggleBtn)

    await screen.findByText("Some random stuff")

    // Show less cases
    await userEvent.click(toggleBtn)

    await waitForElementToBeRemoved(() =>
      screen.queryByText("Some random stuff")
    )
  })
})
