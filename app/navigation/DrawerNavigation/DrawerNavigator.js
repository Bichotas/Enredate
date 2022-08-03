//import { Button, NativeBaseProvider, View } from "native-base";
import React, { useContext, useEffect, useState } from "react";
import { View, Button, Text } from "react-native";
// Navigation
import { createDrawerNavigator } from "@react-navigation/drawer";
import { NavigationContainer } from "@react-navigation/native";
import { signOutUser, auth } from "../../utils/auth.client";

import { signOut } from "firebase/auth";

import * as SecureStore from "expo-secure-store";
import HomeG from "../../screens/HomeScreens/HomeG";
// --- Pantallas de ejemplo ---
import ProfileContext from "../../context/ProfileContext";
import HomeNavigator from "../HomeNavigation/HomeNavigator";
import AuthenticatedUserContext from "../../context/AuthenticatedUserContext";
import StoreContext from "../../context/StoreContext";
import CustomDrawer from "../../components/CustomDrawer/CustomDrawer";
function HomeScreen({ navigation }) {
  const { store, setStore } = useContext(StoreContext);
  useEffect(() => {
    console.log(store);
  }, []);

  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Button
        onPress={() => navigation.navigate("MyStore")}
        title="Go to notifications"
      />
    </View>
  );
}

function MyStoreScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Button onPress={() => navigation.goBack()} title="Go back home" />
    </View>
  );
}

function OrderScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Button onPress={() => navigation.goBack()} title="Go back home" />
    </View>
  );
}
function CartScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Button onPress={() => navigation.goBack()} title="Go back home" />
    </View>
  );
}

function ConfigurationScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Button onPress={() => navigation.goBack()} title="Go back home" />
    </View>
  );
}

function LogoutScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Button
        onPress={async () => {
          signOut(auth);
          await SecureStore.deleteItemAsync("uid").then(() => {
            console.log("Se elimino el uid");
          });
          await SecureStore.deleteItemAsync("typeAccount").then(() => {
            console.log("Se ha borrado el tipo de cuenta");
          });
          await SecureStore.deleteItemAsync("store-data").then(() => {
            console.log("Se ha borrado el --store-data--");
          });

          console.log(await SecureStore.getItemAsync("uid"));
        }}
        title="SignOut"
      />
    </View>
  );
}
const Drawer = createDrawerNavigator();
// Se crea un componente de clase o un COMPONENTE CLASS
export default function DrawerNavigator() {
  const Auth = useContext(AuthenticatedUserContext);
  const Profile = useContext(ProfileContext);
  const [name, setName] = useState();
  useEffect(() => {
    console.log("DrwerNavigator");

    return () => {
      console.log("Return clean");
    };
  }, []);

  return (
    <Drawer.Navigator
      initialRouteName="Home"
      drawerContent={(props) => <CustomDrawer {...props} />}
    >
      {/* En cada Screen va a estar un stack, para acceder a las pantallas */}

      {/* --- En cada Item del Drawer debe de haber un stack */}
      <Drawer.Screen name={Auth.user.displayName} component={OrderScreen} />
      <Drawer.Screen name="Home" component={HomeScreen} />
      <Drawer.Screen name="MyStore" component={MyStoreScreen} />
      <Drawer.Screen name="Orders" component={HomeG} />
      <Drawer.Screen name="Cart" component={CartScreen} />
      <Drawer.Screen name="Configuration" component={ConfigurationScreen} />
      {/* --- En cada Item del Drawer debe de haber un stack */}

      {/* Faltaría  el logout -- Se pone como si fuera un componente para tener noción */}
      {/* <Drawer.Screen name="Logout" component={LogoutScreen} /> */}
      <Drawer.Screen name="Logout" component={LogoutScreen} />

      {/* --- Usar el flujo de autenticación --- */}
      {/* https://reactnavigation.org/docs/auth-flow */}
    </Drawer.Navigator>
  );
}
