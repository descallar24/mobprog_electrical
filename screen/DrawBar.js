import { StatusBar } from 'expo-status-bar';
import { useNavigation } from "@react-navigation/native";
import React, { useRef, useState } from 'react';
import {TextInput, Animated, Image, SafeAreaView, StyleSheet, Text, TouchableOpacity, View, Touchable } from 'react-native';
import About from './About';
import Manual from './Manual';
import female from './pics/female.png';
import menu from './pics/menu.png';
import suga from './pics/suga.png';
import close from './pics/close.png'
import { FontAwesome5 } from '@expo/vector-icons';

export default function DrawBar() {
    const [currentTab, setCurrentTab] = useState("Dashboard");
    const [showMenu, setShowMenu] = useState(false);
    const navigation = useNavigation();
    const [budget, setBudget] = useState('')
    const kwh = 16.673;
    const [result, setResult] = useState('')
    const offsetValue = useRef(new Animated.Value(0)).current;
    const scaleValue = useRef(new Animated.Value(1)).current;
    const closeButtonOffset = useRef(new Animated.Value(0)).current;
   


    return (
        <SafeAreaView style = {styles.container}>
            <View style={{ justifyContent: 'flex-start', padding: 15 }}>
                <Image source={female} style={{
          width: 100,
          height: 100,
          borderRadius: 10,
          marginTop: 50,
          marginLeft: 25
        }}></Image>
        <Text style = {styles.text}>Lady Maxine Sarsalijo</Text>
        <TouchableOpacity>
            <Text style = {styles.vprof}>View Profile</Text>
            </TouchableOpacity>

           <View style={{ flexGrow: 1, marginTop: -380 }}>
            {
                //Tab
            }
            {TabButton(currentTab,setCurrentTab, "Manual", Manual)}
            {TabButton(currentTab,setCurrentTab, "About", About)}
            {TabButton(currentTab,setCurrentTab, "FAQ's", About)}
            {TabButton(currentTab,setCurrentTab, "History", About)}
            {TabButton(currentTab,setCurrentTab, "Your Devices", About)}
           </View>

           <View style = {{marginBottom: 30}}>
           {TabButton(currentTab,setCurrentTab, "Log Out", About)}
           </View>

           {
            //overlay
           }

           <Animated.View style = {{
            flex: 1,
            backgroundColor: "#EFECE1",
            position: 'absolute',
            top: 0,
            bottom: 0,
            left:0,
            right: 0, 
            width: 480,
            postion: 'absolute',
            paddingVertical: 10,
            paddingHorizontal: 10,
            borderRadius: showMenu ? 15 : 0,
            transform: [
                {scale: scaleValue},
                {translateX: offsetValue}
            ]      
           }}>
            <TouchableOpacity onPress={() => {
            // Do Actions Here....
            // Scaling the view...
            Animated.timing(scaleValue, {
              toValue: showMenu ? 1 : 0.88,
              duration: 300,
              useNativeDriver: true
            })
              .start()


            Animated.timing(offsetValue, {
              // YOur Random Value...
              toValue: showMenu ? 0 : 230,
              duration: 300,
              useNativeDriver: true
            })
              .start()

            Animated.timing(closeButtonOffset, {
              // YOur Random Value...
              toValue: !showMenu ? -30 : 0,
              duration: 300,
              useNativeDriver: true
            })
              .start()

            setShowMenu(!showMenu);
          }} >
                <Image source={showMenu ? close :menu} style={{
                    width: 30,
                    height: 45,
                    tintColor: 'black',
                    marginTop: 40
                }}></Image>
            </TouchableOpacity>
            <Image source={suga} style={{
                    justifyContent: "center",
                    width: 150,
                    height: 150,
                    marginBottom: -5,
                    marginTop: 10,
                    marginLeft: 100
                }}></Image>
                 <Text style = {{
                     fontStyle: "normal",
                     fontSize: 25,
                     textAlign:'center',
                     height: 60,
                     padding:5,
                     margin:5,
                     fontWeight: "bold",
                     fontFamily: "sans-serif-condensed",
                     marginBottom: 400,
                     right: 55
                 }}>
                 Input Your Budget: {budget} 
            </Text>
            <TextInput style ={{borderWidth: 2,
                    height: 50,
                    width: 330,
                    padding:10,
                    margin:5,
                    marginTop:-410,
                    textAlign:'center',
                    borderRadius: 20,
                    backgroundColor: '#EBE8CD',
                    marginBottom: 10,
                    justifyContent: 'center',
                    fontFamily: "sans-serif-condensed"}} placeholder="PHP" 
                    keyboardType="numeric"
                    onSubmitEditing={(val) => setBudget(val.nativeEvent.text)}/>
            <TouchableOpacity style={{width: 200,
                    backgroundColor: '#DCB900',
                    height: 50,
                    width: 130,
                    borderRadius: 20,
                    textAlign:'center',
                    marginBottom: 5,
                    marginTop: 5,
                    marginLeft: 0,
                    left: 25}}>
                <Text style = {{
                    fontStyle: "normal",
                    fontSize: 25,
                    textAlign:'center',
                    height: 60,
                    padding:5,
                    margin:5,
                    fontWeight: "bold",
                    fontFamily: "sans-serif-condensed",
                    marginBottom: 400
                }}>SAVE</Text>
            </TouchableOpacity>
            <TouchableOpacity style={{
                width: 200,
                backgroundColor: '#DCB900',
                height: 50,
                width: 130,
                borderRadius: 20,
                textAlign:'center',
                marginBottom: 5,
                marginTop: -55,
                left: 180
            }}>
                <Text style = {{ fontStyle: "normal",
                    fontSize: 25,
                    textAlign:'center',
                    height: 60,
                    padding:5,
                    margin:5,
                    fontWeight: "bold",
                    fontFamily: "sans-serif-condensed",
                    marginBottom: 400}}>UPDATE</Text>
            </TouchableOpacity> 
            <Text style = {{
                fontStyle: "normal",
                fontSize: 30,
                textAlign:'center',
                fontWeight: "bold",
                fontFamily: "sans-serif-condensed",
                marginTop: 20,
                marginLeft: -120,
                color: "red"
            }}>Electricity Usage Calculator</Text>   
            <Text style = {{
                fontStyle: "normal",
                fontSize: 20,
                textAlign:'center',
                fontWeight: "bold",
                fontFamily: "sans-serif-condensed",
                marginTop: 5,
                marginLeft: -120
            }} >Price of KW/H: ₱{kwh}</Text>
            <Text style = {{
                fontStyle: "normal",
                fontSize: 20,
                fontWeight: "bold",
                fontFamily: "sans-serif-condensed",
                marginTop: 20,
                marginLeft: 50
            }}>Usage: </Text>
            <TextInput style = {{
                borderWidth: 2,
                height: 40,
                width: 220,
                padding:10,
                textAlign:'center',
                borderRadius: 20,
                backgroundColor: '#EBE8CD',
                justifyContent: 'center',
                fontFamily: "sans-serif-condensed",
                marginTop: -33,
                marginLeft: 110
            }} placeholder="Input Electricity Usage " keyboardType="numeric"/>
            <TouchableOpacity style={{
                width: 200,
                backgroundColor: '#DCB900',
                height: 50,
                width: 250,
                borderRadius: 20,
                textAlign:'center',
                marginBottom: 5,
                marginTop: 25,
                left: 45
            }}>
                <Text style = {{
                    fontStyle: "normal",
                    fontSize: 25,
                    textAlign:'center',
                    height: 60,
                    padding:5,
                    margin:5,
                    fontWeight: "bold",
                    fontFamily: "sans-serif-condensed",
                    marginBottom: 400
                }}>CALCULATE</Text>
            </TouchableOpacity>

           </Animated.View>

            </View>
        </SafeAreaView>
    )
}

