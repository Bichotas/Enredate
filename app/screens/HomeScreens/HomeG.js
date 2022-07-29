import * as SecureStore from "expo-secure-store";
import React, { useState, useEffect, useContext } from "react";
import { StyleSheet, Text, View } from "react-native";
import AsyncStorageLib from "@react-native-async-storage/async-storage";
// StatesSets
import { db, getStorageData } from "../../utils/db.server";
import { setSecureStates, setStoreState } from "../../utils/states.client";
import StoreContext from "../../context/StoreContext";
import {
  getAsyncStorageData,
  setAsyncStorageData,
} from "../../utils/session.client";
export default function HomeG() {
  // Contexto de la aplicación

  const storeContext = useContext(StoreContext);

  const [first, setfirst] = useState(null);
  const [typeAccount, setTypeAccount] = useState(null);
  const [tiendita, setTiendita] = useState(null);
  const [asyncStorage, setasyncStorage] = useState("");
  console.log(storeContext.store);
  useEffect(async () => {
    setSecureStates(setfirst, setTypeAccount, setasyncStorage);
    const store = await getStorageData(first, setTiendita);
    await setStoreState(setasyncStorage);
    // let value = JSON.stringify(store);
    //console.log(await SecureStore.getItemAsync("store-data"));
    //let valor = await getAsyncStorageData("store_data");

    // Obtiene los datos de storeData del "AsyncStorage"
    // await getAsyncStorageData("storeData", setTiendita);
    // console.log(await AsyncStorageLib.getAllKeys());
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
      <Text>{"Async Data" + asyncStorage}</Text>
    </View>
  );
}
