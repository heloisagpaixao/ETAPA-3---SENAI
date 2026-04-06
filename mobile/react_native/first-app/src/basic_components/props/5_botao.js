import React from "react";
import { TouchableOpacity, Text, StyleSheet } from "react-native";

export default function Botao(props) {
  return (
    <TouchableOpacity style={styles.botao}>
      <Text style={styles.texto}> {props.titulo} </Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  botao: {
    backgroundColor: "teal",
    padding: 12,
    margin: 10,
  },
  texto: {
    color: "white",
    fontWeight: "bold",
  },
});