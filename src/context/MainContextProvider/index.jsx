import React from "react";
import { createContext, useReducer } from "react";
import MainReducer from "../../reducer/MainReducer/index.jsx";

const themeType = localStorage.themeType ? localStorage.themeType : "auto";

const initialState = {
  pageIndex: 0,
  themeType,
};

export const MainContext = createContext(initialState);

const MainContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(MainReducer, initialState);

  return (
    <MainContext.Provider value={[state, dispatch]}>
      {children}
    </MainContext.Provider>
  );
};

export default MainContextProvider;
