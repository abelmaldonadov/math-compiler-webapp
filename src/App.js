import "./App.css"
import { FormulaInput } from "./components/formula-input/FormulaInput"
import { getExpression } from "./Constants"

export const App = () => {
  const formula = { ...getExpression() }
  const saveFormula = () => {}

  return (
    <div>
      <div className="header">
        <h2>Fórmulas de conceptos de remuneraciones</h2>
      </div>
      <div className="body">
        <h2>Fórmula</h2>
        <div className="box flex-center">
          <FormulaInput formula={formula} onSaveFormula={saveFormula} />
        </div>
      </div>
      <div className="footer">
        <h2>Controls</h2>
        <div className="box"></div>
      </div>
    </div>
  )
}
