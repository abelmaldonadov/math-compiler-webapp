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
        type: "EXPRESSION",
        value: {
          ...getExpression(),
          operator: "ADDITION",
          elems: [
            { ...getElem(), coefficient: 1.0 },
            { ...getElem(), type: "VARIABLE", name: "2" },
            { ...getElem(), coefficient: 3.0 },
            {
              ...getElem(),
              type: "EXPRESSION",
              value: {
                ...getExpression(),
                operator: "MULTIPLICATION",
                elems: [
                  { ...getElem(), coefficient: 10.6 },
                  { ...getElem(), type: "VARIABLE", name: "3" },
                ],
              },
            },
            { ...getElem(), coefficient: 5.0 },
          ],
        },
      },
      {
        ...getElem(),
        type: "EXPRESSION",
        value: {
          ...getExpression(),
          operator: "SUBTRACTION",
          elems: [
            {
              ...getElem(),
              type: "EXPRESSION",
              value: {
                ...getExpression(),
                operator: "ROOT",
                elems: [
                  { ...getElem(), type: "VARIABLE", name: "1" },
                  { ...getElem(), coefficient: 2.0 },
                ],
              },
            },
            {
              ...getElem(),
              type: "EXPRESSION",
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

  const variablesTable = [
    { id: "1", name: "Sueldo Básico", abbr: "BAS" },
    { id: "2", name: "CTS", abbr: "CTS" },
    { id: "3", name: "Almuerzos", abbr: "ALM" },
  ]

  return (
    <div className="box">
      <FormulaEditor
        formula={formula}
        onSaveFormula={saveFormula}
        variablesTable={variablesTable}
        isDev
      />
    </div>
  )
}
