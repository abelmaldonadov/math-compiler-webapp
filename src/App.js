import "./App.css"
import { FormulaEditor } from "./components/formula-editor/FormulaEditor"
import { getElem, getExpression } from "./Constants"

export const App = () => {
  const formula = {
    ...getExpression(),
    decimalTreat: "TRUNCATE",
    operator: "DIVISION",
    elems: [
      {
        ...getElem(),
        type: "VARIABLE",
        value: {
          ...getExpression(),
          operator: "ADDITION",
          elems: [
            { ...getElem(), coefficient: 1.0 },
            { ...getElem(), coefficient: 2.0 },
            { ...getElem(), coefficient: 3.0 },
            {
              ...getElem(),
              type: "VARIABLE",
              value: {
                ...getExpression(),
                operator: "MULTIPLICATION",
                elems: [
                  { ...getElem(), coefficient: 10.6 },
                  { ...getElem(), coefficient: 0.5 },
                ],
              },
            },
            { ...getElem(), coefficient: 5.0 },
          ],
        },
      },
      {
        ...getElem(),
        type: "VARIABLE",
        value: {
          ...getExpression(),
          operator: "SUBTRACTION",
          elems: [
            {
              ...getElem(),
              type: "VARIABLE",
              value: {
                ...getExpression(),
                operator: "ROOT",
                elems: [
                  { ...getElem(), coefficient: 64.0 },
                  { ...getElem(), coefficient: 2.0 },
                ],
              },
            },
            {
              ...getElem(),
              type: "VARIABLE",
              value: {
                ...getExpression(),
                operator: "POWER",
                elems: [
                  { ...getElem(), coefficient: 1.0 },
                  { ...getElem(), coefficient: 2.0 },
                ],
              },
            },
          ],
        },
      },
    ],
  }

  const saveFormula = () => {}

  return (
    <div className="box">
      <FormulaEditor formula={formula} onSaveFormula={saveFormula} />
    </div>
  )
}
