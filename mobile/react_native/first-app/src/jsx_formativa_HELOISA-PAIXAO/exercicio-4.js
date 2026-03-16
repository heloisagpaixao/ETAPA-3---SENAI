import { StyleSheet, Text, View } from "react-native";

export default function ExercicioView04() {
    return <View style={styles.container}>

        <Text> Três Caixas em Linha </Text>
        <View style={styles.container}>
            <View style={{
                flexDirection: "column",
                height: 120,
                width: "100%",
                gap: 8,
                justifyContent: "center",
                alignItems: "center"
            }}>

                <View style={[styles.orangeBox, { flex: 1 }]}>
                    <Text style={styles.textStyle}> Centro </Text>
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
        height: 120,
        width: 120,
        backgroundColor: "green",
        alignItems: "center",
        justifyContent: "center",
    },
    blueBox: {
        height: 120,
        width: 120,
        backgroundColor: "blue",
        alignItems: "center",
        justifyContent: "center",
    },
});