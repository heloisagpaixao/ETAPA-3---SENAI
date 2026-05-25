import {
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

export default function PerfilScreen() {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerTitulo}>Perfil</Text>
      </View>

      <View style={styles.cartao}>
        <View style={styles.avatar}>
          <Text style={styles.avatarTexto}>U</Text>
        </View>
        <Text style={styles.nome}>Nome do Usuario</Text>
        <Text style={styles.email}>usuario@email.com</Text>

        <View style={styles.separador} />

        <View style={styles.infoLinha}>
          <Text style={styles.infoLabel}>Itens salvos</Text>
          <Text style={styles.infoValor}>0</Text>
        </View>
        <View style={styles.infoLinha}>
          <Text style={styles.infoLabel}>Itens favoritos</Text>
          <Text style={styles.infoValor}>0</Text>
        </View>
        <View style={styles.infoLinha}>
          <Text style={styles.infoLabel}>Membro desde</Text>
          <Text style={styles.infoValor}>Maio 2026</Text>
        </View>
      </View>

      <TouchableOpacity style={styles.botao}>
        <Text style={styles.botaoTexto}>Editar perfil</Text>
      </TouchableOpacity>
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
  cartao: {
    margin: 16,
    backgroundColor: "#FFFEEA",
    borderRadius: 20,
    padding: 24,
    alignItems: "center",
    borderWidth: 1,
    borderColor: "#FFEAA7",
  },
  avatar: {
    width: 88,
    height: 88,
    borderRadius: 44,
    backgroundColor: "#FF7675",
    alignItems: "center",
    justifyContent: "center",
    borderWidth: 3,
    borderColor: "#FFFFFF",
    marginBottom: 16,
  },
  avatarTexto: {
    fontSize: 36,
    fontWeight: "bold",
    color: "#FFFFFF",
  },
  nome: {
    fontSize: 22,
    fontWeight: "bold",
    color: "#2D3436",
    marginBottom: 4,
  },
  email: {
    fontSize: 14,
    color: "#636e72",
    marginBottom: 20,
  },
  separador: {
    width: "100%",
    height: 1,
    backgroundColor: "#FFEAA7",
    marginBottom: 16,
  },
  infoLinha: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "100%",
    paddingVertical: 8,
  },
  infoLabel: {
    fontSize: 14,
    color: "#2D3436",
  },
  infoValor: {
    fontSize: 14,
    fontWeight: "600",
    color: "#FF7675",
  },
  botao: {
    marginHorizontal: 16,
    backgroundColor: "#FFEAA7",
    borderRadius: 20,
    paddingVertical: 14,
    alignItems: "center",
  },
  botaoTexto: {
    fontSize: 15,
    fontWeight: "bold",
    color: "#2D3436",
  },
});
