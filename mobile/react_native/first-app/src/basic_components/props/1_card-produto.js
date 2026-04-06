import { StyleSheet, Text, View } from "react-native";

export default function CardProduto(props) {

    return (
        <View>
            <Text> Produto: {props.nome} </Text>
            <Text> Preço: R$ {props.preco} </Text>
        </View>
    )
}