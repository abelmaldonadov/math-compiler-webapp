import css from "./DivisionPreset.module.css"
import { ResizableBox } from "../resizable-box/ResizableBox"

export const DivisionPreset = ({
  id,
  elems,
  modifyElem,
  handleClickCloseExpression,
}) => {
  return (
    <div className={css.container}>
      <span>DIV</span>
      {elems.map((item) => (
        <ResizableBox key={item.id} elem={item} modifyElem={modifyElem} />
      ))}
      <span className={css.close} onClick={handleClickCloseExpression}>
        &times;
      </span>
    </div>
  )
}
