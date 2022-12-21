import css from "./AdditionPreset.module.css"
import { ResizableBox } from "../resizable-box/ResizableBox"

export const AdditionPreset = ({
  expression,
  modifyElem,
  handleClickMoreElem,
  handleClickCloseExpression,
}) => {
  return (
    <div className={css.container}>
      <span>SUM</span>
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
