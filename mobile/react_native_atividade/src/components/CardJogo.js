import { StyleSheet, Text, View } from "react-native";

export default function CardJogo({ titulo, genero, plataforma, nota }) {
  return (
    <View style={styles.card}>
      <Text style={styles.titulo}>{titulo}</Text>
      <Text style={styles.genero}>🏷️ {genero}</Text>
      <Text style={styles.plataforma}>🎮 {plataforma}</Text>
      <Text style={styles.nota}>⭐ {nota}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: "#FFFEEA",
    borderRadius: 20,
    padding: 16,
    marginBottom: 16,
    marginHorizontal: 16,
    borderWidth: 1,
    borderColor: "#FFEAA7",
  },
  titulo: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#2D3436",
    marginBottom: 8,
  },
  genero: {
    fontSize: 14,
    color: "#2D3436",
    marginBottom: 4,
  },
  plataforma: {
    fontSize: 14,
    color: "#2D3436",
    marginBottom: 4,
  },
  nota: {
    fontSize: 15,
    fontWeight: "bold",
    color: "#FF7675",
    marginTop: 4,
  },
});
