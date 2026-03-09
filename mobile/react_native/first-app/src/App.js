import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import ViewExamples01 from './basic_components/view_examples01';
import ViewExamples02 from './basic_components/view_examples02';

export default function App() {
  return (
    <View style={styles.container}>
      <ViewExamples02/>
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
