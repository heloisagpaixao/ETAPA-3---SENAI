import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import ExercicioView09 from './jsx_formativa_HELOISA-PAIXAO/exercicio-9';

export default function App() {
  return (
    <View style={styles.container}>
      <ExercicioView09/>
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