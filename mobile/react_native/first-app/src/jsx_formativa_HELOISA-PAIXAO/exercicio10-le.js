import { StyleSheet, Text, View } from "react-native";

export default function ExercicioView08() {
    return <View style={styles.container}>

        <Text> Mini Dashboard </Text>
        <View style={styles.container}>

            <View style={styles.header}>
                <Text style={styles.textStyle}> header </Text>
            </View>

            <View style={styles.rowTop}>
                <View style={styles.redBox}> <Text> 1 </Text> </View>
                <View style={styles.blueBox}> <Text> 2 </Text> </View>
                <View style={styles.yellowBox}> <Text> 3 </Text> </View>
            </View>

            <View style={styles.rowMain}>
                <View style={styles.painelPrincipal}> <Text> Principal </Text> </View>
                <View style={styles.painelLateral}> <Text> Lateral </Text> </View>
            </View>

            <View style={styles.footer}>
                <Text style={styles.textStyle}> Footer </Text>
            </View>

        </View>
    </View>;
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        gap: 8,
    },
    textStyle: {
        color: "white",
        fontWeight: "bold",
    },
    sideBar: {
        width: 80,
        backgroundColor: "gray",
        justifyContent: "center",
        alignItems: "center",

    },
    redBox: {
        flex: 1,
        backgroundColor: "red",
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 8,

    },
    yellowBox: {
        flex: 1,
        backgroundColor: "yellow",
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 8,

    },
    blueBox: {
        flex: 1,
        backgroundColor: "blue",
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 8,

    },
    painelPrincipal: {
        flex: 2,
        backgroundColor: "pink",
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 8,
    },
    painelLateral: {
        flex: 1,
        backgroundColor: "grey",
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 8,
    },
    header: {
        height: 50,
        backgroundColor: "green",
        justifyContent: "center",
        alignItems: "center",
    },
    footer: {
        height: 40,
        backgroundColor: "blue",
        justifyContent: "center",
        alignItems: "center",
    },
    column: {
        flexDirection: "column",
        flex: 1,
        gap: 8,
    },
    rowTop: {
        flexDirection: "row",
        heigh: 40,
        gap: 8,
    },
    rowMain: {
        flexDirection: "row",
        flex: 1,
        gap: 8,
    },
});