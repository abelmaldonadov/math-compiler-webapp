import css from "./RootPreset.module.css"
import { ResizableBox } from "../resizable-box/ResizableBox"

export const RootPreset = ({
  expression,
  modifyElem,
  handleClickCloseExpression,
}) => {
  return (
    <div className={css.container}>
      <span>RAD</span>
      {expression.elems.map((item) => (
        <ResizableBox key={item.id} elem={item} modifyElem={modifyElem} />
      ))}
      <span className={css.close} onClick={handleClickCloseExpression}>
        &times;
      </span>
    </div>
  )
}
