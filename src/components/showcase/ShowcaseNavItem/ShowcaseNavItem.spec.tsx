import { render, screen } from "@testing-library/react"

// Utils
import { ShowcaseProvider } from "../Context"

// Components
import ShowcaseNavItem, { Props } from "./ShowcaseNavItem"

describe("ShowcaseNavItem", () => {
  it("renders correctly", async () => {
    const mockData: Props = {
      tag: "featured",
      isActive: false,
      taggedItemsAmount: 4,
    }

    render(
      <ShowcaseProvider>
        <ShowcaseNavItem {...mockData} />
      </ShowcaseProvider>
    )

    const button = screen.getByRole("button", { name: /featured 4/i })

    expect(button).toBeInTheDocument()
  })

  it("doesn't render if data is missing", async () => {
    const mockData: any = {
      tag: "",
      isActive: false,
      taggedItemsAmount: 4,
    }

    const { container } = render(
      <ShowcaseProvider>
        <ShowcaseNavItem {...mockData} />
      </ShowcaseProvider>
    )

    expect(container).toBeEmptyDOMElement()
  })
})
