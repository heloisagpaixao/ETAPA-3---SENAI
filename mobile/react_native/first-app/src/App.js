import React from "react";
import { StyleSheet, View } from "react-native";
import ContadorExample from "./hooks/useState_example";
import TelaDeLogin from "./hooks/useRef_example";
import TelaMoeda from "./hooks/useEffect_example";

export default function App() {
  return (
    <View style={styles.container}>
      <TelaMoeda/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});