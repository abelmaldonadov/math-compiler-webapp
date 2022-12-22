import css from "./FormulaEditor.module.css"
import { Operation } from "../operation/Operation"
import { useEffect, useState } from "react"
import { getExpression } from "../../Constants"
import { Operators } from "../operators/Operators"
import { EditableElem } from "../editable-elem/EditableElem"

export const FormulaEditor = ({ formula, onSaveFormula, isDev }) => {
  const [expression, setExpression] = useState(null)
  const [selected, setSelected] = useState(null)
  const [tempSelected, setTempSelected] = useState(null)

  useEffect(() => {
    if (!formula) return
    setExpression({ ...formula })
    console.log("loaded...")
  }, [])

  useEffect(() => {
    if (!selected) return
    setTempSelected({ ...selected })
    console.log("selected", selected.id)
  }, [selected])

  const handleSaveFormula = () => {
    if (!window.confirm("¿Está segur@ de guardar de esta expresión?")) return
    onSaveFormula({ ...expression })
    console.log("saved...", expression)
  }
  const handleResetFormula = () => {
    setExpression(getExpression())
    console.log("formula reset")
  }

  const handleClickCloseExpression = (e) => {
    e.stopPropagation()
    setExpression(null)
    setSelected(null)
  }
  const handleClickCloseTempElem = (e) => {
    let newExp = { ...tempSelected }
    newExp.elems = newExp.elems.filter((item) => item.id !== e.id)
    setTempSelected(newExp)
  }

  const modifyExpression = (exp) => {
    setExpression(exp)
  }

  const handleChangeDecimalTreat = (e) => {
    setExpression({ ...expression, decimalTreat: e.target.value })
  }
  const handleChangeTempSelected = (e) => {
    setTempSelected(e)
  }
  const handleChangeTempSelectedDebug = (e) => {
    setTempSelected(JSON.parse(e.target.value))
  }
  const handleChangeTempElem = (e) => {
    let newExp = { ...expression }
    newExp.elems = newExp.elems.map((item) => (item.id === e.id ? e : item))
    handleChangeTempSelected(newExp)
  }

  const saveSelected = () => {
    if (!tempSelected) return
    setSelected(tempSelected)
  }
  const cleanTempSelected = () => {
    setTempSelected(null)
    setSelected(null)
  }

  const handleChangeOperator = (operator) => {
    let newTempSelected = { ...tempSelected }
    newTempSelected = { ...newTempSelected, operator }
    setTempSelected(newTempSelected)
  }

  return (
    <div className={css.container}>
      <div className={css.canvas} onClick={cleanTempSelected}>
        {!!expression && (
          <Operation
            expression={expression}
            handleClickCloseExpression={handleClickCloseExpression}
            modifyExpression={modifyExpression}
            selected={selected}
            setSelected={setSelected}
          />
        )}
      </div>
      {!!selected && (
        <div className={css.preview}>
          <div className={css.editor}>
            <div className={css.elems}>
              {!!tempSelected &&
                tempSelected.elems.map((item, index) => (
                  <EditableElem
                    key={item.id}
                    elem={item}
                    handleChangeTempElem={handleChangeTempElem}
                    handleClickCloseTempElem={handleClickCloseTempElem}
                    isClosable={
                      tempSelected.operator === "ADDITION" ||
                      tempSelected.operator === "MULTIPLICATION"
                    }
                  />
                ))}
            </div>
            <Operators
              tempSelected={tempSelected}
              handleChangeOperator={handleChangeOperator}
            />
            <div className={css.previewButtons}>
              <button onClick={saveSelected}>Salvar</button>
              <button onClick={cleanTempSelected}>Cerrar</button>
            </div>
          </div>
          {!!isDev && (
            <textarea
              className={css.debugger}
              value={JSON.stringify(tempSelected)}
              onChange={handleChangeTempSelectedDebug}
            />
          )}
        </div>
      )}
      <div className={css.buttons}>
        {!!expression && (
          <select
            onChange={handleChangeDecimalTreat}
            value={expression.decimalTreat}
          >
            <option value="DECIMAL">Decimal</option>
            <option value="TRUNCATE">Truncado</option>
            <option value="ROUND">Redondeado</option>
          </select>
        )}
        <button onClick={handleSaveFormula}>Guardar</button>
        <button onClick={handleResetFormula}>Reiniciar</button>
      </div>
    </div>
  )
}
