import { useState } from "react";
import { Pressable,Button, TextInput, View, Text, ImageBackground, Image, TouchableOpacity} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { StyleSheet } from "react-native";
import { useTogglePasswordVisibility } from "../useTogglePasswordVisibility";
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { con_PasswordVisibility } from "./con_PasswordVisibility";


export default function Registration(){
    const navigation = useNavigation();
    const [first_name, setFirstName] = useState ("");
    const [last_name, setLastName] = useState ("");
    const [email, setEmail] = useState ("");
    const [password, setPassword] = useState ("");
    const [conpass, setConPass] = useState ("");

    const { passwordVisibility, rightIcon, handlePasswordVisibility } = useTogglePasswordVisibility();
    const { passwordVisibility2, rightIcon2, handlePasswordVisibility2 } = con_PasswordVisibility();



    const register = () => {
        navigation.navigate("Profile", {
            first_name: first_name,
            last_name: last_name,
            email: email
        })
    };
    return(
        <ImageBackground source={require('./309801225_1271235570111784_2236775530307066990_n.png')} resizeMode = "cover" style = {styles.bgimage}>
        <View style={styles.container}>
            <Text style={styles.welcome}>Welcome, Onboard!</Text>
            <Text style={styles.lets}>Let's assist you in completing your tasks!</Text>
            <TextInput style={styles.txtinput} placeholder="First name" value={first_name} onChangeText={(text) => setFirstName (text)} />
            <TextInput style={styles.txtinput} placeholder="Last name" value={last_name} onChangeText={(text) => setLastName (text)} />
            <TextInput style={styles.txtinput} placeholder="Email Address" value={email} onChangeText={(text) => setEmail (text)} />
            <TextInput style={styles.txtinput} placeholder="Password" value={password} secureTextEntry={passwordVisibility} onChangeText={(text) => setPassword (text)} />
            <Pressable style={styles.eye} onPress={handlePasswordVisibility}>
                <MaterialCommunityIcons name={rightIcon} size={22} color="#232323" />
            </Pressable>
            <TextInput style={styles.constyles} placeholder="Confirm Password" value={conpass} secureTextEntry={passwordVisibility2} onChangeText={(text) => setConPass (text)} />
            <Pressable style={styles.eye} onPress={handlePasswordVisibility2}>
                <MaterialCommunityIcons name={rightIcon2} size={22} color="#232323" />
            </Pressable>
            <TouchableOpacity style={styles.regButton} onPress={()=>{
                navigation.navigate("Login");
            }}>
                <Text style={styles.text}>REGISTER</Text> 
            </TouchableOpacity>
            <Text style={styles.fg}>Already Have an Account? <Text onPress={() =>{
                    navigation.navigate('Login')
                }} style={styles.fg2}>Sign in</Text></Text>
   
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
        marginBottom:0,
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

    regButton: {
        width: 200,
        backgroundColor: '#DCB900',
        height: 50,
        width: 250,
        borderRadius: 20,
        textAlign:'center',
        marginBottom: 5,
        marginTop: -15,
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

    welcome: { 
        fontFamily: "sans-serif-condensed",
        fontWeight: "bold",
        fontSize: 30,
        marginTop: 50

    },
    
    lets : {
        fontFamily: "sans-serif-condensed",

    },
    eye: {
       marginLeft: 250, 
        top: -35,
        marginBottom: 0
    },

    constyles: {
        borderWidth: 2,
        height: 50,
        width: 300,
        padding:10,
        margin:5,
        marginTop: 10,
        textAlign:'center',
        borderRadius: 20,
        backgroundColor: '#EBE8CD',
        marginBottom:0,
        justifyContent: 'center',
        fontFamily: "sans-serif-condensed",
        marginTop: -10
     },
 

  });