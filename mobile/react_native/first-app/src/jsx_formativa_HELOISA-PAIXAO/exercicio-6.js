import { StyleSheet, Text, View } from "react-native";

export default function ExercicioView06() {
    return <View style={styles.container}>

        <Text> Header, Conteúdo e Footer </Text>
        <View style={styles.container}>
            <View style={{
                flexDirection: "column",
                width: "100%",
                height: "100%",
                justifyContent: "center",
            }}>

                <View style={[styles.headerBox]}>
                    <Text style={styles.textStyle}> Header </Text>
                </View>

                <View style={[styles.greyBox, { flex: 1 }]}>
                    <Text style={styles.textStyle}> Main Content </Text>
                </View>

                <View style={[styles.footerBox]}>
                    <Text style={styles.textStyle}> Footer </Text>
                </View>
            </View>
        </View>
    </View>;
}

const styles = StyleSheet.create({
    container: {
        justifyContent: "center",
        flex: 1,
    },
    textStyle: {
        color: "white",
        fontWeight: "bold",
    },
    greyBox: {
        backgroundColor: "grey",
        alignItems: "center",
        justifyContent: "center",
    },
    headerBox: {
        height: 60,
        backgroundColor: "green",
        alignItems: "center",
        justifyContent: "center",
    },
    footerBox: {
        height: 50,
        backgroundColor: "blue",
        alignItems: "center",
        justifyContent: "center",
    },
});