import { AdditionPreset } from "../presets/AdditionPreset"
import { SubtractionPreset } from "../presets/SubtractionPreset"
import { MultiplicationPreset } from "../presets/MultiplicationPreset"
import { DivisionPreset } from "../presets/DivisionPreset"
import { PowerPreset } from "../presets/PowerPreset"
import { RootPreset } from "../presets/RootPreset"
import css from "./Operation.module.css"
import { getElem } from "../../Constants"

export const Operation = ({
  expression,
  modifyExpression,
  handleClickCloseExpression,
}) => {
  const handleClickMoreElem = () => {
    let newExp = { ...expression }
    newExp.elems.push(getElem())
    modifyExpression(newExp)
  }

  const modifyElem = (e) => {
    let newExp = { ...expression }
    newExp.elems = newExp.elems.map((item) => (item.id === e.id ? e : item))
    modifyExpression(newExp)
  }

  switch (expression.operator) {
    case "ADDITION":
      return (
        <div className={css.container}>
          <AdditionPreset
            expression={expression}
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
            expression={expression}
            modifyElem={modifyElem}
            handleClickCloseExpression={handleClickCloseExpression}
          />
        </div>
      )
    case "MULTIPLICATION":
      return (
        <div className={css.container}>
          <MultiplicationPreset
            expression={expression}
            modifyElem={modifyElem}
            handleClickMoreElem={handleClickMoreElem}
            handleClickCloseExpression={handleClickCloseExpression}
          />
        </div>
      )
    case "DIVISION":
      return (
        <div className={css.container}>
          <DivisionPreset
            expression={expression}
            modifyElem={modifyElem}
            handleClickCloseExpression={handleClickCloseExpression}
          />
        </div>
      )
    case "POWER":
      return (
        <div className={css.container}>
          <PowerPreset
            expression={expression}
            modifyElem={modifyElem}
            handleClickCloseExpression={handleClickCloseExpression}
          />
        </div>
      )
    case "ROOT":
      return (
        <div className={css.container}>
          <RootPreset
            expression={expression}
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
