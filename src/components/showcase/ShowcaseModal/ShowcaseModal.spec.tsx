import { fireEvent, render, screen, waitFor } from "@testing-library/react"
import userEvent from "@testing-library/user-event"

// Data
import { mockItems } from "../__mocks__/data"

// Utils
import { ShowcaseProvider, State as ContextState } from "../Context"

// Components
import ShowcaseModal from "./ShowcaseModal"

const videoItem = {
  ...mockItems[0],
  video: "/media/showcase/up-n-running/up-n-running.mp4",
}
const videoItems = [videoItem, ...mockItems.slice(1)]

describe("ShowcaseModal", () => {
  afterEach(() => jest.restoreAllMocks())

  it("renders correctly", async () => {
    const mockContextState: ContextState = {
      activeTag: "featured",
      activeItems: mockItems,
      activeItemIndex: 0,
    }

    render(
      <ShowcaseProvider initialState={mockContextState}>
        <ShowcaseModal />
      </ShowcaseProvider>
    )

    await screen.findByRole("heading", { name: mockItems[0].name })
    await screen.findByRole("img", { name: mockItems[0].image.alt })
    const externalLink = screen.getByRole("link", { hidden: true })
    expect(externalLink).toHaveAttribute(
      "href",
      "https://github.com/wolfpilot/up-n-running-gulp-boilerplate"
    )
    await screen.findByRole("button", { name: /Close/i })
    await screen.findByRole("button", { name: /View previous project/i })
    await screen.findByRole("button", { name: /View next project/i })
  })

  it("doesn't render if data is missing or null", async () => {
    const mockContextState: ContextState = {
      activeTag: "featured",
      activeItems: null,
      activeItemIndex: null,
    }

    const { container } = render(
      <ShowcaseProvider initialState={mockContextState}>
        <ShowcaseModal />
      </ShowcaseProvider>
    )

    await waitFor(() => expect(container).toBeEmptyDOMElement())
  })

  it("doesn't render if no data is provided", async () => {
    const { container } = render(
      <ShowcaseProvider>
        <ShowcaseModal />
      </ShowcaseProvider>
    )

    await waitFor(() => expect(container).toBeEmptyDOMElement())
  })

  it("collapses the modal when clicking on the close button", async () => {
    const mockContextState: ContextState = {
      activeTag: "featured",
      activeItems: mockItems,
      activeItemIndex: 0,
    }

    const { container } = render(
      <ShowcaseProvider initialState={mockContextState}>
        <ShowcaseModal />
      </ShowcaseProvider>
    )

    const closeBtn = screen.getByRole("button", { name: /Close/i })
    await userEvent.click(closeBtn)

    await waitFor(() => expect(container).toBeEmptyDOMElement())
  })

  it("collapses the modal when pressing the ESC key", async () => {
    const mockContextState: ContextState = {
      activeTag: "featured",
      activeItems: mockItems,
      activeItemIndex: 0,
    }

    const { container } = render(
      <ShowcaseProvider initialState={mockContextState}>
        <ShowcaseModal />
      </ShowcaseProvider>
    )

    await userEvent.keyboard("{Escape}")

    await waitFor(() => expect(container).toBeEmptyDOMElement())
  })

  it("switches between the zoom in and out buttons on click", async () => {
    const mockContextState: ContextState = {
      activeTag: "featured",
      activeItems: mockItems,
      activeItemIndex: 0,
    }

    render(
      <ShowcaseProvider initialState={mockContextState}>
        <ShowcaseModal />
      </ShowcaseProvider>
    )

    // Check that there's no zoom out button initially
    await waitFor(() =>
      expect(
        screen.queryByRole("button", { name: /Zoom out/i })
      ).not.toBeInTheDocument()
    )

    // Click to zoom in
    await userEvent.click(screen.getByRole("button", { name: /Zoom in/i }))

    // Check that there's no zoom in button after zooming in
    await waitFor(() =>
      expect(
        screen.queryByRole("button", { name: /Zoom in/i })
      ).not.toBeInTheDocument()
    )

    // Click to zoom back out
    await userEvent.click(screen.getByRole("button", { name: /Zoom out/i }))

    // Check that there's no zoom out button after zooming out
    await waitFor(() =>
      expect(
        screen.queryByRole("button", { name: /Zoom out/i })
      ).not.toBeInTheDocument()
    )
  })

  it("shows a video poster and starts muted playback with controls only on click", async () => {
    const play = jest
      .spyOn(HTMLMediaElement.prototype, "play")
      .mockResolvedValue(undefined)
    const mockContextState: ContextState = {
      activeTag: "featured",
      activeItems: videoItems,
      activeItemIndex: 0,
    }

    render(
      <ShowcaseProvider initialState={mockContextState}>
        <ShowcaseModal />
      </ShowcaseProvider>
    )

    const video = screen.getByLabelText(`${videoItem.name} video`)
    const playButton = screen.getByRole("button", {
      name: `Play ${videoItem.name} video`,
    })

    expect(
      screen.getByRole("img", { name: videoItem.image.alt })
    ).toBeInTheDocument()
    expect(video).toHaveAttribute("src", videoItem.video)
    expect(video).toHaveAttribute("poster", videoItem.image.src as string)
    expect(video).not.toHaveAttribute("autoplay")
    expect(video).toHaveAttribute("loop")
    expect(video).not.toHaveAttribute("controls")
    expect((video as HTMLVideoElement).muted).toBe(true)
    expect(play).not.toHaveBeenCalled()
    expect(getComputedStyle(playButton).visibility).toBe("visible")
    expect(screen.queryByRole("button", { name: "Zoom in" })).toBeNull()

    await userEvent.click(playButton)

    expect(play).toHaveBeenCalledTimes(1)
    expect(video).toHaveAttribute("controls")
    expect(getComputedStyle(playButton).visibility).toBe("hidden")
  })

  it("pauses video when changing projects or closing the modal", async () => {
    jest.spyOn(HTMLMediaElement.prototype, "play").mockResolvedValue(undefined)
    const pause = jest
      .spyOn(HTMLMediaElement.prototype, "pause")
      .mockImplementation(() => {})
    const mockContextState: ContextState = {
      activeTag: "featured",
      activeItems: videoItems,
      activeItemIndex: 0,
    }

    render(
      <ShowcaseProvider initialState={mockContextState}>
        <ShowcaseModal />
      </ShowcaseProvider>
    )

    await userEvent.click(
      screen.getByRole("button", { name: `Play ${videoItem.name} video` })
    )
    await userEvent.click(
      screen.getByRole("button", { name: "View next project" })
    )

    expect(pause).toHaveBeenCalledTimes(1)
    await screen.findByRole("heading", { name: mockItems[1].name })
    expect(screen.getByRole("button", { name: "Zoom in" })).toBeInTheDocument()

    await userEvent.click(
      screen.getByRole("button", { name: "View previous project" })
    )
    await screen.findByRole("button", {
      name: `Play ${videoItem.name} video`,
    })
    await userEvent.click(
      screen.getByRole("button", { name: `Play ${videoItem.name} video` })
    )
    await userEvent.click(screen.getByRole("button", { name: "Close" }))

    expect(pause).toHaveBeenCalledTimes(2)
  })

  it("falls back to the zoomable image when video loading fails", async () => {
    jest.spyOn(HTMLMediaElement.prototype, "pause").mockImplementation(() => {})
    const mockContextState: ContextState = {
      activeTag: "featured",
      activeItems: videoItems,
      activeItemIndex: 0,
    }

    render(
      <ShowcaseProvider initialState={mockContextState}>
        <ShowcaseModal />
      </ShowcaseProvider>
    )

    fireEvent.error(screen.getByLabelText(`${videoItem.name} video`))

    const zoomButton = await screen.findByRole("button", { name: "Zoom in" })
    await userEvent.click(zoomButton)

    expect(screen.getByRole("button", { name: "Zoom out" })).toBeInTheDocument()
  })

  it("navigates between projects when clicking the arrows", async () => {
    const mockContextState: ContextState = {
      activeTag: "featured",
      activeItems: mockItems,
      activeItemIndex: 0,
    }

    render(
      <ShowcaseProvider initialState={mockContextState}>
        <ShowcaseModal />
      </ShowcaseProvider>
    )

    const nextBtn = screen.getByRole("button", { name: /View next project/i })
    const prevBtn = screen.getByRole("button", {
      name: /View previous project/i,
    })

    // Check that the initial contents are shown
    await screen.findByRole("heading", { name: mockItems[0].name })
    await screen.findByRole("img", { name: mockItems[0].image.alt })
    await screen.findByText(mockItems[0].tagline)

    // Click to see the next project
    await userEvent.click(nextBtn)
    await waitFor(() =>
      expect(
        screen.queryByRole("img", { name: mockItems[0].image.alt })
      ).not.toBeInTheDocument()
    )

    // Check that the next content is shown
    await screen.findByRole("heading", { name: mockItems[1].name })
    await screen.findByRole("img", { name: mockItems[1].image.alt })
    await screen.findByText(mockItems[1].tagline)

    // Click to see the previous project
    await userEvent.click(prevBtn)
    await waitFor(() =>
      expect(
        screen.queryByRole("img", { name: mockItems[1].image.alt })
      ).not.toBeInTheDocument()
    )

    // Click to see the previous project
    await userEvent.click(prevBtn)
    await waitFor(() =>
      expect(
        screen.queryByRole("img", { name: mockItems[0].image.alt })
      ).not.toBeInTheDocument()
    )

    // Check that the content has looped around to the last item
    await screen.findByRole("heading", {
      name: mockItems[mockItems.length - 1].name,
    })
    await screen.findByRole("img", {
      name: mockItems[mockItems.length - 1].image.alt,
    })
    await screen.findByText(mockItems[mockItems.length - 1].tagline)
  })
})
