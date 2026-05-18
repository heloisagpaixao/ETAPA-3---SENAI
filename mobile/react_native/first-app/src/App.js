import React from "react";
import { StyleSheet, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import StackNavigator from "./navigation/examples/stack_navigator";

export default function App() {
  return (
      <NavigationContainer>
        <StackNavigator />
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
