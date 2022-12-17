import uuid from "react-uuid"

export const getElem = () => ({ ...ELEM, id: uuid() })
export const getTerm = () => ({ ...TERM, id: uuid() })
export const getExpression = () => ({ ...EXPRESSION, id: uuid() })

const ELEM = {
  type: "CONSTANT",
  power: 1.0,
  name: "",
  operator: "MULTIPLICATION",
  coefficient: 1.0,
  variable: null,
}
const TERM = {
  operator: "ADDITION",
  power: 1.0,
  elems: [{ ...getElem() }],
}
const EXPRESSION = {
  decimalTreatment: "DECIMAL",
  power: 1.0,
  terms: [{ ...getTerm() }],
}
