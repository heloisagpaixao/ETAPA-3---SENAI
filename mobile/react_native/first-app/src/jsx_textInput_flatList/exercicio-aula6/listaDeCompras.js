import { useState } from "react";
import {
  Alert,
  Text,
  TextInput,
  View,
  TouchableOpacity,
  StyleSheet,
} from "react-native";

export default function ListaDeCompras() {
  const [produto, setProduto] = useState("");
  const produtos = [];

  function handleAdicionar() {
    if (produto.trim() === "") {
      Alert.alert("Digite o nome do produto antes de adicionar.");
      return;
    }

    const novoProduto = {
      id: Date.now().toString(),
      nome: nomeProduto,
    };
  }

  setProduto("");

  return (
    <View style={styles.container}>
      <Text style={styles.titulo}> Lista de Compras </Text>
      <View style={styles.lista}>
        <TextInput
          style={styles.input}
          value={produto}
          onChangeText={setProduto}
          placeholder="Produto..."
          keyboardType="numeric"
        />

        <TouchableOpacity style={styles.botao} onPress={handleAdicionar}>
          <Text> Adicionar </Text>
        </TouchableOpacity>
      </View>

      <FlatList
        scrollEnabled={true}
        data={produtos}
        keyExtractor={(item) => item.id}
        renderItem={({ item: produto }) => (
          <CardItem  />
        )}
      />
    </View>
  );
}
