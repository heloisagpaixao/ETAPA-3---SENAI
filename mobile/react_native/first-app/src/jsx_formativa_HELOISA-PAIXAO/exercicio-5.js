import { StyleSheet, Text, View } from "react-native";

export default function ExercicioView05() {
    return <View style={styles.container}>

        <Text> Layout de Duas Colunas </Text>
        <View style={styles.container}>
            <View style={{
                flexDirection: "row",
                gap: 5,
                flex: 1,
                justifyContent: "center",
            }}>

                <View style={[styles.blueBox]}>
                    <Text style={styles.textStyle}> Coluna 1 </Text>
                </View>

                <View style={[styles.greenBox]}>
                    <Text style={styles.textStyle}> Coluna 2 </Text>
                </View>
            </View>
        </View>
    </View>;
}

const styles = StyleSheet.create({
    container: {
        alignItems: "center",
        justifyContent: "center",
        flex: 1,
        gap: 18,
    },
    textStyle: {
        color: "white",
        fontWeight: "bold",
    },
    orangeBox: {
        height: 120,
        width: 120,

        backgroundColor: "orange",
        alignItems: "center",
        justifyContent: "center",
    },
    greenBox: {
        flex: 1,
        backgroundColor: "green",
        alignItems: "center",
        justifyContent: "center",
    },
    blueBox: {
        flex: 1,
        backgroundColor: "blue",
        alignItems: "center",
        justifyContent: "center",
    },
});