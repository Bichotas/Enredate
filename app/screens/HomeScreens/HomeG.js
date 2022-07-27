import * as SecureStore from "expo-secure-store";

import React from "react";
import { View, Text, Button } from "react-native";

export default class HomeG extends React.Component {
  componentDidMount() {
    SecureStore.getItemAsync("uid").then((token) => {
      console.log(token);
    });
  }
  render() {
    return (
      <View>
        <Text>homgG -- Orders</Text>
      </View>
    );
  }
}
