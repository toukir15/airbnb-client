import { createContext, useState } from "react";

export const GlobalContext = createContext();

export const GlobalProvider = ({ children }) => {
  const [isToggleSearch, setIsToggleSearch] = useState(false);

  // global info
  const GlobalInfo = {
    isToggleSearch,
    setIsToggleSearch,
  };

  return (
    <GlobalContext.Provider value={GlobalInfo}>
      {children}
    </GlobalContext.Provider>
  );
};
