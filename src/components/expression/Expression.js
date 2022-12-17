import css from "./Expression.module.css"
import { Term } from "../term/Term"
import { getTerm } from "../../Constants"
import { useEffect, useState } from "react"

export const Expression = ({ expression, setExpression }) => {
  const [id, setId] = useState(expression.id)
  const [decimalTreatment, setDecimalTreatment] = useState(
    expression.decimalTreatment
  )
  const [power, setPower] = useState(expression.power)
  const [terms, setTerms] = useState(expression.terms)

  useEffect(() => {
    setExpression({ id, decimalTreatment, power, terms })
  }, [decimalTreatment, power, terms])

  const handleChangePower = (e) => {
    setPower(e.target.value)
  }
  const handleClickMoreTerm = () => {
    let newTerms = [...terms]
    newTerms.push(getTerm())
    setTerms(newTerms)
  }
  const handleClickCloseTerm = (id) => {
    let newTerms = [...terms]
    newTerms = newTerms.filter((item) => item.id !== id)
    setTerms(newTerms)
  }

  const modifyTerm = (t) => {
    let newTerms = [...terms]
    newTerms = newTerms.map((item) => (item.id === t.id ? t : item))
    setTerms(newTerms)
  }

  return (
    <div className={css.container}>
      <span className={css.delimiter}>[</span>
      {terms.map((item) => (
        <Term
          key={item.id}
          term={item}
          handleClickCloseTerm={handleClickCloseTerm}
          onModifyTerm={modifyTerm}
        />
      ))}
      <button className={css.more} onClick={handleClickMoreTerm}>
        +
      </button>
      <span className={css.delimiter}>]</span>
      <input
        className={css.power}
        type="text"
        value={power}
        onChange={handleChangePower}
      />
    </div>
  )
}
