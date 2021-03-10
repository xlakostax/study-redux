import {actionFontColor, actionBackgroundColor, CHANGE_BACKGROUND_COLOR, CHANGE_FONT_COLOR} from "../actions/actions.js"

const initialState = {
  backgroundColor: "#FE1200",
  color: "#EA13F2",
}

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case CHANGE_BACKGROUND_COLOR: 
      return {
        ...state,
        backgroundColor: "#CE4123"
      }
    case CHANGE_FONT_COLOR:
      return {
        ...state,
        color: "#23FE51"
      }
    default: 
      return state
  }
}

export default reducer;