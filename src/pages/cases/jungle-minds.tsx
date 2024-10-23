import { NextPage } from "next"

// Data
import { data } from "@data/cases"

// Components
import CaseLayout from "@components/templates/CaseTemplate/CaseTemplate"

const JungleMindsCasePage: NextPage = () => <CaseLayout {...data.jungleMinds} />

export default JungleMindsCasePage
