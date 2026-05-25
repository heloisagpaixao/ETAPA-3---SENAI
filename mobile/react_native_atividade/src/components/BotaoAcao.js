import { StyleSheet, Text, TouchableOpacity } from "react-native";

export default function BotaoAcao({ texto, onPress, ativo }) {
  return (
    <TouchableOpacity
      style={[styles.botao, ativo && styles.botaoAtivo]}
      onPress={onPress}
    >
      <Text style={styles.texto}>{texto}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  botao: {
    backgroundColor: "#FFEAA7",
    borderRadius: 20,
    paddingVertical: 14,
    alignItems: "center",
    marginHorizontal: 16,
    marginBottom: 16,
  },
  botaoAtivo: {
    backgroundColor: "#FF7675",
  },
  texto: {
    fontSize: 15,
    fontWeight: "bold",
    color: "#2D3436",
  },
});
