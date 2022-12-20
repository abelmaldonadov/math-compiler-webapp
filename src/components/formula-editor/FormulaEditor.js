import css from "./FormulaEditor.module.css"
import { Operation } from "../operation/Operation"
import { useEffect, useState } from "react"
import { getElem, getExpression } from "../../Constants"
import uuid from "react-uuid"

export const FormulaEditor = ({ formula, onSaveFormula }) => {
  const [id, setId] = useState(uuid())
  const [decimalTreat, setDecimalTreat] = useState("DECIMAL")
  const [operator, setOperator] = useState("ADDITION")
  const [elems, setElems] = useState([getElem(), getElem()])

  useEffect(() => {
    loadFormula()
  }, [])

  const loadFormula = () => {
    if (!!formula) {
      setDecimalTreat(formula.decimalTreat)
      setOperator(formula.operator)
      setElems(formula.elems)
      console.log("loaded...")
    } else {
      const expression = getExpression()
      setDecimalTreat(expression.decimalTreat)
      setOperator(expression.operator)
      setElems(expression.elems)
      console.error("formula not found")
    }
  }

  const handleSaveFormula = () => {
    const finalExpression = { id, decimalTreat, operator, elems }
    onSaveFormula(finalExpression)
    console.log("saved...", finalExpression)
  }
  const handleResetFormula = () => {
    const expression = getExpression()
    setDecimalTreat(expression.decimalTreat)
    setOperator(expression.operator)
    setElems(expression.elems)
    console.log("formula reset")
  }

  const handleChangeDecimalTreat = (e) => {
    setDecimalTreat(e.target.value)
  }

  const modifyExpression = ({ decimalTreat, operator, elems }) => {
    setDecimalTreat(decimalTreat)
    setOperator(operator)
    setElems(elems)
  }

  return (
    <div className={css.container}>
      <div className={css.canvas}>
        <Operation
          expression={{ id, decimalTreat, operator, elems }}
          modifyExpression={modifyExpression}
        />
      </div>
      <div className={css.presets}>
        <div className={`${css.preset} ${css.addition}`}>
          <span>SUMA</span>
        </div>
        <div className={`${css.preset} ${css.subtraction}`}>
          <span>DIFERENCIA</span>
        </div>
        <div className={`${css.preset} ${css.multiplication}`}>
          <span>MULTIPLICACIÓN</span>
        </div>
        <div className={`${css.preset} ${css.division}`}>
          <span>DIVISIÓN</span>
        </div>
        <div className={`${css.preset} ${css.power}`}>
          <span>POTENCIA</span>
        </div>
        <div className={`${css.preset} ${css.root}`}>
          <span>RADICACIÓN</span>
        </div>
      </div>
      <div className={css.buttons}>
        <select onChange={handleChangeDecimalTreat} value={decimalTreat}>
          <option value="DECIMAL">Decimal</option>
          <option value="TRUNCATE">Truncado</option>
          <option value="ROUND">Redondeado</option>
        </select>
        <button onClick={handleSaveFormula}>Guardar</button>
        <button onClick={handleResetFormula}>Reiniciar</button>
      </div>
    </div>
  )
}
