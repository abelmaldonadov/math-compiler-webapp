import css from "./FormulaEditor.module.css"
import { Operation } from "../operation/Operation"
import { useEffect, useState } from "react"
import { getElem, getExpression } from "../../Constants"

export const FormulaEditor = ({ formula, onSaveFormula }) => {
  const [expression, setExpression] = useState(null)
  const [selected, setSelected] = useState(null)

  useEffect(() => {
    setExpression({ ...formula })
    console.log("loaded...")
  }, [])

  const handleSaveFormula = () => {
    onSaveFormula({ ...expression })
    console.log("saved...", expression)
  }
  const handleResetFormula = () => {
    setExpression(getExpression())
    console.log("formula reset")
  }

  const handleClickCloseExpression = () => {
    setExpression(null)
  }
  const modifyExpression = (exp) => {
    setExpression(exp)
  }

  const handleChangeDecimalTreat = (e) => {
    setExpression({ ...expression, decimalTreat: e.target.value })
  }

  return (
    <div className={css.container}>
      <div className={css.canvas}>
        {!!expression && (
          <Operation
            expression={expression}
            handleClickCloseExpression={handleClickCloseExpression}
            modifyExpression={modifyExpression}
          />
        )}
      </div>
      <div className={css.preview}>
        {selected && <span>{JSON.stringify(selected)}</span>}
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
        {!!expression && (
          <select
            onChange={handleChangeDecimalTreat}
            value={expression.decimalTreat}
          >
            <option value="DECIMAL">Decimal</option>
            <option value="TRUNCATE">Truncado</option>
            <option value="ROUND">Redondeado</option>
          </select>
        )}
        <button onClick={handleSaveFormula}>Guardar</button>
        <button onClick={handleResetFormula}>Reiniciar</button>
      </div>
    </div>
  )
}
