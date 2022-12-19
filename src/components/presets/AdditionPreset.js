import css from "./AdditionPreset.module.css"
import { ResizableBox } from "../resizable-box/ResizableBox"

export const AdditionPreset = ({
  id,
  operator,
  elems,
  modifyElem,
  handleClickMoreElem,
  handleClickCloseElem,
}) => {
  return (
    <div className={css.container}>
      <span>{operator}</span>
      {elems.map((item) => (
        <ResizableBox key={item.id} elem={item} modifyElem={modifyElem} />
      ))}
      <button onClick={handleClickMoreElem}>+</button>
      <span className={css.close} onClick={() => handleClickCloseElem(id)}>
        &times;
      </span>
    </div>
  )
}
