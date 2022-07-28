import * as SecureStore from "expo-secure-store";
import React, { useState, useEffect } from "react";
import { StyleSheet, Text, View } from "react-native";
import AsyncStorageLib from "@react-native-async-storage/async-storage";
// StatesSets
import { db, getStorageData, getStoreDoc } from "../../utils/db.server";
import { setSecureStates } from "../../utils/states.client";

import {
  collection,
  where,
  getDocs,
  ref,
  getDoc,
  query,
} from "firebase/firestore";

export default function HomeG() {
  const [first, setfirst] = useState(null);
  const [typeAccount, setTypeAccount] = useState(null);
  const [tiendita, setTiendita] = useState();
  useEffect(async () => {
    setSecureStates(setfirst, setTypeAccount);
    const store = await getStorageData(first, setTiendita);
    console.log("TIENDA");
    console.log(tiendita);
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
