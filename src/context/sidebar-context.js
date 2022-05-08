import { createContext, useContext, useState } from "react";

const SideContext = createContext();
const useSide = () => useContext(SideContext);

const SideContextProvider = ({ children }) => {
  const [showSidebar, setShowSidebar] = useState(true);
  const toggleSidebar = () => {
    console.log(showSidebar);
    setShowSidebar(!showSidebar);
  };
  return (
    <SideContext.Provider
      value={{ toggleSidebar, showSidebar, setShowSidebar }}
    >
      {children}
    </SideContext.Provider>
  );
};

export { SideContextProvider, useSide };
