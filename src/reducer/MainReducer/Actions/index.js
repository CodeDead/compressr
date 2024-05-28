import {
  SET_ALLOW_COOKIES,
  SET_PAGE_INDEX,
  SET_THEME_TYPE,
} from "./ActionTypes/index.js";

export const setPageIndex = (index) => ({
  type: SET_PAGE_INDEX,
  payload: index,
});

export const setThemeType = (type) => ({
  type: SET_THEME_TYPE,
  payload: type,
});

export const setAllowCookies = (allow) => ({
  type: SET_ALLOW_COOKIES,
  payload: allow,
});
