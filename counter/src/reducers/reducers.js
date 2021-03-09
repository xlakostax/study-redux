import {
  INCREMENT,
  DECREMENT,
} from "../actions/actions.js"

const initialState = {
  value: 0
}

const counterApp = (state = initialState, action) => {
  switch (action.type) {
    case INCREMENT:
      return {
        ...state,
        value: state.value + 1
      }
    case DECREMENT:
      return {
        ...state,
        value: state.value - 1
      }
    default:
      return state
  }
}

export default counterApp;