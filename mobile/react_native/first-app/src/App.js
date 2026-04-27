import React from "react";
import { StyleSheet, View } from "react-native";
import Recados from "./hooks/heloisaPaixao_exercicioHooks";

export default function App() {
  return (
    <View style={styles.container}>
      <Recados/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});