import css from "./FormulaEditor.module.css"
import { Operation } from "../operation/Operation"
import { useEffect, useState } from "react"
import { getExpression } from "../../Constants"

export const FormulaEditor = ({ formula, onSaveFormula }) => {
  const [expression, setExpression] = useState(formula)

  useEffect(() => {
    loadFormula()
  }, [])

  const loadFormula = () => {
    if (!!formula) {
      setExpression(formula)
      console.log("loaded...")
    } else {
      console.error("formula not found")
    }
  }

  const handleSaveFormula = () => {
    const finalExpression = { ...expression }
    onSaveFormula(finalExpression)
    setExpression({ ...getExpression() })
    console.log("saved...", finalExpression)
  }

  const handleChangeDecimalTreat = (e) => {
    setExpression({ ...expression, decimalTreat: e.target.value })
  }

  return (
    <div className={css.container}>
      <div className={css.canvas}>
        <Operation expression={expression} setExpression={setExpression} />
      </div>
      <div className={css.buttons}>
        <select
          onChange={handleChangeDecimalTreat}
          value={expression.decimalTreat}
        >
          <option value="DECIMAL">Decimal</option>
          <option value="TRUNCATE">Truncado</option>
          <option value="ROUND">Redondeado</option>
        </select>
        <button onClick={handleSaveFormula}>Guardar</button>
      </div>
    </div>
  )
}
