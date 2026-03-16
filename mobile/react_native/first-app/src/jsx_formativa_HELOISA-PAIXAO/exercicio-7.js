import { StyleSheet, Text, View } from "react-native";

export default function ExercicioView07() {
    return <View style={styles.container}>

        <Text> Grid 2x2 </Text>

        <View style={styles.row}>
            <View style={styles.greenBox} />
            <View style={styles.redBox} />
        </View>

        <View style={styles.row}>
            <View style={styles.blueBox} />
            <View style={styles.orangeBox} />
        </View>

    </View>;
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        gap: 18,
        padding: 7,
    },
    textStyle: {
        color: "white",
        fontWeight: "bold",
    },
    redBox: {
        flex: 1,
        backgroundColor: "red",

    },
    orangeBox: {
        flex: 1,
        backgroundColor: "orange",

    },
    greenBox: {
        flex: 1,
        backgroundColor: "green",

    },
    blueBox: {
        flex: 1,
        backgroundColor: "blue",

    },
    row: {
        flexDirection: "row",
        flex: 1,
        gap: 7
    }
});