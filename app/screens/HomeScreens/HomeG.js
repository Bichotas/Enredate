import * as SecureStore from "expo-secure-store";
import React, { useState, useEffect } from "react";
import { StyleSheet, Text, View } from "react-native";

import AsyncStorageLib from "@react-native-async-storage/async-storage";
// StatesSets
import { setSecureStates } from "../../utils/states.client";
// if (typeAccount == "vendedor") {
// Vamos a mandar a buscar si existe una tienda con el uid del usuario
// Si no hay, entonces podemos rendereizar un modal, o una pantalla con options={{modal}}
//    -- Adentro de esto podemos poner una condiciopon si nos devuelve algo
//      -- Si nos devuelve un documento, entonces podemos guardar este objeto en el "asyncStorage"
//      -- Para luego utilizar los datos en la parte de "MyStore"
//      __ Si no existe, entonces podemos navegar a la pantalla "CreateStore" que va  tener el tipo modal
//}

export default function HomeG() {
  const [first, setfirst] = useState(null);
  const [typeAccount, setTypeAccount] = useState(null);
  const [value, setvalue] = useState(null);

  // Funcion agrupada
  // Se colocan los sets para los valores

  useEffect(() => {
    setSecureStates(setfirst, setTypeAccount);
    // Antes de esto, podemos checar si existe una propiedad acerca del store o si esta propiedad es nula, si es nula
    const getData = async () => {
      try {
        const value = await AsyncStorageLib.getItem("store");
        if (value !== null) {
          // value = JSON.parse(value);
          console.log("value", value);
          setvalue(value);
        }
      } catch (error) {}
    };
    getData();

    if (value == null) {
      // Mandamos a llamar al documento para ver si existe
    } else {
      // Si existe algun valor, entonces no va a pasar nada
      // Estructura de codigo para checar si existe
      // https://stackoverflow.com/questions/57877154/flutter-dart-how-can-check-if-a-document-exists-in-firestore
    }
    // Entonces podemos pasar a la siguiente y asi sucesivamente
    if (typeAccount == "vendedor") {
      console.log("Es vendedor___________");
      // Hacemos la llamada
      // Checamos si existe.

      // Si nos devuelve algo, entonces podemos guardar el docuemnto en el async storage
    }
    // -- Todo esto para evitar llamadas a la base de firestore inecesarias -- Y que solo llame una vez en dado caso que no se tenga una tienda creada
  }, []);

  return (
    <View>
      <Text>
        {"El uid del usuario " +
          first +
          " El tipo de cuenta es: " +
          typeAccount}
      </Text>
      <Text>{"El valor es: " + value}</Text>
    </View>
  );
}
