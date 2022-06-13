import { Image, SafeAreaView, StatusBar, StyleSheet, Text, View } from "react-native";

export default function AppHeader() {
    const image = {
        uri: 'https://i.ibb.co/7Y5Z36q/logo.png'
    }
    return <>
        <SafeAreaView>
            <StatusBar></StatusBar>
            <View style={styles.grid}>
                <Image style={styles.imageLogo} source={image} resizeMode='cover'></Image>
                <Text style={styles.tituloApp}>COTAÇÃO DO DÓLAR</Text>
            </View>
            
        </SafeAreaView>
    </>
}

const styles = StyleSheet.create({
    tituloApp: {
        fontSize: 20,
        lineHeight: 25,
        fontWeight: 'bold',
        color: '#D5E6F3'
    },
    imageLogo: {
        width: 25,
        height: 25,
        marginRight: 5
    },
    grid: {
        flexDirection: 'row',
        justifyContent: 'flex-start',
    }
});