const TabButton = (currentTab, setCurrentTab,title) =>{
    return (
        <TouchableOpacity onPress={() =>{
            setCurrentTab(title)
        }}>
               <View style ={styles.Button}>
                <Text style = {styles.textMan}>{title }</Text>
               </View>
            </TouchableOpacity>

    );

}




const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#FCD859',
      alignItems: 'flex-start',
      justifyContent: 'flex-start'
    },
    
    text:{
        fontStyle: "normal",
        fontSize: 18,
        textAlign:'center',
        height: 60,
        padding:0,
        margin:0,
        fontWeight: "bold",
        fontFamily: "sans-serif-condensed",
        marginBottom: 400
        
    },

    textMan:{
        fontStyle: "normal",
        fontSize: 20,
        fontWeight: "bold",
        fontFamily: "sans-serif-condensed",
        paddingLeft: 15
        
        
    },

    vprof: {
        marginTop: -435,
        color: 'white',
        marginLeft: 35,
        textDecorationLine: 'underline',

    },
    Button: {
        backgroundColor:'#FEF0B3',
        flexDirection: "row",
        alignItems: "center",
        paddingVertical: 8,
        paddingLeft: 20,
        paddingRight: 40,
        borderRadius: 20,
        marginTop: 15,
    },

    textbud: {
            fontStyle: "normal",
            fontSize: 25,
            textAlign:'center',
            height: 60,
            padding:5,
            margin:5,
            fontWeight: "bold",
            fontFamily: "sans-serif-condensed",
            marginBottom: 400
    },

    txtinput:{
        borderWidth: 2,
        height: 50,
        width: 330,
        padding:10,
        margin:5,
        marginTop:-400,
        textAlign:'center',
        borderRadius: 20,
        backgroundColor: '#EBE8CD',
        marginBottom: 10,
        justifyContent: 'center',
        fontFamily: "sans-serif-condensed"
    },
    saveButton: {
        width: 200,
        backgroundColor: '#DCB900',
        height: 50,
        width: 130,
        borderRadius: 20,
        textAlign:'center',
        marginBottom: 5,
        marginTop: 5,
        marginLeft: -140

    },
    upButton: {
        width: 200,
        backgroundColor: '#DCB900',
        height: 50,
        width: 130,
        borderRadius: 20,
        textAlign:'center',
        marginBottom: 5,
        marginTop: -55,
        marginRight: -140
    },
    steps:{
        fontStyle: "normal",
        fontSize: 18,
        textAlign:'center',
        
        fontWeight: "bold",
        fontFamily: "sans-serif-condensed",
        marginRight: 280
    },
    ins1:{
        fontStyle: "normal",
        fontSize: 12,
        textAlign:'center',
        fontWeight: "bold",
        fontFamily: "sans-serif-condensed",
        marginTop: 5,
        marginLeft: -60

    },
    ins2:{
        fontStyle: "normal",
        fontSize: 12,
        textAlign:'center',
        fontWeight: "bold",
        fontFamily: "sans-serif-condensed",
        marginTop: -5,
        marginLeft: 10
    },
    calctext:{
        fontStyle: "normal",
        fontSize: 25,
        textAlign:'center',
        fontWeight: "bold",
        fontFamily: "sans-serif-condensed",
        marginTop: 5,
        marginLeft: 10,
        color: "red"

        

    },
    price:{
        fontStyle: "normal",
        fontSize: 18,
        textAlign:'center',
        fontWeight: "bold",
        fontFamily: "sans-serif-condensed",
        marginTop: 5,
        marginLeft: -50

    },
    usage:{
        fontStyle: "normal",
        fontSize: 18,
        fontWeight: "bold",
        fontFamily: "sans-serif-condensed",
        marginTop: 15,
        marginLeft: -170

    },
    usageInput:{
        borderWidth: 2,
        height: 35,
        width: 180,
        padding:10,
        textAlign:'center',
        borderRadius: 20,
        backgroundColor: '#EBE8CD',
        justifyContent: 'center',
        fontFamily: "sans-serif-condensed",
        marginTop: -30,
        marginLeft: 60
    },

    calcButton: {
        width: 200,
        backgroundColor: '#DCB900',
        height: 50,
        width: 250,
        borderRadius: 20,
        textAlign:'center',
        marginBottom: 5,
        marginTop: 25
    },


  });