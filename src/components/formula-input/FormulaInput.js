import css from "./FormulaInput.module.css"
import { Expression } from "../expression/Expression"
import { useEffect, useState } from "react"
import { getExpression } from "../../Constants"

export const FormulaInput = ({ formula, onSaveFormula }) => {
  const [expression, setExpression] = useState({ ...getExpression() })

  useEffect(() => {
    loadFormula()
  }, [])

  const loadFormula = () => {
    if (!!formula) {
      setExpression(formula)
      console.log("loaded...")
    }
  }

  const handleSaveFormula = () => {
    onSaveFormula(expression)
    setExpression({ ...getExpression() })
    console.log("saved...", expression)
  }

  return (
    <div className={css.container}>
      <Expression expression={expression} setExpression={setExpression} />
      <div className={css.buttons}>
        <button onClick={handleSaveFormula}>Guardar</button>
      </div>
    </div>
  )
}
