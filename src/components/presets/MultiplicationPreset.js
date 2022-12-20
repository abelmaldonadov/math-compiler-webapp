import css from "./MultiplicationPreset.module.css"
import { ResizableBox } from "../resizable-box/ResizableBox"

export const MultiplicationPreset = ({
  id,
  elems,
  modifyElem,
  handleClickCloseExpression,
  handleClickMoreElem,
}) => {
  return (
    <div className={css.container}>
      <span>PRO</span>
      {elems.map((item) => (
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
