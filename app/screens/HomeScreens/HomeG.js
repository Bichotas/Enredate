import * as SecureStore from "expo-secure-store";
import React, { useState, useEffect, useContext } from "react";
import { StyleSheet, Text, View } from "react-native";
import AsyncStorageLib from "@react-native-async-storage/async-storage";
// StatesSets
import { db, getStorageData } from "../../utils/db.server";
import { setSecureStates } from "../../utils/states.client";
import StoreContext from "../../context/StoreContext";
import { getAsyncStorageData } from "../../utils/session.client";
export default function HomeG() {
  // Contexto de la aplicación

  const storeContext = useContext(StoreContext);

  const [first, setfirst] = useState(null);
  const [typeAccount, setTypeAccount] = useState(null);
  const [tiendita, setTiendita] = useState(null);
  console.log(storeContext.store);
  useEffect(async () => {
    setSecureStates(setfirst, setTypeAccount);
    const store = await getStorageData(first, setTiendita);

    let value = JSON.stringify(store);
    await SecureStore.setItemAsync("store-data", "valor-caca");
    console.log(await SecureStore.getItemAsync("store-data"));
    // Obtiene los datos de storeData del "AsyncStorage"
    await getAsyncStorageData("storeData", setTiendita);
    const querySnapshot = await getStorageData(first, setTiendita);
  }, []);

  return (
    <View>
      <Text>
        {"El uid del usuario " +
          first +
          " El tipo de cuenta es: " +
          typeAccount}
      </Text>
    </View>
  );
}
