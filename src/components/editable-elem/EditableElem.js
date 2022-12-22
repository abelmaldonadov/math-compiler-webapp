import css from "./EditableElem.module.css"
import { filterElemsByOperator, getElem, getExpression } from "../../Constants"

export const EditableElem = ({
  elem,
  handleChangeTempElem,
  handleClickCloseTempElem,
  isClosable,
  variables,
}) => {
  const modifyElemType = (e) => {
    e.stopPropagation()
    if (e.target.value === "EXPRESSION") {
      handleChangeTempElem({
        ...getElem(),
        type: e.target.value,
        id: elem.id,
        value: getExpression(),
      })
    } else {
      handleChangeTempElem({ ...getElem(), type: e.target.value, id: elem.id })
    }
  }

  const modifyElem = (e) => {
    e.stopPropagation()
    handleChangeTempElem({ ...elem, [e.target.name]: e.target.value })
  }

  const modifyExpressionOperator = (e) => {
    e.stopPropagation()
    handleChangeTempElem({
      ...elem,
      value: {
        ...elem.value,
        operator: e.target.value,
        elems: filterElemsByOperator(elem.value.elems, e.target.value),
      },
    })
  }

  if (!elem)
    return (
      <span className={css.container}>
        Cargando...
        <br />
      </span>
    )

  return (
    <div className={css.container}>
      <select className={css.input} value={elem.type} onChange={modifyElemType}>
        <option value="CONSTANT">Constante</option>
        <option value="VARIABLE">Variable</option>
        <option value="EXPRESSION">Expresion</option>
      </select>
      {elem.type === "CONSTANT" && (
        <input
          className={css.input}
          type="number"
          name="coefficient"
          value={elem.coefficient}
          onChange={modifyElem}
        />
      )}
      {elem.type === "VARIABLE" && (
        <select
          className={css.input}
          name="name"
          value={elem.name}
          onChange={modifyElem}
        >
          {variables.map((item) => (
            <option key={item.id} value={item.id}>
              {item.name}
            </option>
          ))}
        </select>
      )}
      {elem.type === "EXPRESSION" && (
        <select
          className={css.input}
          value={elem.value?.operator}
          onChange={modifyExpressionOperator}
        >
          <option value="ADDITION">Suma</option>
          <option value="SUBTRACTION">Diferencia</option>
          <option value="MULTIPLICATION">Producto</option>
          <option value="DIVISION">División</option>
          <option value="POWER">Potencia</option>
          <option value="ROOT">Radicación</option>
        </select>
      )}
      {isClosable && (
        <span
          className={css.close}
          onClick={() => handleClickCloseTempElem(elem)}
        >
          &times;
        </span>
      )}
    </div>
  )
}
