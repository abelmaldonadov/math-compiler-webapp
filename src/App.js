import "./App.css"
import { FormulaEditor } from "./components/formula-editor/FormulaEditor"
import uuid from "react-uuid"

export const App = () => {
  const formula = {
    decimalTreat: "TRUNCATE",
    operator: "ADDITION",
    elems: [],
    id: uuid(),
  }
  const saveFormula = () => {}

  return (
    <div className="box">
      <FormulaEditor formula={formula} onSaveFormula={saveFormula} />
    </div>
  )
}
