import { SET_ERROR_IMGS } from "../constants"

const initialState = {
  errorImgs: '',
}
const errors = (state = initialState, action) => {
  switch (action.type) {
    case SET_ERROR_IMGS:
      return { ...state, errorImgs: action.payload }
    default:
      return state
  }
}
export default errors