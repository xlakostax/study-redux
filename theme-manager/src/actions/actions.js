export const CHANGE_BACKGROUND_COLOR = "CHANGE_BACKGROUND_COLOR"
export const CHANGE_FONT_COLOR = "CHANGE_FONT_COLOR"

export const actionBackgroundColor = (color) => {
  return {
    type: CHANGE_BACKGROUND_COLOR,
    color
  }
}

export const actionFontColor = (color) => {
  return {
    type: CHANGE_FONT_COLOR,
    color
  }
}