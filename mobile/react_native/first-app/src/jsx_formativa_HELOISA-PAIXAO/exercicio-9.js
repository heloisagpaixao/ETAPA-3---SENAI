import { StyleSheet, Text, View } from "react-native";

export default function ExercicioView09() {
    return <View style={styles.container}>

        <Text> Semáforo </Text>
        <View style={styles.container}>
            
            <View style={styles.fundoSemaforo}>
                <View style={styles.redBox}></View>
                <View style={styles.yellowBox}></View>
                <View style={styles.greenBox}></View>
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
        borderRadius: 40,
    },
    greenBox: {
        height: 80,
        width: 80,
        backgroundColor: "green",
        borderRadius: 40,
    },
    yellowBox: {
        height: 80,
        width: 80,
        backgroundColor: "yellow",
        borderRadius: 40,
    },
    fundoSemaforo: {
        flexDirection: "column",
        height: 300,
        width: 100,
        backgroundColor: "black",

        padding: "2px",
        alignItems: 'center',
        justifyContent: 'space-evenly',
        borderRadius: 20
    }
});