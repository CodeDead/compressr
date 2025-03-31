import { SET_PAGE_INDEX, SET_THEME_TYPE } from "./Actions/ActionTypes/index.js";

const MainReducer = (state, action) => {
  switch (action.type) {
    case SET_PAGE_INDEX:
      return {
        ...state,
        pageIndex: action.payload,
      };
    case SET_THEME_TYPE:
      localStorage.themeType = action.payload;
      return {
        ...state,
        themeType: action.payload,
      };
    default:
      throw new Error();
  }
};

export default MainReducer;
