// Types
import { SliceType } from "@data/cases"

// Components
import ImageSlice from "@components/slices/ImageSlice/ImageSlice"
import TextBlockSlice from "@components/slices/TextBlockSlice/TextBlockSlice"

export interface Props {
  slice: SliceType
}

const Slice: React.FC<Props> = ({ slice }) => {
  switch (slice.type) {
    case "image":
      return <ImageSlice {...slice.data} />
    case "textBlock":
      return <TextBlockSlice {...slice.data} />
    default:
      return null
  }
}

export default Slice
