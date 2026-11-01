import { fireEvent, render, screen } from "@testing-library/react"

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

    expect(screen.getByText(mockItems[0].name)).toBeInTheDocument()
    expect(screen.getByText(mockItems[0].tagline)).toBeInTheDocument()
    expect(screen.getByAltText(mockItems[0].image.alt)).toBeInTheDocument()
    expect(screen.queryByTestId("showcase-thumbnail-video")).toBeNull()
    expect(
      screen.getByRole("button", { name: /Open in modal/i })
    ).toBeInTheDocument()
    expect(
      screen.getByRole("link", { name: /github.com/i })
    ).toBeInTheDocument()
  })

  it("autoplays a muted, looping thumbnail video and reveals it after loading", () => {
    const data = {
      ...mockItems[0],
      thumbVideo: "/media/showcase/up-n-running/up-n-running--thumb.mp4",
    }
    render(
      <ShowcaseProvider>
        <ShowcaseProjectItem index={0} data={data} />
      </ShowcaseProvider>
    )

    const video = screen.getByTestId(
      "showcase-thumbnail-video"
    ) as HTMLVideoElement

    expect(video).toHaveAttribute("src", data.thumbVideo)
    expect(video).toHaveAttribute("poster", data.thumb.src as string)
    expect(video).toHaveAttribute("autoplay")
    expect(video).toHaveAttribute("loop")
    expect(video.muted).toBe(true)
    expect(video).toHaveAttribute("playsinline")
    expect(screen.queryByAltText(data.thumb.alt as string)).toBeNull()
    expect(getComputedStyle(video).transform).toBe("scale(1.25)")

    fireEvent.loadedData(video)

    expect(getComputedStyle(video).transform).toBe("scale(1)")
    expect(
      screen.getByRole("button", { name: /Open in modal/i })
    ).toBeInTheDocument()
  })

  it("falls back to the thumbnail image when video loading fails", () => {
    const data = {
      ...mockItems[0],
      thumbVideo: "/media/showcase/up-n-running/up-n-running--thumb.mp4",
    }
    render(
      <ShowcaseProvider>
        <ShowcaseProjectItem index={0} data={data} />
      </ShowcaseProvider>
    )

    fireEvent.error(screen.getByTestId("showcase-thumbnail-video"))

    expect(screen.queryByTestId("showcase-thumbnail-video")).toBeNull()
    const image = screen.getByAltText(data.thumb.alt as string)
    expect(image).toBeInTheDocument()
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
