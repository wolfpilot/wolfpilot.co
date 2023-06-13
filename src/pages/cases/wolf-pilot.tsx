import { NextPage } from "next"

// Data
import { data } from "@data/cases"

// Components
import CaseLayout from "@components/templates/CaseTemplate/CaseTemplate"

const WolfPilotCasePage: NextPage = () => <CaseLayout {...data.wolfPilot} />

export default WolfPilotCasePage
