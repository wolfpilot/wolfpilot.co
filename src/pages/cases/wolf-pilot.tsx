import { NextPage } from "next"

// Data
import { pageData } from "@data/cases/wolfPilot"

// Components
import CaseLayout from "@components/templates/CaseTemplate/CaseTemplate"

const WolfPilotCasePage: NextPage = () => <CaseLayout {...pageData} />

export default WolfPilotCasePage
