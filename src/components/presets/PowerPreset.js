import css from "./PowerPreset.module.css"
import { ResizableBox } from "../resizable-box/ResizableBox"

export const PowerPreset = ({
  expression,
  modifyElem,
  handleClickCloseExpression,
  selected,
  setSelected,
  variables,
}) => {
  return (
    <div className={css.container}>
      <span>POW</span>
      {expression.elems.map((item) => (
        <ResizableBox
          key={item.id}
          elem={item}
          modifyElem={modifyElem}
          selected={selected}
          setSelected={setSelected}
          variables={variables}
        />
      ))}
      <span className={css.close} onClick={handleClickCloseExpression}>
        &times;
      </span>
    </div>
  )
}
