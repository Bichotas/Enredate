import React from "react";
import { View, Text, Image, ImageBackground } from "react-native";
import {
  DrawerContentScrollView,
  DrawerItemList,
} from "@react-navigation/drawer";
import { Heading, NativeBaseProvider } from "native-base";

export default function CustomDrawer(props) {
  return (
    <NativeBaseProvider>
      <View style={{ flex: 1 }}>
        <DrawerContentScrollView
          {...props}
          contentContainerStyle={{ backgroundColor: "#8200d6" }}
        >
          <ImageBackground
            source={require("../../src/img/drawer.jpg")}
            style={{ padding: 30 }}
          >
            <Heading color={"gray.200"}>Usuario</Heading>
          </ImageBackground>
          <View style={{ backgroundColor: "#fff" }}>
            <DrawerItemList {...props} />
          </View>
        </DrawerContentScrollView>
        <View
          style={{ padding: 20, borderTopWidth: 1, borderTopColor: "#ccc" }}
        >
          <Text>Logout</Text>
        </View>
      </View>
    </NativeBaseProvider>
  );
}
