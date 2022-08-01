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
    let uid = first;
    let tipoCuenta = typeAccount;
    let datosTienda = asyncStorage;

    if (datosTienda == null && tipoCuenta === "vendedor") {
      console.log("Se supone que no hay datos y la cuenta es vendedor");
      //let dataStorage = await getStorageData(uid);
      //if (dataStorage.docs.length <= 0) {
      //console.log("4- El storage tiene algo");
      //console.log(storage.docs[0].data());
      // Si es que si hay que checar que el storage tenga algo
      // }
    } else {
      console.log("Si hay datos o no es vendedor");
    }
    // checkStoreExists(uid, tipoCuenta, datosTienda);
    //checkStoreExists(first, typeAccount, asyncStorage);
  }, []);

  return (
    <View>
      <Text>
        {"El uid del usuario " +
          first +
          " El tipo de cuenta es: " +
          typeAccount}
      </Text>
      {asyncStorage == null ? (
        <Button title="No hay datos" />
      ) : (
        <Text>Nombre de la tienda: {asyncStorage.nameStore}</Text>
      )}
    </View>
  );
}
