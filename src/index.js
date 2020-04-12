import React, { useContext, useState } from "react";

const GlobalContext = React.createContext();

export const useGlobix = () => {
  const { globalState, setGlobalState } = useContext(GlobalContext);
  return { globalState, setGlobalState };
};

export const GlobixProvider = ({ children, initialState = {} }) => {
  const [globalState, setGlobalState] = useState(initialState);
  return (
    <GlobalContext.Provider value={{ globalState, setGlobalState }}>
      {children}
    </GlobalContext.Provider>
  );
};
