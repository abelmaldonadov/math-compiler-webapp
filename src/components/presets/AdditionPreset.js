import css from "./AdditionPreset.module.css"
import { ResizableBox } from "../resizable-box/ResizableBox"

export const AdditionPreset = ({
  expression,
  modifyElem,
  handleClickMoreElem,
  handleClickCloseExpression,
  selected,
  setSelected,
  variables,
}) => {
  return (
    <div className={css.container}>
      <span>SUM</span>
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
      <button className={css.more} onClick={handleClickMoreElem}>
        +
      </button>
      <span className={css.close} onClick={handleClickCloseExpression}>
        &times;
      </span>
    </div>
  )
}
