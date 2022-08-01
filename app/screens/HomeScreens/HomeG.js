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
  const [user, setUser] = useState(null);

  useEffect(async () => {
    setSecureStates(setfirst, setTypeAccount, setUser);
    // const value = await AsyncStorageLib.getItem("@store");
    // setTiendita(value);
  }, []);

  return (
    <View>
      <Text>
        {"El uid del usuario " +
          first +
          " El tipo de cuenta es: " +
          typeAccount}
      </Text>
      <Text>Tienda: {tiendita}</Text>
    </View>
  );
}
