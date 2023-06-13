import { NextPage } from "next"

// Data
import { pageData } from "@data/cases/retrocade"

// Components
import CaseLayout from "@components/templates/CaseTemplate/CaseTemplate"

const RetrocadeCasePage: NextPage = () => <CaseLayout {...pageData} />

export default RetrocadeCasePage
