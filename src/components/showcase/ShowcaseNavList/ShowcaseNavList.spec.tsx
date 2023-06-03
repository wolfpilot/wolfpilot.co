import { render, screen } from "@testing-library/react"

// Data
import { mockItems, mockTags } from "../__mocks__/data"

// Utils
import { ShowcaseProvider } from "../Context"

// Components
import ShowcaseNavList, { Props } from "./ShowcaseNavList"

describe("ShowcaseNavList", () => {
  it("renders correctly", () => {
    const mockData: Props = {
      items: mockItems,
      tags: mockTags,
      activeTag: "featured",
    }

    render(
      <ShowcaseProvider>
        <ShowcaseNavList {...mockData} />
      </ShowcaseProvider>
    )

    expect(screen.getAllByRole("button").length).toBe(5)

    expect(
      screen.getByRole("button", { name: /featured 4/i })
    ).toBeInTheDocument()
    expect(
      screen.getByRole("button", { name: /web development 1/i })
    ).toBeInTheDocument()
    expect(
      screen.getByRole("button", { name: /web design 0/i })
    ).toBeInTheDocument()
    expect(
      screen.getByRole("button", { name: /concept art 0/i })
    ).toBeInTheDocument()
    expect(
      screen.getByRole("button", { name: /illustration 3/i })
    ).toBeInTheDocument()
  })

  it("doesn't render any items if no data is provided", () => {
    const mockData: Props = {
      items: [],
      tags: [],
      activeTag: "featured",
    }

    const { container } = render(
      <ShowcaseProvider>
        <ShowcaseNavList {...mockData} />
      </ShowcaseProvider>
    )

    expect(container).toBeEmptyDOMElement()
  })
})
