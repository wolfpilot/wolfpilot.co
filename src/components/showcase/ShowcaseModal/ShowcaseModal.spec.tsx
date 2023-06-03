import {
  render,
  screen,
  waitFor,
  waitForElementToBeRemoved,
} from "@testing-library/react"
import userEvent from "@testing-library/user-event"

// Data
import { mockItems } from "../__mocks__/data"

// Utils
import { ShowcaseProvider, State as ContextState } from "../Context"

// Components
import ShowcaseModal from "./ShowcaseModal"

describe("ShowcaseModal", () => {
  it("renders correctly", () => {
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

    expect(
      screen.getByRole("heading", { name: mockItems[0].name })
    ).toBeInTheDocument()
    expect(
      screen.getByRole("img", { name: mockItems[0].image.alt })
    ).toBeInTheDocument()
    expect(
      screen.getByRole("link", { name: "View on github.com" })
    ).toBeInTheDocument()
    expect(screen.getByRole("button", { name: /Close/i })).toBeInTheDocument()
    expect(
      screen.getByRole("button", { name: /View previous project/i })
    ).toBeInTheDocument()
    expect(
      screen.getByRole("button", { name: /View next project/i })
    ).toBeInTheDocument()
  })

  it("doesn't render if data is missing or null", () => {
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

    expect(container).toBeEmptyDOMElement()
  })

  it("doesn't render if no data is provided", () => {
    const { container } = render(
      <ShowcaseProvider>
        <ShowcaseModal />
      </ShowcaseProvider>
    )

    expect(container).toBeEmptyDOMElement()
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
    userEvent.click(closeBtn)

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

    userEvent.keyboard("{Escape}")

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
    expect(
      screen.queryByRole("button", { name: /Zoom out/i })
    ).not.toBeInTheDocument()

    // Click to zoom in
    userEvent.click(screen.getByRole("button", { name: /Zoom in/i }))

    // Check that there's no zoom in button after zooming in
    await waitForElementToBeRemoved(() =>
      screen.queryByRole("button", { name: /Zoom in/i })
    )

    // Click to zoom back out
    userEvent.click(screen.getByRole("button", { name: /Zoom out/i }))

    // Check that there's no zoom out button after zooming out
    await waitForElementToBeRemoved(() =>
      screen.queryByRole("button", { name: /Zoom out/i })
    )
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
    expect(
      screen.getByRole("heading", { name: mockItems[0].name })
    ).toBeInTheDocument()
    expect(
      screen.getByRole("img", { name: mockItems[0].image.alt })
    ).toBeInTheDocument()
    expect(screen.getByText(mockItems[0].tagline)).toBeInTheDocument()

    // Click to see the next project
    userEvent.click(nextBtn)

    await waitForElementToBeRemoved(() =>
      screen.queryByRole("img", { name: mockItems[0].image.alt })
    )

    // Check that the next content is shown
    expect(
      screen.getByRole("heading", { name: mockItems[1].name })
    ).toBeInTheDocument()
    expect(
      screen.getByRole("img", { name: mockItems[1].image.alt })
    ).toBeInTheDocument()
    expect(screen.getByText(mockItems[1].tagline)).toBeInTheDocument()

    // Click to see the previous project
    userEvent.click(prevBtn)
    await waitForElementToBeRemoved(() =>
      screen.queryByRole("img", { name: mockItems[1].image.alt })
    )

    // Click to see the previous project
    userEvent.click(prevBtn)

    await waitForElementToBeRemoved(() =>
      screen.queryByRole("img", { name: mockItems[0].image.alt })
    )

    // Check that the content has looped around to the last item
    expect(
      screen.getByRole("heading", {
        name: mockItems[mockItems.length - 1].name,
      })
    ).toBeInTheDocument()
    expect(
      screen.getByRole("img", {
        name: mockItems[mockItems.length - 1].image.alt,
      })
    ).toBeInTheDocument()
    expect(
      screen.getByText(mockItems[mockItems.length - 1].tagline)
    ).toBeInTheDocument()
  })
})
