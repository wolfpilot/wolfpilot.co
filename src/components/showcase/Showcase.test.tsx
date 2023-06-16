import {
  render,
  screen,
  waitFor,
  waitForElementToBeRemoved,
} from "@testing-library/react"
import userEvent from "@testing-library/user-event"

// Types
import { Tag } from "./types"

// Data
import { mockItems } from "./__mocks__/data"

// Utils
import { ShowcaseProvider } from "./Context"

// Components
import Showcase, { Props as ShowcaseProps } from "./Showcase"
import ShowcaseModal from "./ShowcaseModal/ShowcaseModal"

const checkForActiveItems = (tag: Tag) => {
  const activeItems = mockItems.filter((item) => item.tags.includes(tag))

  activeItems.forEach((item) => {
    expect(screen.getByRole("heading", { name: item.name })).toBeInTheDocument()
    expect(
      screen.getByRole("img", { name: item.image.alt })
    ).toBeInTheDocument()
  })
}

describe("Showcase", () => {
  it("shows the correct projects when clicking on different tags", async () => {
    const mockData: ShowcaseProps = {
      items: mockItems,
    }

    render(
      <ShowcaseProvider>
        <Showcase {...mockData} />
      </ShowcaseProvider>
    )

    // Check that Featured projects are shown by default
    checkForActiveItems("featured")

    // Change the active tag
    userEvent.click(screen.getByRole("button", { name: /web development 1/i }))

    await waitFor(() => {
      checkForActiveItems("web development")
    })

    // Change the active tag
    userEvent.click(screen.getByRole("button", { name: /web design 0/i }))

    await waitFor(() => {
      checkForActiveItems("web design")
    })

    // Change the active tag
    userEvent.click(screen.getByRole("button", { name: /concept art 0/i }))

    await waitFor(() => {
      checkForActiveItems("concept art")
    })

    // Change the active tag
    userEvent.click(screen.getByRole("button", { name: /illustration 3/i }))

    await waitFor(() => {
      checkForActiveItems("illustration")
    })

    // Check that Featured projects are shown by default
    checkForActiveItems("featured")

    // Change the active tag
    userEvent.click(screen.getByRole("button", { name: /featured 4/i }))
  })

  it("opens the modal when clicking on a project's image", async () => {
    const mockData: ShowcaseProps = {
      items: mockItems,
    }

    render(
      <ShowcaseProvider>
        <ShowcaseModal />
        <Showcase {...mockData} />
      </ShowcaseProvider>
    )

    // Check that Featured projects are shown by default
    checkForActiveItems("featured")

    // Change the active tag
    userEvent.click(screen.getByRole("button", { name: /illustration 3/i }))

    await waitFor(() => {
      checkForActiveItems("illustration")
    })

    // Click on a project image
    userEvent.click(
      screen.getAllByRole("button", { name: /Open in modal/i })[1]
    )

    // Checxk that the modal's open
    await Promise.all([
      screen.findByRole("button", { name: /View previous project/i }),
      screen.findByRole("button", { name: /View next project/i }),
    ])

    // Close modal via keyboard
    userEvent.keyboard("{Escape}")

    // Check that the modal's closed
    await waitForElementToBeRemoved(() =>
      screen.queryByRole("button", { name: /View previous project/i })
    )
  })
})
