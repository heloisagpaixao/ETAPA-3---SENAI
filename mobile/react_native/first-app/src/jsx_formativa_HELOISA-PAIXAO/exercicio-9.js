import { StyleSheet, Text, View } from "react-native";

export default function ExercicioView09() {
    return <View style={styles.container}>

        <Text> Semáforo </Text>
        <View style={styles.container}>
            <View style={{
                flexDirection: "column",
                height: 80,
                gap: 8,
                justifyContent: "center"
            }}>

                <View style={[styles.redBox, { width: 80 }]}>
                    <Text style={styles.textStyle}> Vermelho </Text>
                </View>

                <View style={[styles.blueBox, { width: 80 }]}>
                    <Text style={styles.textStyle}> Azul </Text>
                </View>

                <View style={[styles.greenBox, { width: 80 }]}>
                    <Text style={styles.textStyle}> Verde </Text>
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
    redBox: {
        height: 80,
        width: 80,

        backgroundColor: "red",
        alignItems: "center",
        justifyContent: "center",
    },
    greenBox: {
        height: 80,
        width: 80,
        backgroundColor: "green",
        alignItems: "center",
        justifyContent: "center",
    },
    blueBox: {
        height: 80,
        width: 80,
        backgroundColor: "blue",
        alignItems: "center",
        justifyContent: "center",
    },
});