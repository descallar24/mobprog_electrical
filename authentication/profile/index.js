import { useNavigation } from "@react-navigation/native";
import { useState } from "react";
import { Text, TextInput, View, TouchableOpacity,Image, ImageBackground} from "react-native";
import { StyleSheet } from "react-native";
import Registration from "../registration";



export default function Profile (){
    const navigation = useNavigation ();
    const {first_name,last_name,email} = Registration ();
    return (
        <ImageBackground source={require('./309801225_1271235570111784_2236775530307066990_n.png')} resizeMode = "cover" style = {styles.bgimage}>
        <View  style ={styles.container}>
            <Text style={styles.welcome}>Profile</Text>
            <Text>First Name: {first_name}</Text>
            <Text>Last Name: {last_name}</Text>
            <Text>Email: {email}</Text>
        </View>
        </ImageBackground>
    )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
    
    },
    
    txtinput:{
        borderWidth: 2,
        height: 50,
        width: 300,
        padding:10,
        margin:5,
        marginTop: 10,
        textAlign:'center',
        borderRadius: 20,
        backgroundColor: '#EBE8CD',
        justifyContent: 'center',
        fontFamily: "sans-serif-condensed"

    },
    

    text:{
        fontStyle: "normal",
        fontSize: 25,
        textAlign:'center',
        height: 60,
        padding:5,
        margin:5,
        fontWeight: "bold",
        fontFamily: "sans-serif-condensed"

    },
  
    bgimage: {
        flex: 1
    },

    
     loginButton: {
        width: 200,
        backgroundColor: '#DCB900',
        height: 50,
        width: 250,
        borderRadius: 20,
        textAlign:'center',
        marginTop: 20
    },

    forgot: {
        fontStyle: "normal",
        fontSize: 18,
        textAlign:'center',
        height: 60,
        padding:5,
        marginTop:-5,
        fontWeight: "thin",
        fontFamily: "sans-serif-condensed",
    },
    welcome: { 
        fontFamily: "sans-serif-condensed",
        fontWeight: "bold",
        fontSize: 40,
        top: -5,
        marginLeft: 15,
        
    },
 

  });