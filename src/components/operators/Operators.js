import css from "./Operators.module.css"
import { filterElemsByOperator } from "../../Constants"

export const Operators = ({ tempSelected, setTempSelected }) => {
  const handleChangeOperator = (operator) => {
    let newTempSelected = { ...tempSelected }
    newTempSelected = { ...newTempSelected, operator }
    newTempSelected.elems = filterElemsByOperator(
      newTempSelected.elems,
      operator
    )
    setTempSelected(newTempSelected)
  }

  if (!tempSelected) {
    return (
      <span className={css.operators}>
        Cargando...
        <br />
      </span>
    )
  }

  return (
    <div className={css.operators}>
      <div
        className={`${css.operator} ${css.addition} ${
          tempSelected.operator === "ADDITION" && css.selected
        }`}
        onClick={() => handleChangeOperator("ADDITION")}
      >
        <span>SUMA</span>
      </div>
      <div
        className={`${css.operator} ${css.subtraction} ${
          tempSelected.operator === "SUBTRACTION" && css.selected
        }`}
        onClick={() => handleChangeOperator("SUBTRACTION")}
      >
        <span>DIFERENCIA</span>
      </div>
      <div
        className={`${css.operator} ${css.multiplication} ${
          tempSelected.operator === "MULTIPLICATION" && css.selected
        }`}
        onClick={() => handleChangeOperator("MULTIPLICATION")}
      >
        <span>MULTIPLICACIÓN</span>
      </div>
      <div
        className={`${css.operator} ${css.division} ${
          tempSelected.operator === "DIVISION" && css.selected
        }`}
        onClick={() => handleChangeOperator("DIVISION")}
      >
        <span>DIVISIÓN</span>
      </div>
      <div
        className={`${css.operator} ${css.power} ${
          tempSelected.operator === "POWER" && css.selected
        }`}
        onClick={() => handleChangeOperator("POWER")}
      >
        <span>POTENCIA</span>
      </div>
      <div
        className={`${css.operator} ${css.root} ${
          tempSelected.operator === "ROOT" && css.selected
        }`}
        onClick={() => handleChangeOperator("ROOT")}
      >
        <span>RADICACIÓN</span>
      </div>
    </div>
  )
}
