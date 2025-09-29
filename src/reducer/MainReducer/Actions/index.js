import { SET_PAGE_INDEX } from "./ActionTypes/index.js";

export const setPageIndex = (index) => ({
  type: SET_PAGE_INDEX,
  payload: index,
});
