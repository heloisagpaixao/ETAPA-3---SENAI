import React from "react";
import { StyleSheet, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import StackNavigator from "./navigation/examples/stack_navigator";
import BottomTabNavigator from "./navigation/examples/bottom_tab_navigator";
import DrawerNavigator from "./navigation/examples/drawer_navigator";

export default function App() {
  return (
      <NavigationContainer>
        <DrawerNavigator/>
      </NavigationContainer> 
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
