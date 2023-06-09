import { render, screen } from "@testing-library/react"

// Data
import { mockItems } from "../__mocks__/data"

// Utils
import { ShowcaseProvider } from "../Context"

// Components
import ShowcaseProjectList, { Props } from "./ShowcaseProjectList"

describe("ShowcaseProjectList", () => {
  it("renders correctly", () => {
    const mockData: Props = {
      items: mockItems,
    }

    render(
      <ShowcaseProvider>
        <ShowcaseProjectList {...mockData} />
      </ShowcaseProvider>
    )

    expect(
      screen.getAllByRole("button", { name: /Open in modal/i }).length
    ).toBe(4)
    expect(screen.getAllByRole("img").length).toBe(4)
    expect(screen.getAllByRole("link").length).toBe(4)
  })

  it("doesn't render if no items are provided", () => {
    const mockData: Props = {
      items: [],
    }

    const { container } = render(
      <ShowcaseProvider>
        <ShowcaseProjectList {...mockData} />
      </ShowcaseProvider>
    )

    expect(container).toBeEmptyDOMElement()
  })
})
