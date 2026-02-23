import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Exemplo01 from './jsx_examples/exemplo-01-estrutura';

export default function App() {
  return (
    <View style={styles.container}>
      <Exemplo01/>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ecbfff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
