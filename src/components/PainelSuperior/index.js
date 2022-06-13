import { LinearGradient } from "expo-linear-gradient";
import { StyleSheet, Text, View } from "react-native";

export default function PainelSuperior() {
    return <>
        <View style={styles.cardContainer}>
            
            <View style={styles.gridLinha}>
                <View style={styles.gridColuna}>
                    <Text style={styles.titulo}>Dólar hoje</Text>
                    <Text style={styles.subTitulo}>USD$</Text>
                </View>
                <Text style={styles.textoValor}>4,97</Text>
            </View>
            <View>
                <LinearGradient
                    start={{x: 0, y: 0}}
                    end={{x: 1, y: 0}}
                    colors={['#FF6891', '#FFA03B']}
                    style={styles.bottom}
                ></LinearGradient>
            </View>
        </View>
    </>
}

const styles = StyleSheet.create({
    cardContainer: {     
        backgroundColor: '#3E4052',
        borderRadius: 10,
        marginTop: 20,
        marginBottom: 10,
    },
    gridColuna: {
        flexDirection: 'column'
    },
    gridLinha: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        padding: 20
    },
    titulo: {
        fontSize: 20,
        lineHeight: 25,
        fontWeight: '200',
        color: '#D5E6F3',
        marginBottom: 5
    },
    subTitulo: {
        fontSize: 30,
        lineHeight: 35,
        fontWeight: '800',
        color: '#D5E6F3'
    },
    textoValor: {
        fontSize: 55,
        lineHeight: 65,
        fontWeight: '300',
        color: '#D5E6F3'
    },
    bottom: {
        width: '100%',
        height: 10,
        borderBottomLeftRadius: 10,
        borderBottomRightRadius: 10
    }
})