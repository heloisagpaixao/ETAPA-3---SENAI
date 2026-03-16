import { StyleSheet, Text, View } from "react-native";

export default function ExercicioView08() {
    return <View style={styles.container}>

        <Text> Sidebar com Área de Conteúdo </Text>
        <View style={styles.container}>
            <View style={{
                flexDirection: "row",
                gap: 5,
                flex: 1,
                justifyContent: "center",
            }}>

                <View style={styles.sideBar}>
                    <Text style={styles.textStyle}> Sidebar </Text>
                </View>

                <View style={styles.column}>
                    <View style={styles.greenBox}> <Text> Card 1 </Text> </View>
                    <View style={styles.orangeBox}> <Text> Card 2 </Text> </View>
                    <View style={styles.blueBox}> <Text> Card 3 </Text> </View>
                </View>


            </View>
        </View>
    </View>;
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        gap: 18,
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
    orangeBox: {
        flex: 1,
        backgroundColor: "orange",
        justifyContent: "center",
        alignItems: "center",

    },
    greenBox: {
        flex: 1,
        backgroundColor: "green",
        justifyContent: "center",
        alignItems: "center",

    },
    blueBox: {
        flex: 1,
        backgroundColor: "blue",
        justifyContent: "center",
        alignItems: "center",

    },
    column: {
        flexDirection: "column",
        flex: 1,
        gap: 7,
        padding: 5,
    }
});