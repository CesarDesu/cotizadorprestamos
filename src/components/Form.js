import React from 'react';
import {StyleSheet, TextInput, View} from 'react-native';
import RNPickerSelect from 'react-native-picker-select';
import colors from '../utils/colors';

export default function Form() {
    return(
        <View style={styles.viewForm}>
            <View style={styles.viewInputs}>
                <TextInput style={styles.input} placeholder="Cantidad a pedir" keyboardType="numeric" />
                <TextInput style={[styles.input, styles.inputPercentage]} placeholder="Interes %" keyboardType="numeric" />
            </View>
            <RNPickerSelect
                onValueChange={(value) => console.log(value)}
                items={[
                    { label: 'Football', value: 'football' },
                    { label: 'Baseball', value: 'baseball' },
                    { label: 'Hockey', value: 'hockey' },
                ]}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    viewForm: {
        position: "absolute",
        bottom: -90,
        width: "85%",
        paddingHorizontal: 50,
        backgroundColor: colors.PRIMARY_COLOR_DARK,
        borderRadius: 30,
        height: 180,
        justifyContent: "center"
    },
    viewInputs: {
        //para poner uno a lado de otro
        flexDirection: 'row',
    },
    input:{
        height: 50,
        backgroundColor: "#fff",
        borderWidth: 1,
        borderColor: colors.PRIMARY_COLOR,
        borderRadius: 5,
        width: "60%",
        marginRight: 5,
        marginLeft: -5,
        marginBottom: 10,
        color: "#000",
        paddingHorizontal: 20

    },
    inputPercentage:{
        width: "40%",
        marginLeft: 5,
    }
});
