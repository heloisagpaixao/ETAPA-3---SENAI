import { StyleSheet, Text, View } from "react-native";

export default function CartaoUsuario(props) {

    return (
        <View>
            <Text> Nome completo: {props.nome} </Text>
            <Text> Email para contato: {props.email} </Text>
        </View>
    )
}