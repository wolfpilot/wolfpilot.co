import { NextPage } from "next"

// Data
import { data } from "@data/cases"

// Components
import CaseLayout from "@components/templates/CaseTemplate/CaseTemplate"

const CawrCasePage: NextPage = () => <CaseLayout {...data.cawr} />

export default CawrCasePage
