import { render, screen } from "@testing-library/react"

// Data
import { mockItems } from "../__mocks__/data"

// Utils
import { ShowcaseProvider } from "../Context"

// Components
import ShowcaseProjectItem, { Props } from "./ShowcaseProjectItem"

describe("ShowcaseProjectItem", () => {
  it("renders correctly", () => {
    const mockData: Props = {
      index: 0,
      data: mockItems[0],
    }

    render(
      <ShowcaseProvider>
        <ShowcaseProjectItem {...mockData} />
      </ShowcaseProvider>
    )

    expect(
      screen.getByRole("heading", { name: mockItems[0].name })
    ).toBeInTheDocument()
    expect(screen.getByText(mockItems[0].tagline)).toBeInTheDocument()
    expect(screen.getByAltText(mockItems[0].image.alt)).toBeInTheDocument()
    expect(
      screen.getByRole("button", { name: /Open in modal/i })
    ).toBeInTheDocument()
    expect(
      screen.getByRole("link", { name: /github.com/i })
    ).toBeInTheDocument()
  })

  it("doesn't render if no data is provided", () => {
    const mockData: any = {}

    const { container } = render(
      <ShowcaseProvider>
        <ShowcaseProjectItem {...mockData} />
      </ShowcaseProvider>
    )

    expect(container).toBeEmptyDOMElement()
  })

  it("doesn't render if data is missing", () => {
    const mockData: any = {
      index: 0,
      data: {
        id: "",
        name: "",
        tagline: "",
        tags: [],
        alt: "",
        links: [
          {
            label: "",
            url: "",
            type: "",
          },
        ],
        thumb: {
          src: "",
          width: 0,
          height: 0,
          alt: "",
        },
        image: {
          src: "",
          width: 0,
          height: 0,
          alt: "",
        },
      },
    }

    const { container } = render(
      <ShowcaseProvider>
        <ShowcaseProjectItem {...mockData} />
      </ShowcaseProvider>
    )

    expect(container).toBeEmptyDOMElement()
  })
})
