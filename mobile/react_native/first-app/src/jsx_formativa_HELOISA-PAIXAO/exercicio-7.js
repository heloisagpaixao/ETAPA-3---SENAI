import { StyleSheet, Text, View } from "react-native";

export default function ExercicioView07() {
    return <View style={styles.container}>

        <Text> Grid 2x2 </Text>
            <View style={{
                flexDirection: "column",
                gap: 8,
                width: "100%",
                flex: 1,
                justifyContent: "center",
            }}>

                <View style={styles.row}>
                    <View style={styles.greenBox} />
                    <View style={styles.redBox} />
                </View>

                <View style={styles.row}>
                    <View style={styles.blueBox} />
                    <View style={styles.orangeBox} />
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
        flex: 1,
        backgroundColor: "red",
        alignItems: "center",
        justifyContent: "center",
    },
    orangeBox: {
        flex: 1,
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
    row: {
        flexDirection: "row",
        flex: 1,
        gap: 8,
    }
});