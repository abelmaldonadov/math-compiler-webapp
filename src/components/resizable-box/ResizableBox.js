import css from "./ResizableBox.module.css"
import { Operation } from "../operation/Operation"
import { getElem } from "../../Constants"
import { useEffect } from "react"

export const ResizableBox = ({ elem, modifyElem, selected, setSelected }) => {
  useEffect(() => {
    if (!!selected && selected.id === elem.id) {
      console.log("updated", selected.id)
      modifyElem({ ...selected, id: elem.id })
    }
  }, [selected])

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

  const handleSelectElem = (e) => {
    e.stopPropagation()
    setSelected(elem)
  }

  return (
    <div className={css.container} onClick={handleSelectElem}>
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
              setSelected={setSelected}
              selected={selected}
            />
          )}
        </>
      )}
    </div>
  )
}
