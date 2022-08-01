import * as SecureStore from "expo-secure-store";
import React, { useState, useEffect, useContext } from "react";
import { Button, StyleSheet, Text, View } from "react-native";
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
  const [first, setfirst] = useState(null);
  const [typeAccount, setTypeAccount] = useState("");
  // const [tiendita, setTiendita] = useState(null);
  const [asyncStorage, setasyncStorage] = useState(null);
  useEffect(async () => {
    setSecureStates(setfirst, setTypeAccount, setasyncStorage);
    // Ya no se necesita llamar aqui a la funcion getStorageData
    // dado que ya se llama en el useEffect de la pantalla de login
    // y se guarda en el SecureStore si es que el tipo de cuenta es "vendeor"
  }, []);

  return (
    <View>
      <Text>
        {"El uid del usuario " +
          first +
          " El tipo de cuenta es: " +
          typeAccount}
      </Text>
      <Text>{asyncStorage.nameStore}</Text>
    </View>
  );
}
