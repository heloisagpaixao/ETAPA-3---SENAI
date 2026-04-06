import { View, Text, ScrollView, StyleSheet } from "react-native";

export default function ExercicioPratica02() {
    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Text style={styles.texto}>Header</Text>
            </View>

            <View style={styles.corpo}>
                <View style={styles.sidebar}>
                    <Text style={styles.texto}>Sidebar</Text>
                </View>

                <View style={styles.areaPrincipal}>
                    <View style={styles.secao}>
                        <View style={[styles.card, { flex: 1, backgroundColor: 'green' }]}>
                            <Text style={styles.texto}>Card A</Text>
                        </View>

                        <View style={[styles.card, { flex: 1, backgroundColor: 'blue' }]}>
                            <Text style={styles.texto}>Card B</Text>
                        </View>
                    </View>

                    <View style={styles.divisor} />

                    <View style={styles.secao}>
                        <View style={[styles.card, { flex: 1, backgroundColor: 'red' }]}>
                            <Text style={styles.texto}>C</Text>
                        </View>

                        <View style={[styles.card, { flex: 2, backgroundColor: 'orange' }]}>
                            <Text style={styles.texto}>Card D</Text>
                        </View>

                        <View style={[styles.card, { flex: 1, backgroundColor: 'purple' }]}>
                            <Text style={styles.texto}>E</Text>
                        </View>
                    </View>
                </View>
            </View>

            <View style={styles.footer}>
                <Text style={styles.texto}>Footer</Text>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        gap: 8,
        padding: 8,
    },
    header: {
        height: 60,
        backgroundColor: '#2c3e50',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 8,
    },
    corpo: {
        flex: 1,
        flexDirection: 'row',
        gap: 8,
    },
    sidebar: {
        width: 80,
        backgroundColor: 'gray',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 8,
    },
    areaPrincipal: {
        flex: 1,
        flexDirection: 'column',
    },
    secao: {
        flex: 1,
        flexDirection: 'row',
        gap: 8,
    },
    divisor: {
        height: 8,
        backgroundColor: '#ecf0f1',
        marginVertical: 8,
        borderRadius: 8,
    },
    footer: {
        height: 50,
        backgroundColor: '#2c3e50',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 8,
    },
    card: {
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 8,
    },
    texto: {
        color: 'white',
        fontWeight: 'bold',
        textAlign: 'center',
    },
});