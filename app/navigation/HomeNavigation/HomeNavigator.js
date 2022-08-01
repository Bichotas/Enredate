import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import CreateStore from "../../screens/HomeScreens/CreateStore";
import HomeG from "../../screens/HomeScreens/HomeG";
import { Button } from "react-native";
const Stack = createNativeStackNavigator();

const HomeNavigator = () => {
  return (
    <Stack.Navigator
      initialRouteName="HomeG"
      screenOptions={{ headerShown: false }}
    >
      <Stack.Screen name="HomeG" component={HomeG} />
      <Stack.Screen
        name="Create"
        component={CreateStore}
        options={({ navigation }) => ({
          presentation: "containedModal",
          headerLeft: () => <Button title="Back" onPress={navigation.goBack} />,
        })}
      />
    </Stack.Navigator>
  );
};
export default HomeNavigator;
