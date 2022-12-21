import css from "./DivisionPreset.module.css"
import { ResizableBox } from "../resizable-box/ResizableBox"

export const DivisionPreset = ({
  expression,
  modifyElem,
  handleClickCloseExpression,
  selected,
  setSelected,
}) => {
  return (
    <div className={css.container}>
      <span>DIV</span>
      {expression.elems.map((item) => (
        <ResizableBox
          key={item.id}
          elem={item}
          modifyElem={modifyElem}
          selected={selected}
          setSelected={setSelected}
        />
      ))}
      <span className={css.close} onClick={handleClickCloseExpression}>
        &times;
      </span>
    </div>
  )
}
