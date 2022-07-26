import { Button, NativeBaseProvider } from "native-base";
import React, { useContext, useState } from "react";
import { View, StyleSheet, Image, Text } from "react-native";
function AccountOptionScreen({ navigation }) {

  const vendedor = () => {
    navigation.navigate("Register", { tipoCuenta: "vendedor" });
  };
  const comprador = () => {
    navigation.navigate("Register", { tipoCuenta: "comprador" });
  };

  return (
      <NativeBaseProvider>

      {/* Contenedor  */}
      <View style={styles.container}>
        {/* Imagen */}
        <View style={styles.imageContainer}>
          <Image
            source={require("../../../assets/enredate.png")}
            resizeMode="center"
            style={styles.image}
          ></Image>
        </View>
        {/* Texto */}
        <Text style={styles.text}>¿Qué te gustaría hacer?</Text>
        {/* Botones */}
        <View style={styles.buttonsContainer}>
          <View style={styles.button1}>
            <Button onPress={comprador} >Comprar</Button>
          </View>
          <View style={styles.button2}>
            <Button
              onPress={vendedor}
            >Vender</Button>
          </View>
        </View>
      </View>
      </NativeBaseProvider>
  );
}
const styles = StyleSheet.create({
  optionScreen: {
    backgroundColor: "#00bcd4",
    overflow: "hidden",
  },
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
  },
  imageContainer: {
    justifyContent: "center",
    alignItems: "center",
    width: "90%",
    height: "30%",
    padding: 20,
    borderRadius: 30,
    backgroundColor: "#00bcd4",
    marginBottom: 15,
  },
  image: {
    width: 300,
  },
  text: {
    padding: 10,
    fontSize: 24,
    color: "#000",
    fontWeight: "bold",
    textAlign: "center",
  },
  buttonsContainer: {
    flex: 0.75,
    width: "100%",
    justifyContent: "space-evenly",
    paddingBottom: 20,
    paddingLeft: 20,
    paddingRight: 20,
  },
  button1: {
    width: "60%",
  },
  button2: {
    marginLeft: "40%",
    width: "60%",
  },
});
export default AccountOptionScreen;
