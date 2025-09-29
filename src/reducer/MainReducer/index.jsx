import { SET_PAGE_INDEX } from "./Actions/ActionTypes/index.js";

const MainReducer = (state, action) => {
  switch (action.type) {
    case SET_PAGE_INDEX:
      return {
        ...state,
        pageIndex: action.payload,
      };
    default:
      throw new Error();
  }
};

export default MainReducer;
