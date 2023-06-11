import { NextPage } from "next"

// Data
import { pageData } from "@data/cases/cawr"

// Components
import CaseLayout from "@components/templates/CaseTemplate/CaseTemplate"

const WolfPilotPage: NextPage = () => (
  <CaseLayout {...pageData}>[...] more content to follow.</CaseLayout>
)

export default WolfPilotPage
