import {Text, View } from "react-native";

export default function PerfilAluno(props) {

    return (
        <View>
            <Text> Nome: {props.nome} </Text>
            <Text> Turma: {props.turma} </Text>
            <Text> Matrícula: {props.matricula} </Text>
        </View>
    )
}