import {
  SET_ALLOW_COOKIES,
  SET_PAGE_INDEX,
  SET_THEME_TYPE,
} from "./Actions/ActionTypes/index.js";

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
    case SET_ALLOW_COOKIES:
      localStorage.allowCookies = action.payload;
      return {
        ...state,
        allowCookies: action.payload,
      };
    default:
      throw new Error();
  }
};

export default MainReducer;
