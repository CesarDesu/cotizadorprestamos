import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

export default function ResultCalculation(props) {
    const {capital, interest, months, total, errorMessague} = props;
    return (
        <View style={styles.content}>
            {/* si total existe = total && */}
            {total && (
                <View style={styles.boxResult}>
                    <Text style={styles.title}>RESUMEN</Text>
                    <DataResult title="Cantidad solicitada:" value={`$ ${capital}`} />
                    <DataResult title="Interes %:" value={`${interest} %`} />
                    <DataResult title="Plazos:" value={`${months} meses`} />
                    <DataResult title="Pago mensual:" value={`$ ${total.monthlyFee}`} />

                    <DataResult title="Total a pagar:" value={`$ ${total.totalPayable}`} />
                </View>
            )}
            <View>
            <Text style={styles.error}>{errorMessague}</Text>
            </View>
        </View>
    )
}

// Este se encarga de no repetir código
// title and value son variables creadas
function DataResult(props) {
    const {title, value} = props;
    return (
        <View style={styles.value}>
            <Text>{title}</Text>
            <Text>{value}</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    content: {
        marginHorizontal: 40,
      },
      boxResult: {
        padding: 30,
      },
      title: {
        fontSize: 25,
        textAlign: 'center',
        fontWeight: 'bold',
        marginBottom: 20,
      },
      value: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 20,
      },
      error: {
        textAlign: 'center',
        color: '#f00',
        fontWeight: 'bold',
        fontSize: 20,
      },
})
