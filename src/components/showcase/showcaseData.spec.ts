import { GetStaticPropsContext } from "next"

// Data
import { getStaticProps } from "@pages/index"

jest.mock("image-size", () => jest.fn(() => ({ width: 100, height: 100 })))

describe("Showcase data", () => {
  it("automatically includes thumbnail videos when a matching file exists", async () => {
    const result = await getStaticProps({} as GetStaticPropsContext)

    if (!("props" in result)) {
      throw new Error("Expected homepage props")
    }

    const { pageData } = await result.props
    const items = pageData.work.showcase.items

    expect(items.find((item) => item.id === "boids")?.thumbVideo).toBe(
      "/media/showcase/boids/boids--thumb.mp4"
    )
    expect(items.find((item) => item.id === "up-n-running")).not.toHaveProperty(
      "thumbVideo"
    )
  })
})
