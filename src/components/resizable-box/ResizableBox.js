import css from "./ResizableBox.module.css"
import { Operation } from "../operation/Operation"
import { getElem, getExpression } from "../../Constants"

export const ResizableBox = ({ elem, modifyElem }) => {
  const handleChangeCoefficient = (e) => {
    modifyElem({ ...elem, coefficient: e.target.value })
  }
  const handleChangeName = (e) => {
    modifyElem({ ...elem, name: e.target.value })
  }

  const handleClickCloseExpression = () => {
    let newElem = { ...elem }
    modifyElem({ ...getElem(), id: newElem.id })
  }
  const modifyExpression = (exp) => {
    let newElem = { ...elem }
    newElem.value = exp
    modifyElem(newElem)
  }

  return (
    <div className={css.container}>
      {elem.type === "CONSTANT" && (
        <input
          className={css.input}
          type="text"
          value={elem.coefficient}
          onChange={handleChangeCoefficient}
        />
      )}
      {elem.type === "VARIABLE" && (
        <>
          {elem.value === null ? (
            <input
              className={css.input}
              type="text"
              value={elem.name}
              onChange={handleChangeName}
            />
          ) : (
            <Operation
              expression={elem.value}
              modifyExpression={modifyExpression}
              handleClickCloseExpression={handleClickCloseExpression}
            />
          )}
        </>
      )}
    </div>
  )
}
