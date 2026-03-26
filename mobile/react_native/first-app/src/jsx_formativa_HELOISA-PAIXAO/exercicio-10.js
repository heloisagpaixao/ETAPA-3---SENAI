import { StyleSheet, Text, View } from "react-native";

export default function ExercicioView10() {
    return (
        // Container principal ocupa toda a tela
        <View style={styles.container}>

            {/* HEADER */}
            <View style={styles.header}>
                <Text style={styles.textStyle}>Header</Text>
            </View>

            {/* CONTEÚDO CENTRAL */}
            <View style={styles.content}>

                {/* LINHA DOS 3 CARDS */}
                <View style={styles.rowCards}>
                    <View style={[styles.card, { backgroundColor: "red" }]}>
                        <Text>1</Text>
                    </View>

                    <View style={[styles.card, { backgroundColor: "blue" }]}>
                        <Text style={{ color: "white" }}>2</Text>
                    </View>

                    <View style={[styles.card, { backgroundColor: "yellow" }]}>
                        <Text>3</Text>
                    </View>
                </View>

                {/* LINHA DO PAINEL PRINCIPAL + LATERAL */}
                <View style={styles.rowPaineis}>
                    {/* Painel principal (flex: 2 ocupa mais espaço) */}
                    <View style={styles.painelPrincipal}>
                        <Text>Painel Principal</Text>
                    </View>

                    {/* Painel lateral (flex: 1 menor) */}
                    <View style={styles.lateral}>
                        <Text style={{ color: "white" }}>Lateral</Text>
                    </View>
                </View>

            </View>

            {/* FOOTER */}
            <View style={styles.footer}>
                <Text style={styles.textStyle}>Footer</Text>
            </View>

        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1, // ocupa toda a tela
    },

    header: {
        height: 50,
        backgroundColor: "green",
        alignItems: "center",
        justifyContent: "center",
    },

    footer: {
        height: 40,
        backgroundColor: "blue",
        alignItems: "center",
        justifyContent: "center",
    },

    content: {
        flex: 1, // ocupa o espaço entre header e footer
        padding: 8,
        gap: 8,
    },

    rowCards: {
        flexDirection: "row", // deixa os cards lado a lado
        gap: 8,
    },

    card: {
        flex: 1, // todos com mesmo tamanho
        height: 80,
        alignItems: "center",
        justifyContent: "center",
        borderRadius: 8,
    },

    rowPaineis: {
        flex: 1,
        flexDirection: "row",
        gap: 8,
    },

    painelPrincipal: {
        flex: 2, // maior
        backgroundColor: "#e6a8ad",
        alignItems: "center",
        justifyContent: "center",
        borderRadius: 8,
    },

    lateral: {
        flex: 1, // menor
        backgroundColor: "gray",
        alignItems: "center",
        justifyContent: "center",
        borderRadius: 8,
    },

    textStyle: {
        color: "white",
        fontWeight: "bold",
    },
});