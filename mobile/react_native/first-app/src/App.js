import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import ExercicioView03 from './jsx_formativa_HELOISA-PAIXAO/exercicio-3';

export default function App() {
  return (
    <View style={styles.container}>
      <ExercicioView03/>
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