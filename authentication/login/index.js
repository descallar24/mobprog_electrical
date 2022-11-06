import { useNavigation } from "@react-navigation/native";
import { useState } from "react";
import { Pressable, Button,Text, TextInput, View, TouchableOpacity,Image, ImageBackground} from "react-native";
import { StyleSheet } from "react-native";
import { useTogglePasswordVisibility } from "../useTogglePasswordVisibility";
import { MaterialCommunityIcons } from '@expo/vector-icons';

export default function Login (){
    const navigation = useNavigation ();
    const [email, setEmail] =useState('');
    const [password,setPassword]=useState('');
    const [warning,setWarning] =useState('');
    const { passwordVisibility, rightIcon, handlePasswordVisibility } = useTogglePasswordVisibility();
  
    return (
        <ImageBackground source={require('./309801225_1271235570111784_2236775530307066990_n.png')} resizeMode = "cover" style = {styles.bgimage}>
        <View  style ={styles.container}>
            <Image source={require('./electriCAL__2_-removebg-preview.png')}style = {styles.image}/>
            <Text>{warning}</Text>
            <TextInput style={styles.txtinput} placeholder="Email Address" value={email} onChangeText={setEmail}/>
            <TextInput style={styles.txtinput} placeholder="Password"  value={password} onChangeText={setPassword} secureTextEntry={passwordVisibility}/>
            <Pressable style={styles.eye} onPress={handlePasswordVisibility}>
                <MaterialCommunityIcons name={rightIcon} size={22} color="#232323" />
            </Pressable>
            <TouchableOpacity style={styles.loginButton} onPress={() =>{
                    navigation.navigate('Dashboard')
                }}>
                <Text style={styles.text}>LOG IN</Text>    
            </TouchableOpacity>
            <TouchableOpacity onPress={() =>{
                    navigation.navigate('Registration');
                }}>
                <Text style={styles.fg}>Forgot Password?</Text>
              </TouchableOpacity>
            <Text style={styles.fg}>Don't have an account?
                 <Text onPress={() =>{
                    navigation.navigate('Registration');
                }} style={styles.fg2}> Sign Up </Text> </Text>
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
        marginBottom: 10,
        justifyContent: 'center',
        fontFamily: "sans-serif-condensed"

    },
    
    fg: {
        width:250,
        back: '#463a0b',
        textAlign: "center",
        justifyContent: 'center',
        marginBottom: 5,
        fontFamily: "sans-serif-condensed",
        fontSize: 15,


    },

    fg2: {
        margin: 5,
        width:200,
        back: '#463a0b',
        textAlign: "center",
        color: "#3F52FD",
        fontWeight: "800",
        textDecorationLine: 'underline',
        fontFamily: "sans-serif-condensed"
    },

    loginButton: {
        width: 200,
        backgroundColor: '#DCB900',
        height: 50,
        width: 250,
        borderRadius: 20,
        textAlign:'center',
        marginBottom: 5,
        marginTop: -25
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
    image:{
        justifyContent: "center",
        width: 300,
        height: 280,
        marginBottom: -20
    
    },
    bgimage: {
        flex: 1
    },

    eye: {
        marginLeft: 250, 
         top: -45,
     },
  });