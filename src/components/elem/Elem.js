import css from "./Elem.module.css"
import { useEffect, useState } from "react"

export const Elem = ({ elem, onModifyElem, handleClickCloseElem }) => {
  const [id, setId] = useState(elem.id)
  const [type, setType] = useState(elem.type)
  const [power, setPower] = useState(elem.power)
  const [operator, setOperator] = useState(elem.operator)
  const [coefficient, setCoefficient] = useState(elem.coefficient)
  const [variable, setVariable] = useState(elem.variable)

  useEffect(() => {
    onModifyElem({ id, type, power, operator, coefficient, variable })
  }, [type, power, operator, coefficient, variable])

  const handleChangeType = (e) => {
    setType(e.target.value)
  }
  const handleChangeOperator = (e) => {
    setOperator(e.target.value)
  }
  const handleChangePower = (e) => {
    setPower(e.target.value)
  }
  const handleChangeCoefficient = (e) => {
    setCoefficient(e.target.value)
  }
  const handleChangeVariable = (e) => {
    setVariable(e.target.value)
  }

  if (elem.type === "CONSTANT") {
    return (
      <div className={css.container}>
        <input
          className={css.coefficient}
          type="text"
          value={elem.coefficient}
          onChange={handleChangeCoefficient}
        />
        <input
          className={css.power}
          type="text"
          value={elem.power}
          onChange={handleChangePower}
        />
        <span className={css.close} onClick={() => handleClickCloseElem(id)}>
          &times;
        </span>
      </div>
    )
  } else {
    return (
      <div className={css.container}>
        <span className={css.delimiter}>{"{"}</span>
        <input
          className={css.variable}
          type="text"
          value={elem.name}
          onChange={handleChangeVariable}
        />
        <span className={css.delimiter}>{"}"}</span>

        <input
          className={css.power}
          type="number"
          value={elem.power}
          onChange={handleChangePower}
        />
        <span className={css.close} onClick={handleClickCloseElem}>
          &times;
        </span>
      </div>
    )
  }
}
