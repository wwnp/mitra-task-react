import { END_LOADING, SET_CATEGORY, SET_DATA, SET_MENU, START_LOADING } from "../constants";

const initialState = {
  menu: false,
  data: [],
  category: 1,
  loading: false
};

const mainpage = (state = initialState, { type, payload }) => {
  switch (type) {
    case SET_MENU:
      return { ...state, menu: payload }
    case SET_CATEGORY:
      return { ...state, category: payload }
    case SET_DATA:
      return { ...state, data: payload }
    case START_LOADING:
      return { ...state, loading: true }
    case END_LOADING:
      return { ...state, loading: false }
    default:
      return state
  }
};

export default mainpage;