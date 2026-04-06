import { View, Text, ScrollView, StyleSheet } from "react-native";

export default function ExercicioPratica01() {
    return (
        <View style={styles.container}>
            <View style={styles.topo}>
                <View style={[styles.box, { flex: 1, backgroundColor: 'blue' }]}>
                    <Text style={styles.texto}>Azul</Text>
                </View>

                <View style={[styles.box, { flex: 2, backgroundColor: 'red' }]}>
                    <Text style={styles.texto}>Vermelho</Text>
                </View>

                <View style={[styles.box, { flex: 1, backgroundColor: 'green' }]}>
                    <Text style={styles.texto}>Verde</Text>
                </View>
            </View>

            <View style={[styles.centro, { backgroundColor: 'orange' }]}>
                <Text style={styles.texto}>Laranja</Text>
            </View>

            <View style={styles.fundo}>
                <View style={[styles.box, { flex: 1, backgroundColor: 'purple' }]}>
                    <Text style={styles.texto}>Roxo</Text>
                </View>

                <View style={[styles.box, { flex: 1, backgroundColor: 'gray' }]}>
                    <Text style={styles.texto}>Cinza</Text>
                </View>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 8,
        gap: 8,
    },
    topo: {
        height: 120,
        flexDirection: 'row',
        gap: 8,
    },
    centro: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 8,
    },
    fundo: {
        height: 80,
        flexDirection: 'row',
        gap: 8,
    },
    box: {
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 8,
    },
    texto: {
        color: 'white',
        fontWeight: 'bold',
    },
});