import { StyleSheet, View } from "react-native";
import { LinearGradient } from 'expo-linear-gradient'

export default function AppDivisor() {
    return <>
        <View>
            <LinearGradient
                start={{x: 0, y: 0}}
                end={{x: 1, y: 0}}
                colors={['#FF6891', '#FFA03B']}
                style={styles.divisor}
            ></LinearGradient>
        </View>
    </>
}

const styles = StyleSheet.create({
    divisor: {
        width: '100%',
        height: 3,
        marginTop: 2,
        marginBottom: 2,
        borderRadius: 10
    }
})