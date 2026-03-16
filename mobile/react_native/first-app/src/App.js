import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import ExercicioView07 from './jsx_formativa_HELOISA-PAIXAO/exercicio-7';

export default function App() {
  return (
    <View style={styles.container}>
      <ExercicioView07/>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#eaeaea',
    justifyContent: 'center',
    alignItems: "center",
  },
});