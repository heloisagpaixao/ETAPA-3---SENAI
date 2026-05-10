import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  FlatList,
  StyleSheet,
  Alert,
} from "react-native";

export default function App() {
  const [produto, setProduto] = useState("");
  const [quantidade, setQuantidade] = useState("");
  const [lista, setLista] = useState([]);

  function adicionarProduto() {
    // Validação
    if (produto.trim() === "" || quantidade.trim() === "") {
      Alert.alert(
        "Erro",
        "Digite o nome do produto e a quantidade."
      );
      return;
    }

    const novoProduto = {
      id: Date.now().toString(),
      nome: produto,
      quantidade: quantidade,
    };

    setLista([...lista, novoProduto]);

    // Limpar campos
    setProduto("");
    setQuantidade("");
  }

  function renderItem({ item }) {
    return (
      <View style={styles.card}>
        <Text style={styles.textoProduto}>
          {item.quantidade}x {item.nome}
        </Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Lista de Compras</Text>

      <TextInput
        style={styles.input}
        placeholder="Nome do produto"
        value={produto}
        onChangeText={setProduto}
      />

      <TextInput
        style={styles.input}
        placeholder="Quantidade"
        keyboardType="numeric"
        value={quantidade}
        onChangeText={setQuantidade}
      />

      <TouchableOpacity
        style={styles.botao}
        onPress={adicionarProduto}
      >
        <Text style={styles.textoBotao}>Adicionar</Text>
      </TouchableOpacity>

      <FlatList
        data={lista}
        keyExtractor={(item) => item.id}
        renderItem={renderItem}
        ListEmptyComponent={
          <Text style={styles.listaVazia}>
            Sua lista está vazia. Adicione um produto!
          </Text>
        }
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    marginTop: 50,
    backgroundColor: "#f2f2f2",
  },

  titulo: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
    textAlign: "center",
  },

  input: {
    backgroundColor: "#fff",
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 10,
    padding: 12,
    marginBottom: 10,
  },

  botao: {
    backgroundColor: "#007bff",
    padding: 15,
    borderRadius: 10,
    alignItems: "center",
    marginBottom: 20,
  },

  textoBotao: {
    color: "#fff",
    fontWeight: "bold",
    fontSize: 16,
  },

  card: {
    backgroundColor: "#fff",
    padding: 15,
    borderRadius: 10,
    marginBottom: 10,
    elevation: 2,
  },

  textoProduto: {
    fontSize: 16,
    fontWeight: "bold",
  },

  listaVazia: {
    textAlign: "center",
    color: "gray",
    marginTop: 20,
    fontSize: 16,
  },
});