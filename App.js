//import { Button, NativeBaseProvider, View } from "native-base";
import React, { useState, createContext, useContext, useEffect } from "react";
import { Drawer } from "./app/navigation/DrawerNavigation";
import { AuthNavigation } from "./app/navigation/AuthNavigation";
import { NavigationContainer } from "@react-navigation/native";
import { onAuthStateChanged } from "firebase/auth";
import { View, ActivityIndicator } from "react-native";
import { auth } from "./app/utils/auth.client";

import AuthenticatedUserContext from "./app/context/AuthenticatedUserContext";
import StoreContext from "./app/context/StoreContext";
import ProfileContext from "./app/context/ProfileContext";
const AuthenticatedUserProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  return (
    <AuthenticatedUserContext.Provider value={{ user, setUser }}>
      {children}
    </AuthenticatedUserContext.Provider>
  );
};

function RootNavigator() {
  const { user, setUser } = useContext(AuthenticatedUserContext);
  const [isLoading, setIsLoading] = useState(true);
  const [store, setStore] = useState(null);
  const [profile, setProfile] = useState(null);
  useEffect(() => {
    // onAuthStateChanged returns an unsubscriber
    const unsubscribeAuth = onAuthStateChanged(
      auth,
      async (authenticatedUser) => {
        authenticatedUser ? setUser(authenticatedUser) : setUser(null);
        setIsLoading(false);
      }
    );
    // unsubscribe auth listener on unmount
    return unsubscribeAuth;
  }, [user]);
  if (isLoading) {
    return (
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <ActivityIndicator size="large" />
      </View>
    );
  }

  return (
    <NavigationContainer>
      <ProfileContext.Provider value={{ profile, setProfile }}>
        <StoreContext.Provider value={{ store, setStore }}>
          {user ? <Drawer /> : <AuthNavigation />}
        </StoreContext.Provider>
      </ProfileContext.Provider>
    </NavigationContainer>
  );
}

export default class App extends React.Component {
  render() {
    return (
      <AuthenticatedUserProvider>
        <RootNavigator />
      </AuthenticatedUserProvider>
    );
  }
}
