import css from "./ResizableBox.module.css"
import { Operation } from "../operation/Operation"
import { getElem } from "../../Constants"

export const ResizableBox = ({
  elem,
  modifyElem,
  selected,
  setSelected,
  variables,
}) => {
  const handleChangeCoefficient = (e) => {
    modifyElem({ ...elem, coefficient: e.target.value })
  }

  const handleClickCloseExpression = (e) => {
    e.stopPropagation()
    let newElem = { ...elem }
    modifyElem({ ...getElem(), id: newElem.id })
    setSelected(null)
  }
  const modifyExpression = (exp) => {
    let newElem = { ...elem }
    newElem.value = exp
    modifyElem(newElem)
  }

  const getVariableAbbr = () => {
    return variables.find((item) => item.id === elem.name).abbr
  }

  return (
    <div className={css.container}>
      {elem.type === "CONSTANT" && (
        <input
          className={css.input}
          type="number"
          value={elem.coefficient}
          onChange={handleChangeCoefficient}
        />
      )}
      {elem.type === "VARIABLE" && (
        <input
          className={`${css.input} ${css.variable}`}
          type="text"
          value={getVariableAbbr()}
          readOnly
        />
      )}
      {elem.type === "EXPRESSION" && (
        <Operation
          expression={elem.value}
          modifyExpression={modifyExpression}
          handleClickCloseExpression={handleClickCloseExpression}
          setSelected={setSelected}
          selected={selected}
          variables={variables}
        />
      )}
    </div>
  )
}
