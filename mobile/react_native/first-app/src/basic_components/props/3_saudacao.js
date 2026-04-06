import {Text, View } from "react-native";

export default function Saudacao(props) {

    return (
        <View>
            <Text> Olá, {props.usuario}! Seja bem-vindo! </Text>
        </View>
    )
}