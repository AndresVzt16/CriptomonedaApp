import React from "react";
import { Text,StyleSheet,Platform, View } from "react-native";
const Header = () =>  (  
    <View style={styles.header}>
        <Text style={styles.encabezado}>Criptomonedas</Text>
        <Text style={styles.tipo}>Cotizador</Text>
    </View>
    
)

const styles = StyleSheet.create({
    header:{
        flexDirection:"row",
        justifyContent:"space-between",
        alignItems:"flex-start",
        marginTop:15,
        paddingHorizontal:5,
        backgroundColor:"#fff"

    },
    encabezado:{
        
        fontFamily:"Lato-Black",
        fontSize:20,
        
        color:"#133a6d",
        paddingVertical:5,
     
    
    },
    tipo:{
        
        backgroundColor:"#ebedfd",
        paddingVertical:5,
        paddingHorizontal:20,
        borderRadius:5,
        color: "#171258",
        fontWeight:"500"

    }
    
})
 
export default Header;
