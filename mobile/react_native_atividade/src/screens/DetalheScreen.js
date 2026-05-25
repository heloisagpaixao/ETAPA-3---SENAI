import { useState } from "react";

import {
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

const jogoMock = {
  titulo: "The Legend of Zelda: Breath of the Wild",
  genero: "Aventura / Mundo Aberto",
  plataforma: "Nintendo Switch",
  nota: "10/10",
  sinopse:
    "Explore um vasto mundo aberto em Hyrule. Resolva puzzles, enfrente inimigos e descubra segredos em uma das aventuras mais aclamadas da historia dos games.",
};

export default function DetalheScreen({ route, navigation }) {
  const { titulo, genero, plataforma, nota, sinopse } =
    route?.params ?? jogoMock;
  const [isSalvo, setIsSalvo] = useState(false);

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.hero}>
          <View style={styles.heroIcone}>
            <Text style={styles.heroIconeTexto}>{titulo[0]}</Text>
          </View>
          <Text style={styles.heroTitulo}>{titulo}</Text>
          <Text style={styles.heroSubtitulo}>{genero}</Text>
          <View style={styles.heroMeta}>
            <View style={styles.metaItem}>
              <Text style={styles.metaLabel}>Plataforma</Text>
              <Text style={styles.metaValor}>{plataforma}</Text>
            </View>
            <View style={styles.metaSeparador} />
            <View style={styles.metaItem}>
              <Text style={styles.metaLabel}>Nota</Text>
              <Text style={styles.metaValor}>{nota}</Text>
            </View>
          </View>
        </View>

        <View style={styles.secao}>
          <Text style={styles.secaoTitulo}>Sinopse</Text>
          <Text style={styles.detalheTexto}>{sinopse}</Text>
        </View>

        <TouchableOpacity
          onPress={() => setIsSalvo((prev) => !prev)}
          style={[styles.botao, isSalvo && styles.botaoAtivo]}
        >
          <Text style={styles.botaoTexto}>
            {" "}
            {isSalvo ? "Remover da Lista" : "Adicionar a Lista"}{" "}
          </Text>
        </TouchableOpacity>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFFFFF",
  },
  hero: {
    backgroundColor: "#FAB1A0",
    alignItems: "center",
    paddingVertical: 28,
    paddingHorizontal: 20,
    borderBottomLeftRadius: 24,
    borderBottomRightRadius: 24,
  },
  heroIcone: {
    width: 80,
    height: 80,
    borderRadius: 40,
    backgroundColor: "#FF7675",
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 14,
  },
  heroIconeTexto: {
    fontSize: 36,
    fontWeight: "bold",
    color: "#FFFFFF",
  },
  heroTitulo: {
    fontSize: 22,
    fontWeight: "bold",
    color: "#2D3436",
    textAlign: "center",
    marginBottom: 6,
  },
  heroSubtitulo: {
    fontSize: 14,
    color: "#4f4f4f",
    marginBottom: 16,
    fontWeight: "500",
  },
  heroMeta: {
    flexDirection: "row",
    alignItems: "center",
    gap: 20,
    backgroundColor: "rgba(255,255,255,0.4)",
    borderRadius: 20,
    paddingVertical: 10,
    paddingHorizontal: 24,
  },
  metaItem: {
    alignItems: "center",
  },
  metaLabel: {
    fontSize: 11,
    color: "#6f6f6f",
    marginBottom: 2,
    fontWeight: "bold",
  },
  metaValor: {
    fontSize: 14,
    fontWeight: "600",
    color: "#2D3436",
  },
  metaSeparador: {
    width: 1,
    height: 28,
    backgroundColor: "rgba(0,0,0,0.1)",
  },
  secao: {
    margin: 16,
    backgroundColor: "#FFFEEA",
    borderRadius: 20,
    padding: 20,
    borderWidth: 1,
    borderColor: "#FFEAA7",
  },
  secaoTitulo: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#2D3436",
    marginBottom: 10,
  },
  detalheTexto: {
    fontSize: 14,
    color: "#2D3436",
    lineHeight: 22,
  },
  botao: {
    margin: 16,
    marginTop: 4,
    backgroundColor: "#FFEAA7",
    borderRadius: 20,
    paddingVertical: 14,
    alignItems: "center",
    marginBottom: 32,
  },
  botaoAtivo: {
    backgroundColor: "#FF7675",
  },
  botaoTexto: {
    fontSize: 15,
    fontWeight: "bold",
    color: "#2D3436",
  },
});
