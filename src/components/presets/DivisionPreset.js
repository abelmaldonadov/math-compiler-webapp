import css from "./DivisionPreset.module.css"
import { ResizableBox } from "../resizable-box/ResizableBox"

export const DivisionPreset = ({
  expression,
  modifyElem,
  handleClickCloseExpression,
  selected,
  setSelected,
  variables,
}) => {
  return (
    <div className={css.container}>
      <span>DIV</span>
      <div>
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
      </div>
      <span className={css.close} onClick={handleClickCloseExpression}>
        &times;
      </span>
    </div>
  )
}
