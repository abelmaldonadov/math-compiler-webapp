import css from "./MultiplicationPreset.module.css"
import { ResizableBox } from "../resizable-box/ResizableBox"

export const MultiplicationPreset = ({
  expression,
  modifyElem,
  handleClickCloseExpression,
  handleClickMoreElem,
}) => {
  return (
    <div className={css.container}>
      <span>PRO</span>
      {expression.elems.map((item) => (
        <ResizableBox key={item.id} elem={item} modifyElem={modifyElem} />
      ))}
      <button className={css.more} onClick={handleClickMoreElem}>
        +
      </button>
      <span className={css.close} onClick={handleClickCloseExpression}>
        &times;
      </span>
    </div>
  )
}
