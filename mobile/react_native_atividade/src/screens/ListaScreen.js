import { useState } from "react";
import { FlatList, SafeAreaView, StyleSheet, Text, View } from "react-native";
import { CardJogo } from "../components";

const jogosMock = [
  {
    id: "1",
    titulo: "The Legend of Zelda: Breath of the Wild",
    genero: "Aventura / Mundo Aberto",
    plataforma: "Nintendo Switch",
    nota: "10/10",
  },
  {
    id: "3",
    titulo: "God of War",
    genero: "Acao / Aventura",
    plataforma: "PS4 / PC",
    nota: "10/10",
  },
];

export default function ListaScreen({ route,navigation }) {
  const [itensSalvos, setItensSalvos] = useState(jogosMock);

  if (route.params?.novoJogo) {
    setItensSalvos((prev) => [...prev, route.params.novoJogo]);
  }

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerTitulo}>Meus jogos</Text>
      </View>

      <FlatList
        data={itensSalvos}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <View>
            <CardJogo
              titulo={item.titulo}
              genero={item.genero}
              plataforma={item.plataforma}
              nota={item.nota}
            />
            <View style={styles.card} />
          </View>
        )}
        ListEmptyComponent={
          <View style={styles.conteudo}>
            <View style={styles.iconeContainer}>
              <Text style={styles.icone}> F </Text>
            </View>
            <Text style={styles.titulo}>Nenhum jogo salvo</Text>
            <Text style={styles.descricao}>Sua lista aparecera aqui</Text>
            <Text style={styles.dica}>
              Acesse um jogo e toque em "Adicionar a Lista" para salva-lo aqui.
            </Text>
          </View>
        }
        contentContainerStyle={itensSalvos.length === 0 && styles.listaVazia}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFFFFF",
  },
  header: {
    backgroundColor: "#FAB1A0",
    paddingHorizontal: 20,
    paddingTop: 24,
    paddingBottom: 20,
    borderBottomLeftRadius: 24,
    borderBottomRightRadius: 24,
    marginBottom: 16,
  },
  headerTitulo: {
    fontSize: 26,
    fontWeight: "bold",
    color: "#2D3436",
  },
  listaVazia: {
    flex: 1,
  },
  conteudo: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: 32,
  },
  iconeContainer: {
    width: 96,
    height: 96,
    borderRadius: 48,
    backgroundColor: "#FFEAA7",
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 20,
    borderWidth: 1,
    borderColor: "#FFD255",
  },
  icone: {
    fontSize: 40,
    fontWeight: "bold",
    color: "#2D3436",
  },
  titulo: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#2D3436",
    marginBottom: 8,
    textAlign: "center",
  },
  descricao: {
    fontSize: 16,
    color: "#FF7675",
    fontWeight: "600",
    textAlign: "center",
    marginBottom: 12,
  },
  dica: {
    fontSize: 13,
    color: "#636e72",
    textAlign: "center",
    lineHeight: 20,
  },
  card: {
    backgroundColor: "transparent",
    marginHorizontal: 16,
    marginTop: 0,
    borderRadius: 0,
    padding: 0,
  },
});
