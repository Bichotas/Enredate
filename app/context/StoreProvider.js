import StoreContext from "./StoreContext";
import React, { useState } from "react";
const StoreProvider = ({ children }) => {
  const [store, setStore] = useState("");
  return (
    <StoreContext.Provider value={{ store, setStore }}>
      {children}
    </StoreContext.Provider>
  );
};

export default StoreProvider;
