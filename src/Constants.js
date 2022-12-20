import uuid from "react-uuid"

export const getElem = () => ({ ...ELEM, id: uuid() })
export const getExpression = () => ({ ...EXPRESSION, id: uuid() })

const ELEM = {
  type: "CONSTANT",
  coefficient: 1.0,
  name: "",
  value: null,
}
const EXPRESSION = {
  decimalTreat: "DECIMAL",
  operator: "ADDITION",
  elems: [{ ...getElem() }],
}
