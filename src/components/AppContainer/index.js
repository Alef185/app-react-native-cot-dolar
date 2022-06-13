import { SafeAreaView, StatusBar, StyleSheet, View } from "react-native";
import AppDivisor from "../AppDivisor";
import AppHeader from "../Header";
import PainelData from "../PainelData";
import PainelSuperior from "../PainelSuperior";

export default function AppContainer() {
    return <>
        <View style={styles.appContainer}>
            <SafeAreaView backgroundColor={'#1F1D2B'}>
                <StatusBar backgroundColor={'#1F1D2B'}></StatusBar>
                <AppHeader />
                <AppDivisor />
                <PainelSuperior />
                <PainelData />
            </SafeAreaView>
        </View>
    </>
}

const styles = StyleSheet.create({
    appContainer: {
        padding: 20,
    }
});