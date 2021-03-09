/* Types of actions */

export const INCREMENT = "INCREMENT"
export const DECREMENT = "DECRECMENT"

/* Actions generators */

export const applyIncrement = (value) => {
  return {
    type: INCREMENT,
    value
  }
}

export const applyDecrement = (value) => {
  return {
    type: DECREMENT,
    value
  }
}