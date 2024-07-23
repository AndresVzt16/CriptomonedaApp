import React, { useState, useEffect } from "react";
import { Text, View, StyleSheet, TouchableHighlight,Alert } from "react-native";
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import IconMaterial from 'react-native-vector-icons/MaterialIcons';
import { Picker } from "@react-native-picker/picker";
import axios from "axios";
const Formulario = ({moneda, criptomoneda, setCripromoneda, setMoneda , setConsultarApi}) => {
    
    const [criptomonedas, setCripromonedas] = useState([]);
    const [alert, setAlert] =useState('');

    useEffect(()=>{
        const  consultaApi = async() => {
            const url = "https://min-api.cryptocompare.com/data/top/mktcapfull?limit=10&tsym=USD";
            const response = await axios.get(url);
            setCripromonedas(response.data.Data)
        }
        consultaApi()
    },[])
    const obtenerMoneda = (moneda) => {
        setMoneda(moneda)
    }
    const obtenerCriptomoneda = (cripto) => {
        setCripromoneda(cripto)
    }
    const cotizarPrecio = () => {
        if(moneda ==="" || criptomoneda ==="") {
            mostrarAlerta();
            return;
        }
        setConsultarApi(true)

    }
    const mostrarAlerta = () => {
        Alert.alert(
            'Error', //1. titulo de alerta 
            'Todos los campos son obligatorios.', // 2. cuerpo de la alerta
            [{ 
                text:"OK"
            }]
        )
    }


    return ( 
        <View>
            <View style={styles.Contenedorlabels}>
                <View style={styles.optionLeft}>
                    <View style={styles.labelI}>
                        <IconMaterial name="attach-money" size={20} color="#09693C" />
                        <Text style={styles.textLeft}>Moneda</Text>
                    
                    </View>
                    <View style={styles.picker}>
                        <Picker style={styles.options}
                            selectedValue={moneda}
                            onValueChange={moneda => obtenerMoneda(moneda)}
                        >
                                <Picker.Item label="- Seleccione -" value=""/>
                                <Picker.Item label="Dolar" value="USD"/>
                                <Picker.Item label="Peso MXN" value="MXN"/>
                                <Picker.Item label="Euro" value="EUR"/>
                                <Picker.Item label="Libra" value="GBP"/>
                        </Picker>

                    </View>
                    
                </View>
                <View style={styles.optionRight}>
                    <View style={styles.labelD}>
                        <Text style={styles.textRight}>Criptomoneda  </Text>
                        <Icon name="ethereum" size={20} color="#093769" />
                    </View>
                    <View style={styles.picker}>
                        <Picker style={styles.options} 
                            selectedValue={criptomoneda}
                            onValueChange={criptomoneda => obtenerCriptomoneda(criptomoneda)}
                        >
                                <Picker.Item label="- Seleccione -" value=""/>
                                {
                                    criptomonedas.map( cripto => (   
                                        <Picker.Item key={cripto.CoinInfo.Id} label={cripto.CoinInfo.FullName} value={cripto.CoinInfo.Name}/>
                                    ))
                                }
                        </Picker>

                    </View>
                </View>
            
            
            </View>
            <TouchableHighlight onPress={() => cotizarPrecio()} style={styles.button}>
                <Text style={styles.textBlanco}>Consultar</Text>
            </TouchableHighlight>
        </View>

        
     );
}

const styles = StyleSheet.create({
    labelI:{
        textAlign:"left",
        flex:1,
        fontSize:16,
        fontWeight:"400",
        flexDirection:"row",
        alignItems:"center",
        
        

    },
    textLeft:{
        textAlign:"left",
        fontSize:16,
        color:"#464646fd",
        fontWeight:"500",
        marginVertical:15
        
    },
    labelD:{
        
        flex:1,
        fontSize:16,
        fontWeight:"400",
        flexDirection:"row",
        alignItems:"center",
    },
    textRight:{
        flex:1,
        textAlign:"right",
        fontSize:16,
        color:"#464646fd",
        fontWeight:"500",
        marginVertical:15
    },
    Contenedorlabels:{
        marginVertical:15,
        borderTopColor:"#09566955",
        borderTopWidth:1,
        flexDirection:"row",
        justifyContent:"space-between",
        borderRadius:15,
        gap:10,
        backgroundColor:"#fefefe",
        flex:1
       
    },
    options:{
       padding:0,
       color:"#000"
    },
    optionLeft:{
       
        flex:1,
    },
    optionRight:{
       
        flex:1,
    },
    picker:{
        backgroundColor:"#ebebeb",
        flex:1,
        height:40,
        borderRadius:10,
        justifyContent:"center",    
    },
    button:{
        paddingVertical:10,
        borderRadius:10,
        color:"#fff",
        backgroundColor:"#010f20f4",
        marginVertical:30
    },
    textBlanco:{
        textAlign:"center",
        color:"#fff"
    }

})
 
export default Formulario;