import { NextPage } from "next"

// Data
import { data } from "@data/cases"

// Components
import CaseLayout from "@components/templates/CaseTemplate/CaseTemplate"

const TomHolkenborgCasePage: NextPage = () => (
  <CaseLayout {...data.tomHolkenborg} />
)

export default TomHolkenborgCasePage
