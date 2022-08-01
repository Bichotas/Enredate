//import { Button, NativeBaseProvider, View } from "native-base";
import React, { useEffect, useState } from "react";
import { View, Button } from "react-native";
// Navigation
import { createDrawerNavigator } from "@react-navigation/drawer";
import { NavigationContainer } from "@react-navigation/native";
import { signOutUser, auth } from "../../utils/auth.client";

import { signOut } from "firebase/auth";
import {
  deleteUserPropStore,
  getUserPropStore,
} from "../../utils/session.client";
import AsyncStorageLib from "@react-native-async-storage/async-storage";
import HomeG from "../../screens/HomeScreens/HomeG";
// --- Pantallas de ejemplo ---

function HomeScreen({ navigation }) {
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
          await deleteUserPropStore();
        }}
        title="SignOut"
      />
    </View>
  );
}
const Drawer = createDrawerNavigator();

// Se crea un componente de clase o un COMPONENTE CLASS
export default function DrawerNavigator() {
  const [tiendita, setTiendita] = useState(null);

  useEffect(async () => {
    console.log("DrwerNavigator");
    const value = await AsyncStorageLib.getItem("@store");
    setTiendita(value);

    return () => {
      console.log("Return clean");
    };
  }, []);

  return (
    <Drawer.Navigator initialRouteName="Home">
      {/* En cada Screen va a estar un stack, para acceder a las pantallas */}

      {/* --- En cada Item del Drawer debe de haber un stack */}
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
