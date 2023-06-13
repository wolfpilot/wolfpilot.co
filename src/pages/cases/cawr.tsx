import { NextPage } from "next"

// Data
import { pageData } from "@data/cases/cawr"

// Components
import CaseLayout from "@components/templates/CaseTemplate/CaseTemplate"

const CawrCasePage: NextPage = () => <CaseLayout {...pageData} />

export default CawrCasePage
