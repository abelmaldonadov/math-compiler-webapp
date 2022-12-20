import { useEffect, useState } from "react"
import css from "./ResizableBox.module.css"
import { Operation } from "../operation/Operation"

export const ResizableBox = ({ elem, modifyElem }) => {
  const id = elem.id
  const [type, setType] = useState(elem.type)
  const [coefficient, setCoefficient] = useState(elem.coefficient)
  const [name, setName] = useState(elem.name)
  const [value, setValue] = useState(elem.value)

  useEffect(() => {
    modifyElem({ id, type, coefficient, name, value })
  }, [type, coefficient, name, value])

  const handleChangeType = (e) => {
    setType(e.target.value)
  }
  const handleChangeCoefficient = (e) => {
    setCoefficient(e.target.value)
  }
  const handleChangeName = (e) => {
    setName(e.target.value)
  }
  const handleChangeValue = (e) => {
    setValue(e)
  }

  return (
    <div className={css.container}>
      {type === "CONSTANT" && (
        <input
          className={css.input}
          type="text"
          value={elem.coefficient}
          onChange={handleChangeCoefficient}
        />
      )}
      {type === "VARIABLE" && (
        <>
          {value === null ? (
            <span>{name}</span>
          ) : (
            <Operation expression={value} setExpression={handleChangeValue} />
          )}
        </>
      )}
    </div>
  )
}
