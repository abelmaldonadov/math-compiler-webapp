import { useEffect, useState } from "react"
import { getElem } from "../../Constants"
import css from "./ResizableBox.module.css"
import { Operation } from "../operation/Operation"

export const ResizableBox = ({ elem, modifyElem }) => {
  const id = elem.id
  const [type, setType] = useState(elem.type || getElem().type)
  const [coefficient, setCoefficient] = useState(elem.coefficient)
  const [name, setName] = useState(elem.name)
  const [variable, setVariable] = useState(elem.variable || "")

  useEffect(() => {
    modifyElem({ id, type, coefficient, name, variable })
  }, [type, coefficient, name, variable])

  const handleChangeType = (e) => {
    setType(e.target.value)
  }
  const handleChangeCoefficient = (e) => {
    setCoefficient(e.target.value)
  }
  const handleChangeName = (e) => {
    setName(e.target.value)
  }
  const handleChangeVariable = (e) => {
    setVariable(e)
  }

  return (
    <div className={css.container}>
      {type === "CONSTANT" && (
        <input
          type="text"
          value={elem.coefficient}
          onChange={handleChangeCoefficient}
        />
      )}
      {type === "VARIABLE" && (
        <Operation expression={variable} setExpression={handleChangeVariable} />
      )}
    </div>
  )
}
