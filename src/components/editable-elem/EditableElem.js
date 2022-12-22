import css from "./EditableElem.module.css"

export const EditableElem = ({
  elem,
  handleChangeTempElem,
  handleClickCloseTempElem,
  isClosable,
}) => {
  if (!elem)
    return (
      <span className={css.container}>
        Cargando...
        <br />
      </span>
    )

  return (
    <div className={css.container}>
      <select
        className={css.type}
        name="type"
        value={elem.type}
        onChange={handleChangeTempElem}
      >
        <option value="CONSTANT">Constante</option>
        <option value="VARIABLE">Variable</option>
        <option value="EXPRESSION">Expresion</option>
      </select>
      {elem.type === "CONSTANT" && (
        <input
          type="number"
          value={elem.coefficient}
          onChange={handleChangeTempElem}
        />
      )}
      {elem.type === "VARIABLE" && (
        <input type="text" value={elem.name} onChange={handleChangeTempElem} />
      )}
      {elem.type === "EXPRESSION" && (
        <select value={elem.value?.operator} onChange={handleChangeTempElem}>
          <option value="ADDITION">Suma</option>
          <option value="SUBTRACTION">Diferencia</option>
          <option value="MULTIPLICATION">Multiplicación</option>
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
