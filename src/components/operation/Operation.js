import { AdditionPreset } from "../presets/AdditionPreset"
import { SubtractionPreset } from "../presets/SubtractionPreset"
import { MultiplicationPreset } from "../presets/MultiplicationPreset"
import { DivisionPreset } from "../presets/DivisionPreset"
import { PowerPreset } from "../presets/PowerPreset"
import { RootPreset } from "../presets/RootPreset"
import css from "./Operation.module.css"
import { getElem } from "../../Constants"
import { useEffect, useState } from "react"

export const Operation = ({
  expression,
  modifyExpression,
  handleClickCloseExpression,
  selected,
  setSelected,
}) => {
  const [isSelected, setIsSelected] = useState(false)

  useEffect(() => {
    if (!!selected && selected.id === expression.id) {
      console.log("updated", selected.id)
      setIsSelected(true)
      modifyExpression({ ...selected, id: expression.id })
    } else {
      setIsSelected(false)
    }
  }, [selected])

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

  const handleSelectExpression = (e) => {
    e.stopPropagation()
    setSelected(expression)
  }

  switch (expression.operator) {
    case "ADDITION":
      return (
        <div
          className={`${css.container} ${isSelected ? css.selected : ""}`}
          onClick={handleSelectExpression}
        >
          <AdditionPreset
            expression={expression}
            modifyElem={modifyElem}
            handleClickMoreElem={handleClickMoreElem}
            handleClickCloseExpression={handleClickCloseExpression}
            selected={selected}
            setSelected={setSelected}
          />
        </div>
      )
    case "SUBTRACTION":
      return (
        <div
          className={`${css.container} ${isSelected ? css.selected : ""}`}
          onClick={handleSelectExpression}
        >
          <SubtractionPreset
            expression={expression}
            modifyElem={modifyElem}
            handleClickCloseExpression={handleClickCloseExpression}
            selected={selected}
            setSelected={setSelected}
          />
        </div>
      )
    case "MULTIPLICATION":
      return (
        <div
          className={`${css.container} ${isSelected ? css.selected : ""}`}
          onClick={handleSelectExpression}
        >
          <MultiplicationPreset
            expression={expression}
            modifyElem={modifyElem}
            handleClickMoreElem={handleClickMoreElem}
            handleClickCloseExpression={handleClickCloseExpression}
            selected={selected}
            setSelected={setSelected}
          />
        </div>
      )
    case "DIVISION":
      return (
        <div
          className={`${css.container} ${isSelected ? css.selected : ""}`}
          onClick={handleSelectExpression}
        >
          <DivisionPreset
            expression={expression}
            modifyElem={modifyElem}
            handleClickCloseExpression={handleClickCloseExpression}
            selected={selected}
            setSelected={setSelected}
          />
        </div>
      )
    case "POWER":
      return (
        <div
          className={`${css.container} ${isSelected ? css.selected : ""}`}
          onClick={handleSelectExpression}
        >
          <PowerPreset
            expression={expression}
            modifyElem={modifyElem}
            handleClickCloseExpression={handleClickCloseExpression}
            selected={selected}
            setSelected={setSelected}
          />
        </div>
      )
    case "ROOT":
      return (
        <div
          className={`${css.container} ${isSelected ? css.selected : ""}`}
          onClick={handleSelectExpression}
        >
          <RootPreset
            expression={expression}
            modifyElem={modifyElem}
            handleClickCloseExpression={handleClickCloseExpression}
            selected={selected}
            setSelected={setSelected}
          />
        </div>
      )
    default:
      return (
        <div
          className={`${css.container} ${isSelected ? css.selected : ""}`}
          onClick={handleSelectExpression}
        >
          <span>Formula not found...</span>
        </div>
      )
  }
}
