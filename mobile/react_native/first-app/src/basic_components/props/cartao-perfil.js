import { StyleSheet, Text, View } from "react-native";

export default function CartaoPerfil(props) {

    const pessoa = { nome: "Ana", idade: 22 }
    const { nome, idade } = pessoa

    return (
        <Text> {props.nome} - {props.idade} anos. </Text>
    )
}