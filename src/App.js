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

  const saveFormula = (formula) => {
    console.log(JSON.stringify(formula))
    console.log(JSON.stringify(formula).length)
  }

  const variablesTable = [
    { id: "1", name: "Sueldo Básico", abbr: "BAS" },
    { id: "2", name: "CTS", abbr: "CTS" },
    { id: "3", name: "Almuerzos", abbr: "ALM" },
  ]

  return (
    <div className="box">
      <FormulaEditor
        formula={JSON.parse(
          '{"decimalTreat":"DECIMAL","operator":"ADDITION","elems":[{"type":"CONSTANT","coefficient":1,"name":"","value":null,"id":"c55c5c3a-9dc0-b7f0-1f63-dbf71dd19ded"},{"type":"CONSTANT","coefficient":1,"name":"","value":null,"id":"f9903176-68e1-7c87-0e6b-20b6386dbc67"}],"id":"a327e82d-c74a-b909-c786-5b22344f8a69"}'
        )}
        onSaveFormula={saveFormula}
        variablesTable={variablesTable}
      />
    </div>
  )
}
