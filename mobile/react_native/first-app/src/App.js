import React from "react";
import { StyleSheet, View } from "react-native";
import Botao from "./basic_components/props/5_botao";

export default function App() {
  return (
    <View style={styles.container}>
      <Botao titulo="Entrar" />
      <Botao titulo="Sair" />
      <Botao titulo="Cadastrar" />
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