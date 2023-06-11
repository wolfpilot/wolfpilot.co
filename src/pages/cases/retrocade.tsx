import { NextPage } from "next"

// Data
import { pageData } from "@data/cases/retrocade"

// Components
import CaseLayout from "@components/templates/CaseTemplate/CaseTemplate"

const WolfPilotPage: NextPage = () => (
  <CaseLayout meta={pageData.meta}>[...] more content to follow.</CaseLayout>
)

export default WolfPilotPage
