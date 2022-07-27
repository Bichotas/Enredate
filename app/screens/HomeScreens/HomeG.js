import * as SecureStore from "expo-secure-store";
import React, { useState, useEffect } from "react";
import { StyleSheet, Text, View } from "react-native";
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
  useEffect(() => {
    SecureStore.getItemAsync("uid").then((token) => {
      console.log(token);
      setfirst(token);
    });
    return () => {
      first;
    };
  }, []);

  return (
    <View>
      <Text>{first}</Text>
    </View>
  );
}
