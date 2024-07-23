import React from "react";

import { Text, View, StyleSheet } from "react-native";

const Cotizacion = ({resultado}) => {
    if(Object.keys(resultado).length ===0) return null
    return ( 
        <>
        
        <View style={styles.resultados}>
            
                <View style={styles.resultadoP}>
                    <Text style={styles.spanP}>Valor:</Text>
                    <Text style={styles.datoP} >{resultado.PRICE}</Text>
                </View>
                <View style={styles.resultado}>
                    <Text style={styles.spanI}>Minimo del día: </Text>
                    <Text style={styles.datoI} >{resultado.LOWDAY}</Text>
                </View>
                <View style={styles.resultado}>
                    <Text style={styles.spanD}>Maximo del día:</Text>
                    <Text style={styles.datoD} >{resultado.HIGHDAY}</Text>
                </View>
                <View style={styles.resultado}>
                    <Text style={styles.spanI}>Variación: </Text>
                    <Text style={styles.datoI} >{resultado.CHANGEPCT24HOUR} %</Text>
                </View>
                <View style={styles.resultado}>
                    <Text style={styles.spanD}>Actualización:</Text>
                    <Text style={styles.datoD} >{resultado.LASTUPDATE}</Text>
                    
                </View>
        </View>

           
        </>
     );
}
const styles = StyleSheet.create({
    datoI:{
        width:"100%",
        color:"#266491",
        width:"100%",
        textAlign:"left",
        fontSize:16,
        fontWeight:"500",
    },
    datoD:{
        width:"100%",
        color:"#266491",
        width:"100%",
        textAlign:"right",
        fontSize:16,
        fontWeight:"500",
    },
    resultado:{
        width:"48%",
        flexWrap:"wrap",
        paddingHorizontal:20,
        paddingVertical:10,
        flexDirection:"row",
        backgroundColor:"#ffffff",
     
        borderRadius:10,
    },
   
    spanI:{
        width:"100%",
        fontSize:16,
        fontWeight:"600",
        textAlign:"left",
        color:"#797979",
        flexWrap:"wrap",
        flexDirection:"row"
    },
    spanD:{
        width:"100%",
        fontSize:16,
        fontWeight:"600",
        textAlign:"right",
        color:"#797979",
        flexWrap:"wrap",
        flexDirection:"row"
    },
    datoP:{
        color:"#569126",
        width:"100%",
        textAlign:"center",
        fontSize:30,
        fontWeight:"500",
    },
    resultadoP:{
        width:"100%",
        flexWrap:"wrap",
        paddingHorizontal:20,
        paddingVertical:10,
        flexDirection:"row",
        backgroundColor:"#ffffff",
        borderTopWidth:1,
        borderColor:"#a3bd8f",
        borderRadius:10,
    },
   
    spanP:{
        width:"100%",
        fontSize:18,
        fontWeight:"900",
        textAlign:"center",
        color:"#6d6d6d"
    },
    resultados:{
        justifyContent:"center",
        flexDirection:"row",
        flexWrap:"wrap",
        alignItems:"center",
        gap:10
    }
})
 
export default Cotizacion;