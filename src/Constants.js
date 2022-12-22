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
  elems: [getElem(), getElem()],
}

export const filterElemsByOperator = (elems, operator) => {
  return elems.filter((item, index) => {
    if (
      operator === "SUBTRACTION" ||
      operator === "DIVISION" ||
      operator === "POWER" ||
      operator === "ROOT"
    ) {
      return index < 2
    } else {
      return true
    }
  })
}
