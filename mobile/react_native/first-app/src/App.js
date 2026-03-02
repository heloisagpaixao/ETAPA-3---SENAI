import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Lista01 from './jsx_listas_HELOISA-PAIXAO/lista01';
import Lista02 from './jsx_listas_HELOISA-PAIXAO/lista02';
import Lista03 from './jsx_listas_HELOISA-PAIXAO/lista03';

export default function App() {
  return (
    <View style={styles.container}>
      <Lista03/>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#eaeaea',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
