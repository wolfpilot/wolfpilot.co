import { NextPage } from "next"

// Data
import { data } from "@data/cases"

// Components
import CaseLayout from "@components/templates/CaseTemplate/CaseTemplate"

const RetrocadeCasePage: NextPage = () => <CaseLayout {...data.retrocade} />

export default RetrocadeCasePage
