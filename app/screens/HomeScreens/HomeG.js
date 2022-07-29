import * as SecureStore from "expo-secure-store";
import React, { useState, useEffect } from "react";
import { StyleSheet, Text, View } from "react-native";
import AsyncStorageLib from "@react-native-async-storage/async-storage";
// StatesSets
import { db, getStorageData } from "../../utils/db.server";
import { setSecureStates } from "../../utils/states.client";

import { getAsyncStorageData } from "../../utils/session.client";

export default function HomeG() {
  const [first, setfirst] = useState(null);
  const [typeAccount, setTypeAccount] = useState(null);
  const [tiendita, setTiendita] = useState(null);
  useEffect(async () => {
    setSecureStates(setfirst, setTypeAccount);
    const store = await getStorageData(first, setTiendita);
    // Obtiene los datos de storeData del "AsyncStorage"
    await getAsyncStorageData("storeData", setTiendita);
    const querySnapshot = await getStorageData(first, setTiendita);

    if (typeAccount === "vendedor") {
      if (tiendita == null) {
        console.log("No tiene datos de la tienda");
        // Si no tiene datos en la loca, entonces debemos de mandar a llamar a la base de datos para que nos de los datos
        console.log(querySnapshot.docs.length);
        console.log(tiendita);
      } else {
        console.log("Tiene datos de su tienda");
      }
    }

    return () => {
      console.log("Se sale de esta wea");
      setfirst(null);
      setTypeAccount(null);
      setTiendita(null);
    };
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
