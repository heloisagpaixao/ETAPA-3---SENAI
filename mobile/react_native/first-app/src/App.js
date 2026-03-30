import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Somativa01 from './HELOISA-PAIXAO_jsx_somativa/exercicio1';
import Somativa02 from './HELOISA-PAIXAO_jsx_somativa/exercicio2';

export default function App() {
  return (
    <View style={styles.container}>
      <Somativa02/>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#eaeaea',
  },
});