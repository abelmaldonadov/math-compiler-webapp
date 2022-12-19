import { AdditionPreset } from "../presets/AdditionPreset"
import { SubtractionPreset } from "../presets/SubtractionPreset"
import { MultiplicationPreset } from "../presets/MultiplicationPreset"
import { DivisionPreset } from "../presets/DivisionPreset"
import { PowerPreset } from "../presets/PowerPreset"
import { RootPreset } from "../presets/RootPreset"
import css from "./Operation.module.css"
import { useEffect, useState } from "react"
import { getElem } from "../../Constants"

export const Operation = ({ expression, setExpression }) => {
  const id = expression.id
  const [operator, setOperator] = useState(expression.operator)
  const [elems, setElems] = useState(expression.elems)

  useEffect(() => {
    setExpression({ ...expression, operator, elems })
  }, [operator, elems])

  const modifyElem = (e) => {
    let newElems = [...elems]
    newElems = newElems.map((item) => (item.id === e.id ? e : item))
    setElems(newElems)
  }
  const handleClickMoreElem = () => {
    let newElems = [...elems]
    newElems.push(getElem())
    setElems(newElems)
  }
  const handleClickCloseElem = (id) => {
    let newElems = [...elems]
    newElems = newElems.filter((item) => item.id !== id)
    setElems(newElems)
  }

  switch (operator) {
    case "ADDITION":
      return (
        <div className={css.container}>
          <AdditionPreset
            id={id}
            operator={operator}
            elems={elems}
            modifyElem={modifyElem}
            handleClickMoreElem={handleClickMoreElem}
            handleClickCloseElem={handleClickCloseElem}
          />
        </div>
      )
    case "SUBTRACTION":
      return (
        <div className={css.container}>
          <SubtractionPreset
            id={id}
            operator={operator}
            setOperator={setOperator}
            elems={elems}
            setElems={setElems}
            modifyElem={modifyElem}
          />
        </div>
      )
    case "MULTIPLICATION":
      return (
        <div className={css.container}>
          <MultiplicationPreset
            id={id}
            operator={operator}
            setOperator={setOperator}
            elems={elems}
            setElems={setElems}
            modifyElem={modifyElem}
          />
        </div>
      )
    case "DIVISION":
      return (
        <div className={css.container}>
          <DivisionPreset
            id={id}
            operator={operator}
            setOperator={setOperator}
            elems={elems}
            setElems={setElems}
            modifyElem={modifyElem}
          />
        </div>
      )
    case "POWER":
      return (
        <div className={css.container}>
          <PowerPreset
            id={id}
            operator={operator}
            setOperator={setOperator}
            elems={elems}
            setElems={setElems}
            modifyElem={modifyElem}
          />
        </div>
      )
    case "ROOT":
      return (
        <div className={css.container}>
          <RootPreset
            id={id}
            operator={operator}
            setOperator={setOperator}
            elems={elems}
            setElems={setElems}
            modifyElem={modifyElem}
          />
        </div>
      )
    default:
      return (
        <div className={css.container}>
          <span>Formula not found...</span>
        </div>
      )
  }
}
