import { useNavigation } from "@react-navigation/native";
import { useState } from "react";
import { Button,Text, TextInput, View, TouchableOpacity,Image, ImageBackground} from "react-native";
import { StyleSheet } from "react-native";
import Registration from "../registration";


export default function Login (){
    const navigation = useNavigation ();
    const [email, setEmail] =useState('');
    const [password,setPassword]=useState('');
    const [warning,setWarning] =useState('');
    return (
        <ImageBackground source={require('./309801225_1271235570111784_2236775530307066990_n.png')} resizeMode = "cover" style = {styles.bgimage}>
        <View  style ={styles.container}>
            <Text>{warning}</Text>
            <TextInput style={styles.txtinput} placeholder="Email Address" value={email} onChangeText={setEmail}/>
            <TextInput style={styles.txtinput} placeholder="Password"  value={password} onChangeText={setPassword} secureTextEntry={true}/>
            <TouchableOpacity style={styles.loginButton} >
                <Button title ="Log in" onPress={() =>{
                    navigation.navigate('Dashboard')
                }}/>
            </TouchableOpacity>
            <TouchableOpacity style={styles.Button}>
                <Button title ="Create Account" onPress={() =>{
                    navigation.navigate('Registration');
                }} />
              </TouchableOpacity>
            <Text onPress={()=> {
                navigation.navigate('Registraton')
            }}>Forgot password?</Text>
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
        height: 40,
        width: 300,
        padding:10,
        margin:5,
        textAlign:'center',
        borderRadius: 20
    },
    
    Button: {
        margin: 5,
        width:200,
        back: '#463a0b'
    },

    loginButton: {
        width: 200,
        backgroundColor: '#DCB900'
    },
    image:{
        justifyContent: "center",
        width: 250,
        height: 250
    },
    bgimage: {
        flex: 1
    }

  });