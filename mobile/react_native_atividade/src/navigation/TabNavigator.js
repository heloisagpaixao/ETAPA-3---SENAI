import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import ListaScreen from "../screens/ListaScreen";
import PerfilScreen from "../screens/PerfilScreen";
import StackNavigator from "./StackNavigator";
import HomeScreen from "../screens/HomeScreen";

const Tab = createBottomTabNavigator();

export default function TabNavigator() {
  return
  <Tab.Navigator screenOptions={{ headerShown: false }}>
    <Tab.Screen name="Jogos" component={HomeScreen} />
    <Tab.Screen name="Lista" component={ListaScreen} />
    <Tab.Screen name="Perfil" component={PerfilScreen} />
  </Tab.Navigator>;
}
