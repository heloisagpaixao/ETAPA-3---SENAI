import React from "react";
import { StyleSheet, View } from "react-native";
import ListaDeCompras from "./jsx_textInput_flatList/exercicio-aula6/listaDeCompras";

export default function App() {
  return (
    <View style={styles.container}>
      <ListaDeCompras />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
