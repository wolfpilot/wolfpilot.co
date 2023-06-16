import { render, screen } from "@testing-library/react"

// Assets
import MockImageSrc from "/public/media/graphics/wolf.png"

// Components
import Card from "./Card"

// Setup
const mockData = {
  featuredImg: {
    src: MockImageSrc,
    alt: "Image alt text",
    credits: {
      label: "Photo by myself",
      url: "#",
    },
  },
  heading: "Some random title",
  copy: "Et malesuada fames ac turpis egestas integer eget aliquet nibh. Maecenas volutpat blandit aliquam etiam erat velit.",
}

describe("Card", () => {
  it("renders correctly", () => {
    render(<Card {...mockData} />)

    expect(
      screen.getByRole("img", { name: mockData.featuredImg.alt })
    ).toBeInTheDocument()
    expect(
      screen.getByRole("link", { name: mockData.featuredImg.credits.label })
    ).toBeInTheDocument()
    expect(screen.getByText(mockData.heading)).toBeInTheDocument()
    expect(screen.getByText(mockData.copy)).toBeInTheDocument()
  })
})
