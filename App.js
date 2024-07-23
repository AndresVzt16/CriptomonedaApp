/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React,{useState,useEffect} from 'react';

import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
  Image,
  ActivityIndicator
} from 'react-native';


import Header from './components/Header';
import Formulario from './components/Formulario';
import axios from 'axios';
import Cotizacion from './components/Cotizacion';

const  App = () => {
  const [moneda, setMoneda] = useState('');
  const [criptomoneda, setCripromoneda] = useState('');
  const [consultarApi, setConsultarApi] = useState(false);
  const [resultado, setResultado] = useState({})
  const[cargando, setCargando] = useState(false)
  useEffect(()=> {
    
      const cotizarCriptomoneda = async() => {
        if(consultarApi){
          setCargando(true)
          const url =`https://min-api.cryptocompare.com/data/pricemultifull?fsyms=${criptomoneda}&tsyms=${moneda}`;
          const response = await axios.get(url);
          

          setResultado(response.data.DISPLAY[criptomoneda][moneda]);
          setConsultarApi(false)
          setCargando(false)
        }
      }
      cotizarCriptomoneda();
  },[consultarApi])
  const sppiner = cargando ?<ActivityIndicator size="large"/> :  <Cotizacion resultado={resultado}/>
  return (
    <>
    <ScrollView style={styles.general}>
      <Header/>
      <View style={styles.contenedor}>
        <Image 
          style={styles.imagen}
          source={require('./assets/img/cryptomonedas.png')} />
        

      </View>
      <Formulario 
        moneda = {moneda}
        criptomoneda = {criptomoneda}
        setCripromoneda ={setCripromoneda}
        setMoneda = {setMoneda}
        setConsultarApi= {setConsultarApi}
      />
      {sppiner}
    </ScrollView>
    
    
    </>
  );
}

const styles = StyleSheet.create({
  contenedor:{
  
    width:"100%",
    marginTop:10,
    height:250,
    
    paddingVertical:2,
    paddingHorizontal:5,
  
    borderRadius:25,
    borderColor:"#296bc275",
    borderWidth:1.5,
   
    overflow:"hidden",
    justifyContent:"center",
    backgroundColor:"#010f20f4",
    padding:5
    
  },
  imagen:{
    width:"100%",
    height:150,
  
    
  },
  general:{
    paddingHorizontal:"4%",
    backgroundColor:"#fff"
  }
});

export default App;
