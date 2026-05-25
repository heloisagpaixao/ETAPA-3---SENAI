import { useState, useEffect } from "react";

import {
  FlatList,
  SafeAreaView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";

const jogos = [
  {
    id: "1",
    titulo: "The Legend of Zelda: Breath of the Wild",
    genero: "Aventura / Mundo Aberto",
    plataforma: "Nintendo Switch",
    nota: "10/10",
    sinopse:
      "Explore um vasto mundo aberto in Hyrule. Resolva puzzles, enfrente inimigos e descubra segredos em uma das aventuras mais aclamadas da historia dos games.",
  },
  {
    id: "2",
    titulo: "Red Dead Redemption 2",
    genero: "Acao / Mundo Aberto",
    plataforma: "PS4 / Xbox / PC",
    nota: "10/10",
    sinopse:
      "Uma epica historia sobre a vida fora da lei no coracao da America. Viva a aventura de Arthur Morgan no velho oeste em um mundo detalhado e imersivo.",
  },
  {
    id: "3",
    titulo: "God of War",
    genero: "Acao / Aventura",
    plataforma: "PS4 / PC",
    nota: "10/10",
    sinopse:
      "Kratos e seu filho Atreus embarcam em uma jornada pelos Nove Reinos da mitologia nordica. Um dos jogos mais premiados de sua geracao.",
  },
  {
    id: "4",
    titulo: "Hollow Knight",
    genero: "Metroidvania / Plataforma",
    plataforma: "PC / Switch / PS4",
    nota: "9/10",
    sinopse:
      "Explore um vasto reino subterraneo habitado por insetos. Um desafio preciso e belo, com um mundo imenso para descobrir.",
  },
  {
    id: "5",
    titulo: "Celeste",
    genero: "Plataforma / Indie",
    plataforma: "PC / Switch / PS4",
    nota: "9/10",
    sinopse:
      "Ajude Madeline a sobreveviver sua viagem interior pela montanha Celeste. Um platformer desafiador com uma historia tocante sobre superacao.",
  },
  {
    id: "6",
    titulo: "Stardew Valley",
    genero: "Simulacao / RPG",
    plataforma: "PC / Switch / Mobile",
    nota: "9/10",
    sinopse:
      "Herde a fazenda do seu avo e comece uma nova vida. Plante, colete, construa relacionamentos e explore cavernas neste mundo relaxante.",
  },
];

export default function HomeScreen({ navigation }) {
  const [busca, setBusca] = useState("");
  const [jogosFiltrados, setJogosFiltrados] = useState(jogos);

  useEffect(() => {
    const resultado = jogos.filter((jogo) =>
      jogo.titulo.toLowerCase().includes(busca.toLowerCase()),
    );
    setJogosFiltrados(resultado);
  }, [busca]);

  function renderItem({ item }) {
    return (
      <TouchableOpacity
        style={styles.card}
        onPress={() => navigation.navigate("Detalhe", { ...item })}
      >
        <View style={styles.cardIcone}>
          <Text style={styles.cardIconeTexto}>{item.titulo[0]}</Text>
        </View>
        <View style={styles.cardInfo}>
          <Text style={styles.cardTitulo}>{item.titulo}</Text>
          <Text style={styles.cardSubtitulo}>{item.genero}</Text>
        </View>
      </TouchableOpacity>
    );
  }

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerTitulo}> Jogos Friv </Text>
        <Text style={styles.headerSubtitulo}>
          Escolha um jogo e comece a se divertir!!
        </Text>
      </View>

      <View style={styles.buscaContainer}>
        <TextInput
          style={styles.buscaInput}
          placeholder="Buscar jogo..."
          placeholderTextColor="#7f8c8d"
          value={busca}
          onChangeText={setBusca}
        />
      </View>

      <FlatList
        data={jogosFiltrados}
        keyExtractor={(item) => item.id}
        renderItem={renderItem}
        contentContainerStyle={styles.lista}
        showsVerticalScrollIndicator={false}
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
  },
  headerTitulo: {
    fontSize: 26,
    fontWeight: "bold",
    color: "#2D3436",
  },
  headerSubtitulo: {
    fontSize: 13,
    color: "#4f4f4f",
    marginTop: 4,
    fontWeight: "500",
  },
  buscaContainer: {
    backgroundColor: "#FFFFFF",
    paddingHorizontal: 16,
    paddingVertical: 14,
  },
  buscaInput: {
    backgroundColor: "#FFFEEA",
    borderRadius: 20,
    paddingHorizontal: 16,
    paddingVertical: 12,
    fontSize: 14,
    color: "#2D3436",
    borderWidth: 1,
    borderColor: "#FFEAA7",
  },
  lista: {
    padding: 16,
    gap: 12,
  },
  card: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#FFFEEA",
    borderRadius: 20,
    padding: 14,
    borderWidth: 1,
    borderColor: "#FFEAA7",
  },
  cardIcone: {
    width: 48,
    height: 48,
    borderRadius: 24,
    backgroundColor: "#FF7675",
    alignItems: "center",
    justifyContent: "center",
    marginRight: 14,
  },
  cardIconeTexto: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#FFFFFF",
  },
  cardInfo: {
    flex: 1,
  },
  cardTitulo: {
    fontSize: 15,
    fontWeight: "600",
    color: "#2D3436",
    marginBottom: 4,
  },
  cardSubtitulo: {
    fontSize: 13,
    color: "#636e72",
  },
});
