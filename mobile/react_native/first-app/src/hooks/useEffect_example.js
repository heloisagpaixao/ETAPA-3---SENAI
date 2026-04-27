import { useState, useEffect } from "react";
import { View, Text, Alert, Button, StyleSheet } from "react-native";

export default function TelaMoeda() {
  const [moedas, setMoedas] = useState(0);
  useEffect(() => {
    console.log("Executou!");
    if (moedas == 5) {
      Alert.alert("Sucesso, você desbloqueou o baú!");
    }
  }, [moedas]);

  return (
    <View style={styles.container}>
      <Text style={styles.texto}> Moedas coletadas: {moedas} </Text>
      <Button title="Pegar moeda!" onPress={() => setMoedas(moedas + 1)} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: "center", alignItems: "center" },
  texto: { fontSize: 24, marginBottom: 20 },
});
