// Types
import { SliceType } from "@data/cases"

// Components
import ImageSlice from "@components/slices/ImageSlice/ImageSlice"
import FigureSlice from "@components/slices/FigureSlice/FigureSlice"
import VideoSlice from "@components/slices/VideoSlice/VideoSlice"
import TextBlockSlice from "@components/slices/TextBlockSlice/TextBlockSlice"

export interface Props {
  slice: SliceType
}

const Slice: React.FC<Props> = ({ slice }) => {
  switch (slice.type) {
    case "image":
      return <ImageSlice {...slice.data} />
    case "figure":
      return <FigureSlice {...slice.data} />
    case "video":
      return <VideoSlice {...slice.data} />
    case "textBlock":
      return <TextBlockSlice {...slice.data} />
    default:
      return null
  }
}

export default Slice
