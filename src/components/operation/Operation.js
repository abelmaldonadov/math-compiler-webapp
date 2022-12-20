import { AdditionPreset } from "../presets/AdditionPreset"
import { SubtractionPreset } from "../presets/SubtractionPreset"
import { MultiplicationPreset } from "../presets/MultiplicationPreset"
import { DivisionPreset } from "../presets/DivisionPreset"
import { PowerPreset } from "../presets/PowerPreset"
import { RootPreset } from "../presets/RootPreset"
import css from "./Operation.module.css"
import { useEffect, useState } from "react"
import { getElem, getExpression } from "../../Constants"

export const Operation = ({ expression, modifyExpression }) => {
  const [id, setId] = useState(expression.id)
  const [operator, setOperator] = useState(expression.operator)
  const [elems, setElems] = useState(expression.elems)

  useEffect(() => {
    modifyExpression({ ...expression, operator, elems })
  }, [id, operator, elems])

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
  const handleClickCloseExpression = () => {
    modifyExpression({ ...getExpression() })
  }

  switch (operator) {
    case "ADDITION":
      return (
        <div className={css.container}>
          <AdditionPreset
            id={id}
            elems={elems}
            modifyElem={modifyElem}
            handleClickMoreElem={handleClickMoreElem}
            handleClickCloseExpression={handleClickCloseExpression}
          />
        </div>
      )
    case "SUBTRACTION":
      return (
        <div className={css.container}>
          <SubtractionPreset
            id={id}
            elems={elems}
            modifyElem={modifyElem}
            handleClickCloseExpression={handleClickCloseExpression}
          />
        </div>
      )
    case "MULTIPLICATION":
      return (
        <div className={css.container}>
          <MultiplicationPreset
            id={id}
            operator={operator}
            elems={elems}
            modifyElem={modifyElem}
            handleClickCloseExpression={handleClickCloseExpression}
            handleClickMoreElem={handleClickMoreElem}
          />
        </div>
      )
    case "DIVISION":
      return (
        <div className={css.container}>
          <DivisionPreset
            id={id}
            operator={operator}
            elems={elems}
            modifyElem={modifyElem}
            handleClickCloseExpression={handleClickCloseExpression}
          />
        </div>
      )
    case "POWER":
      return (
        <div className={css.container}>
          <PowerPreset
            id={id}
            operator={operator}
            elems={elems}
            modifyElem={modifyElem}
            handleClickCloseExpression={handleClickCloseExpression}
          />
        </div>
      )
    case "ROOT":
      return (
        <div className={css.container}>
          <RootPreset
            id={id}
            operator={operator}
            elems={elems}
            modifyElem={modifyElem}
            handleClickCloseExpression={handleClickCloseExpression}
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
