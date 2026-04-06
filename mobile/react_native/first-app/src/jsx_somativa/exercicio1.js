import { StyleSheet, Text, View } from "react-native";

export default function Somativa01() {
    return <View style={styles.container}>

        <Text> Layout em Grades Assimétricas </Text>
        <View style={styles.container}>
            <View style={styles.rowTop}>
                <View style={styles.yellowBox}> <Text style={styles.textStyle}> Amarelo </Text> </View>
                <View style={styles.blueBox}> <Text style={styles.textStyle}> Azul Escuro </Text> </View>
            </View>

            <View style={styles.rowMain}>
                <View style={styles.painelPrincipal}> <Text style={styles.textStyle}> Verde </Text> </View>

                <View style={styles.painelLateral}>
                    <View style={styles.pinkBox}> <Text style={styles.textStyle}> Rosa </Text> </View>
                    <View style={styles.orangeBox}> <Text style={styles.textStyle}> Laranja </Text> </View>
                </View>
            </View>

            <View style={styles.rowFooter}>
                <View style={styles.redBox}> <Text style={styles.textStyle}> Vermelho </Text> </View>
                <View style={styles.tealBox}> <Text style={styles.textStyle}> Teal </Text> </View>
                <View style={styles.purpleBox}> <Text style={styles.textStyle}> Roxo </Text> </View>
            </View>
        </View>
    </View>;
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        gap: 8,
        padding: 8,
    },
    textStyle: {
        color: "white",
        fontWeight: "bold",
    },
    pinkBox: {
        flex: 1,
        backgroundColor: "pink",
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 8,
    },
    orangeBox: {
        flex: 1,
        backgroundColor: "darkorange",
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 8,
    },
    yellowBox: {
        flex: 1,
        backgroundColor: "orange",
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 8,
    },
    blueBox: {
        flex: 3,
        backgroundColor: "darkblue",
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 8,
    },
    redBox: {
        flex: 1,
        backgroundColor: "red",
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 8,
    },
    tealBox: {
        flex: 1,
        backgroundColor: "teal",
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 8,
    },
    purpleBox: {
        flex: 1,
        backgroundColor: "purple",
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 8,
    },
    painelPrincipal: {
        flex: 1,
        backgroundColor: "green",
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 8,
    },
    painelLateral: {
        flex: 1,
        flexDirection: "column",
        gap: 8,
    },
    rowTop: {
        flexDirection: "row",
        height: 100,
        gap: 8,
    },
    rowMain: {
        flexDirection: "row",
        flex: 1,
        gap: 8,
    },
    rowFooter: {
        flexDirection: "row",
        height: 90,
        gap: 8,
    },
});