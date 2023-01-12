import { useState } from "react";
import { Pressable,Button, TextInput, View, Text, ImageBackground, Image, TouchableOpacity} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { StyleSheet } from "react-native";
import verif from './verif.png';


export default function Verification(){
    const navigation = useNavigation();
    
    return(
        <ImageBackground source={verif} style = {styles.container}>
        <View>
        <Text style={styles.verText}>Verification</Text>
        <Text style={styles.subText}>Enter 6 digit code from your email address</Text>
        <TextInput style={styles.codeInput1} keyboardType="numeric" maxLength={1}/>
        <TextInput style={styles.codeInput2} keyboardType="numeric" maxLength={1}/>
        <TextInput style={styles.codeInput3} keyboardType="numeric" maxLength={1}/>
        <TextInput style={styles.codeInput4} keyboardType="numeric" maxLength={1}/>
        <TextInput style={styles.codeInput5} keyboardType="numeric" maxLength={1}/>
        <TextInput style={styles.codeInput6} keyboardType="numeric" maxLength={1}/>
        <TouchableOpacity>
        <Text style={styles.resend}>Resend Code?</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.verifButton}>
            <Text style={styles.verifTxt}>VERIFY</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.BacButton} onPress={()=>{
            navigation.navigate ("Forgotpassword");
        }}>
            <Text style={styles.verifTxt}>BACK</Text>
        </TouchableOpacity>
        </View>
        </ImageBackground>
     
    )

}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#EFECE1',
      alignItems: 'flex-start',
      justifyContent: 'flex-start',
    },

    verText:{
        fontStyle: "normal",
        fontSize: 35,
        textAlign:'center',
        height: 60,
        padding:5,
        margin:5,
        fontWeight: "bold",
        fontFamily: "sans-serif-condensed",
        top: 220,
        left: 35
    },

    subText: {
        fontStyle: "normal",
        fontSize: 18,
        textAlign:'center',
        fontFamily: "sans-serif-condensed",
        top: 210,
        left: 30
    },

    codeInput1: {
        borderWidth: 2,
        height: 45,
        width: 45,
        padding:10,
        left: 30,
        marginTop: 230,
        textAlign:'center',
        borderRadius: 10,
        backgroundColor: '#EBE8CD',
        marginBottom:0,
        justifyContent: 'center',
        fontFamily: "sans-serif-condensed"
    },

    codeInput2: {
        borderWidth: 2,
        height: 45,
        width: 45,
        padding:10,
        left: 80,
        bottom: 45,
        textAlign:'center',
        borderRadius: 10,
        backgroundColor: '#EBE8CD',
        marginBottom:0,
        justifyContent: 'center',
        fontFamily: "sans-serif-condensed"
    },

    codeInput3: {
        borderWidth: 2,
        height: 45,
        width: 45,
        padding:10,
        left: 130,
        marginTop: -90,
        textAlign:'center',
        borderRadius: 10,
        backgroundColor: '#EBE8CD',
        marginBottom:0,
        justifyContent: 'center',
        fontFamily: "sans-serif-condensed"
    },

    codeInput4: {
        borderWidth: 2,
        height: 45,
        width: 45,
        padding:10,
        left: 180,
        marginTop: -45,
        textAlign:'center',
        borderRadius: 10,
        backgroundColor: '#EBE8CD',
        marginBottom:0,
        justifyContent: 'center',
        fontFamily: "sans-serif-condensed"
    },

    codeInput5: {
        borderWidth: 2,
        height: 45,
        width: 45,
        padding:10,
        left: 230,
        marginTop: -45,
        textAlign:'center',
        borderRadius: 10,
        backgroundColor: '#EBE8CD',
        marginBottom:0,
        justifyContent: 'center',
        fontFamily: "sans-serif-condensed"
    },

    codeInput6: {
        borderWidth: 2,
        height: 45,
        width: 45,
        padding:10,
        left: 280,
        marginTop: -45,
        textAlign:'center',
        borderRadius: 10,
        backgroundColor: '#EBE8CD',
        marginBottom:0,
        justifyContent: 'center',
        fontFamily: "sans-serif-condensed"
    },

    resend: {
        left: 180,
        width:200,
        marginTop: 10,
        textAlign: "center",
        color: "#3F52FD",
        fontWeight: "bold",
        textDecorationLine: 'underline',
        fontFamily: "sans-serif-condensed",
        fontSize: 15
    },
    verifButton: {
        width: 200,
        backgroundColor: '#DCB900',
        height: 50,
        width: 250,
        left: 55,
        borderRadius: 20,
        textAlign:'center',
        marginTop: 20
    },

    verifTxt:{
        fontStyle: "normal",
        fontSize: 25,
        textAlign:'center',
        height: 60,
        padding:5,
        margin:5,
        fontWeight: "bold",
        fontFamily: "sans-serif-condensed"
    },
    BacButton: {
        width: 200,
        backgroundColor: '#DCB900',
        height: 50,
        width: 250,
        left: 55,
        borderRadius: 20,
        textAlign:'center',
        marginTop: 15
    },


    
}
)
