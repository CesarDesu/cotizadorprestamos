import React, {useState, useEffect} from 'react';
import {
  StyleSheet, View, Text, SafeAreaView, StatusBar,
  Button
} from 'react-native';
import Form from './src/components/Form';
import Footer from './src/components/Footer';
import ResultCalculation from './src/components/ResultCalculation';
import colors from './src/utils/colors';


export default function App() {
  const [capital, setCapital] = useState(null);
  const [interest, setInterest] = useState(null);
  const [months, setMonths] = useState(null);
  const [total, setTotal] = useState(null);
  const [errorMessague, setErrorMessague] = useState('')

  // función flecha: => {
  useEffect(() => {
    // si esta con contenido
    
    // if (capital && interest && months) {
    //   calculate();
    // } else {
    //   reset();
    // }
    // sintaxis simplificada solo valida para un sola condición
    if (capital && interest && months) calculate();
    else reset();
    
  }, [capital, interest, months])
  // raid = []

  const calculate = () => {
    reset();
    if (!capital) {
      setErrorMessague("Añade la cantidad que quieres solicitar");
    } else if (!interest) {
      setErrorMessague("Añade el interes del prestamo");
    } else if (!months) {
      setErrorMessague("Seleccióna los meses a pagar");
    } else {
      const i = interest / 100;
      const fee = capital / ((1 - Math.pow(i + 1, -months)) / i);
      // console.log(fee.toFixed(2).replace('.', ","));
      setTotal({
        monthlyFee: fee.toFixed(2).replace('.', ","), // pago mensual
        totalPayable: (fee * months).toFixed(2).replace('.', ",") // pago total
      });
    }
  };

  const reset = () => {
    setErrorMessague("");
    setTotal(null)
  }

  return(
    <>
    <StatusBar barStyle="light-content" />
    <SafeAreaView style={styles.SafeArea}>
    <View style={styles.background}/>
      <Text style={styles.titleApp}>
        Cotizador de prestamos
      </Text>
    <Form setCapital={setCapital} setInterest={setInterest} setMonths={setMonths}/>
    </SafeAreaView>

    <ResultCalculation 
    capital={capital}
    interest={interest}
    months={months}
    total={total}
    errorMessague={errorMessague} 
    />

    <Footer calculate={calculate} />
    </>
  );
}

const styles = StyleSheet.create({
  SafeArea: {
    height: 290,
    alignItems: "center"
  },
  background: {
    backgroundColor: colors.PRIMARY_COLOR,
    height: 200,
    width: '100%',
    borderBottomLeftRadius: 30,
    borderBottomRightRadius: 30,
    position: 'absolute',
    zIndex: -1,
  },
  titleApp:{
    fontSize: 25,
    fontWeight: "bold",
    color: '#fff',
    marginTop: 15
  }
})