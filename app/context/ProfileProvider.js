import ProfileContext from "./ProfileContext";
import React, { useState } from "react";
const StoreProvider = ({ children }) => {
  const [profile, setProfile] = useState("");
  return (
    <ProfileContext.Provider value={{ store, setStore }}>
      {children}
    </ProfileContext.Provider>
  );
};

export default StoreProvider;
