import css from "./SubtractionPreset.module.css"
import { ResizableBox } from "../resizable-box/ResizableBox"

export const SubtractionPreset = ({
  id,
  elems,
  modifyElem,
  handleClickCloseExpression,
}) => {
  return (
    <div className={css.container}>
      <span>DIF</span>
      {elems.map((item) => (
        <ResizableBox key={item.id} elem={item} modifyElem={modifyElem} />
      ))}
      <span className={css.close} onClick={handleClickCloseExpression}>
        &times;
      </span>
    </div>
  )
}
