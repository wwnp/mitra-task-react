import { TEST } from "../constants";

const initialState = {
  testMore: 1
};

const morepage = (state = initialState, { type, payload }) => {
  switch (type) {
    case TEST:
      return { ...state }
    default:
      return state
  }
};

export default morepage;