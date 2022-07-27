import * as SecureStore from "expo-secure-store";

import React from "react";
import { View, Text } from "react-native";
import { getUserUid } from "../../utils/session.client";

export default class HomeG extends React.Component {
  render() {
    return (
      <View>
        <Text>Home</Text>
      </View>
    );
  }
}
