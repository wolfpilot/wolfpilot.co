import { NextPage } from "next"

// Data
import { pageData } from "@data/cases/cawr"

// Components
import CaseLayout from "./"

const WolfPilotPage: NextPage = () => (
  <CaseLayout meta={pageData.meta}>[...] more content to follow.</CaseLayout>
)

export default WolfPilotPage
