import { View, StyleSheet, Text, TextInput, TouchableOpacity, FlatList, Platform } from "react-native";
import DateTimePicker from '@react-native-community/datetimepicker';
import React, { useState } from 'react';
import { LinearGradient } from "expo-linear-gradient";

export default function PainelData() {
    const [date, setDate] = useState(new Date());
    const [mode, setMode] = useState('date');
    const [show, setShow] = useState(false);
    const [text, setText] = useState('Empty');

    const onChange = (event, selectedDate) => {
        const currentDate = selectedDate || date;
        setShow(Platform.OS === 'ios');
        setDate(currentDate);

        let tempDate = new Date(currentDate);
        let fDate = tempDate.getDate() + '/' + (tempDate.getMonth() + 1) + '/' + tempDate.getFullYear();
        setText(fDate);

        console.log(fDate);
    }

    const showMode = (currentMode) => {
        setShow(true);
        setMode(currentMode);
    }

    return <>
        <View style={styles.cardContainer}>

            <View style={styles.gridLinha}>
                <View style={styles.gridColuna}>
                    <Text style={styles.titulo}>Data inicial:</Text>
                    <TouchableOpacity style={styles.dataPickerContainer} onPress={() => showMode('date')}>
                        <LinearGradient
                        start={{x: 0, y: 0}}
                        end={{x: 1, y: 0}}
                        colors={['#FF6891', '#FFA03B']}
                        style={styles.botaoDataPicker}
                        >
                            <View style={styles.dataPicker}>
                                <Text style={styles.textoBotao}>{text}</Text>
                            </View>
                        </LinearGradient>
                    </TouchableOpacity>
                </View>
                <View style={styles.gridColuna}>
                    <Text style={styles.titulo}>Data final:</Text>
                    <TouchableOpacity style={styles.dataPickerContainer} onPress={() => showMode('date')}>
                        <LinearGradient
                        start={{x: 0, y: 0}}
                        end={{x: 1, y: 0}}
                        colors={['#FF6891', '#FFA03B']}
                        style={styles.botaoDataPicker}
                        >
                            <View style={styles.dataPicker}>
                                <Text style={styles.textoBotao}>{text}</Text>
                            </View>
                        </LinearGradient>
                    </TouchableOpacity>
                </View>
            </View>
            <View style={styles.botaoContainer}>
                <TouchableOpacity style={styles.botao} onPress={() => showMode('date')}>
                    <LinearGradient
                    start={{x: 0, y: 0}}
                    end={{x: 1, y: 0}}
                    colors={['#FF6891', '#FFA03B']}
                    style={styles.botao}
                    >
                        <Text style={styles.textoBotao}>DATAPICKER</Text>
                    </LinearGradient>
                </TouchableOpacity>
            </View>
        </View>

        {show && (<DateTimePicker
            testID="dateTimePicker"
            value={date}
            mode={mode}
            is24Hour={true}
            display='default'
            onChange={onChange}
        >

        </DateTimePicker>)}

        <View style={styles.cardContainer}>
            
        </View>
    </>
}
const styles = StyleSheet.create({
    cardContainer: {     
        backgroundColor: '#3E4052',
        borderRadius: 10,
        marginTop: 10,
        marginBottom: 10,
        padding: 20,
        justifyContent: 'center',
    },
    botaoContainer: {
        alignItems: 'center',
        marginTop: 10
    },
    botao: {
        borderRadius: 10,
        padding: 7,
        width: '102%',
        alignItems: 'center'
    },
    botaoDataPicker: {
        borderRadius: 7,
        padding: 3,
        width: '100%',
        alignItems: 'center'
    },
    textoBotao: {
        fontSize: 20,
        lineHeight: 25,
        fontWeight: '800',
        color: '#ffffff',
    },
    gridColuna: {
        flexDirection: 'column'
    },
    gridLinha: {
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    titulo: {
        fontSize: 20,
        lineHeight: 25,
        fontWeight: '200',
        color: '#D5E6F3',
        marginBottom: 10,
    },
    input: {
        fontSize: 20,
        lineHeight: 25,
        fontWeight: '200',
        color: '#D5E6F3',
        marginBottom: 5,
        borderColor: '#FFA03B',
        borderWidth: 1,
        borderRadius: 10,
        padding: 5,
        minWidth: '45%',
        maxWidth: 160,
    },
    dataPickerContainer: {
        minWidth: '45%',
        maxWidth: 160,
        borderRadius: 10,
    },
    dataPicker: {
        backgroundColor: '#3E4052',
        width: '100%',
        borderRadius: 4,
        padding: 7
    }
});

// https://www.youtube.com/watch?v=aRjfb_2M_64
// https://www.youtube.com/watch?v=lrRdQ6lS-Pk
// https://stackoverflow.com/questions/60625912/working-with-multiple-datepickers-in-react-native-application