import { Elem } from "../elem/Elem"
import css from "./Term.module.css"
import { getElem } from "../../Constants"
import { useEffect, useState } from "react"

export const Term = ({ term, onModifyTerm, handleClickCloseTerm }) => {
  const [id, setId] = useState(term.id)
  const [operator, setOperator] = useState(term.operator)
  const [power, setPower] = useState(term.power)
  const [elems, setElems] = useState(term.elems)
  const [upElems, setUpElems] = useState([])
  const [downElems, setDownElems] = useState([])

  useEffect(() => {
    onModifyTerm({ id, operator, power, elems })
  }, [operator, power, elems])

  useEffect(() => {
    setUpElems(elems.filter((item) => item.operator === "MULTIPLICATION"))
    setDownElems(elems.filter((item) => item.operator === "DIVISION"))
  }, [term, elems])

  const handleChangeOperator = (e) => {
    setOperator(e.target.value)
  }
  const handleChangePower = (e) => {
    setPower(e.target.value)
  }

  const handleClickMoreElem = (operator) => {
    let newElems = [...elems]
    newElems.push({ ...getElem(), operator })
    setElems(newElems)
  }
  const handleClickCloseElem = (id) => {
    let newElems = [...elems]
    newElems = newElems.filter((item) => item.id !== id)
    setElems(newElems)
  }

  const modifyElem = (e) => {
    let newElems = [...elems]
    newElems = newElems.map((item) => (item.id === e.id ? e : item))
    setElems(newElems)
  }

  return (
    <div className={css.container}>
      <select
        className={css.operator}
        value={term.operator}
        onChange={handleChangeOperator}
      >
        <option value="ADDITION">+</option>
        <option value="SUBTRACTION">-</option>
      </select>

      <span className={css.delimiter}>(</span>
      <div className={css.elems}>
        <div className={css.elemsUp}>
          {upElems.map((item) => (
            <Elem
              key={item.id}
              elem={item}
              handleClickCloseElem={handleClickCloseElem}
              onModifyElem={modifyElem}
            />
          ))}
          <button
            className={css.more}
            onClick={() => handleClickMoreElem("MULTIPLICATION")}
          >
            +
          </button>
        </div>
        <div className={css.divisor} />
        <div className={css.elemsDown}>
          {downElems.map((item) => (
            <Elem
              key={item.id}
              elem={item}
              handleClickCloseElem={handleClickCloseElem}
              onModifyElem={modifyElem}
            />
          ))}
          <button
            className={css.more}
            onClick={() => handleClickMoreElem("DIVISION")}
          >
            +
          </button>
        </div>
      </div>
      <span className={css.delimiter}>)</span>

      <input
        className={css.power}
        type="text"
        value={power}
        onChange={handleChangePower}
      />
      <span className={css.close} onClick={() => handleClickCloseTerm(id)}>
        &times;
      </span>
    </div>
  )
}
