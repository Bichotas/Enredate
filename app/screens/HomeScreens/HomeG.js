import * as SecureStore from "expo-secure-store";

import React from "react";
import { View, Text, Button } from "react-native";

export default class HomeG extends React.Component {
  // Checar como poner atrubutos en las clases
  componentDidMount() {
    SecureStore.getItemAsync("uid").then((token) => {
      console.log(token);
    });
  }
  render() {
    return (
      <View>
        <Text>HomeG -- Orders</Text>
      </View>
    );
  }
}
