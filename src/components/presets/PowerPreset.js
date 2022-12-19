import css from "./PowerPreset.module.css"

export const PowerPreset = ({
  id,
  operator,
  setOperator,
  elems,
  setElems,
  modifyElem,
}) => {
  return (
    <div className={css.container}>
      <div className={css.relative}>
        <div className={css.base}>{elems[0].coefficient}</div>
        <div className={css.power}>{elems[1].coefficient}</div>
      </div>
    </div>
  )
}
