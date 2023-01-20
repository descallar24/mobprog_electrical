import * as React from 'react';
import {Image, Button,View,Text,SafeAreaView, StyleSheet, TouchableOpacity} from 'react-native';

import { ScrollView } from 'react-native-gesture-handler';

const YourDevices = ({ navigation }) => {
  return (
    <ScrollView>
      <SafeAreaView style={styles.container}>
   
       
        <View>
        <Text style={styles.textAbout}>YOUR DEVICES</Text>
        </View>
        
        <TouchableOpacity style={styles.Bbutton} onPress={()=> {
          navigation.navigate('DrawBar')
        }}>
          <Text style={styles.btext}>BACK</Text>
        </TouchableOpacity>
        <View>
        <Text style={styles.h1}></Text>
        <Text style={styles.h1}></Text>
        <Text style={styles.h1}></Text>
        <Text style={styles.h1}></Text>
        <Text style={styles.h1}></Text>
        <Text style={styles.h2}></Text>
        <Text style={styles.h2}></Text>
        <Text style={styles.h2}></Text>
        <Text style={styles.h2}></Text>
        <Text style={styles.h2}></Text>
        <Text style={styles.t1}>No. of Device: </Text>
        <Text style={styles.t2}>No. of Device: </Text>
        <Text style={styles.t3}>No. of Device: </Text>
        <Text style={styles.t4}>No. of Device: </Text>
        <Text style={styles.t5}>No. of Device: </Text>
        <Text style={styles.t6}>No. of Device: </Text>
        <Text style={styles.t7}>No. of Device: </Text>
        <Text style={styles.t8}>No. of Device: </Text>
        <Text style={styles.t9}>No. of Device: </Text>
        <Text style={styles.t0}>No. of Device: </Text>
        <Text style={styles.p1}>No. of hours: </Text>
        <Text style={styles.p2}>No. of hours: </Text>
        <Text style={styles.p3}>No. of hours: </Text>
        <Text style={styles.p4}>No. of hours: </Text>
        <Text style={styles.p5}>No. of hours: </Text>
        <Text style={styles.p6}>No. of hours: </Text>
        <Text style={styles.p7}>No. of hours: </Text>
        <Text style={styles.p8}>No. of hours: </Text>
        <Text style={styles.p9}>No. of hours: </Text>
        <Text style={styles.p0}>No. of hours: </Text>

        </View>
      </SafeAreaView>
    </ScrollView>
  );
}

export default YourDevices;

const styles = StyleSheet.create({
    p0:{
        fontSize:15,
        marginVertical:45,
        top:-3025,
        left:105,
        fontWeight:'bold'
},    
    p9:{
        fontSize:15,
        marginVertical:45,
        top:-3095,
        left:105,
        fontWeight:'bold'
},   
    p8:{
        fontSize:15,
        marginVertical:45,
        top:-3165,
        left:105,
        fontWeight:'bold'
},   
    p7:{
        fontSize:15,
        marginVertical:45,
        top:-3235,
        left:105,
        fontWeight:'bold'
},
        p6:{
        fontSize:15,
        marginVertical:45,
        top:-3305,
        left:105,
        fontWeight:'bold'
},
    p5:{
        fontSize:15,
        marginVertical:45,
        top:-2480,
        left:-90,        
        fontWeight:'bold'
    },
    p4:{
        fontSize:15,
        marginVertical:45,
        top:-2550,
        left:-90,        
        fontWeight:'bold'
    },
    p3:{
        fontSize:15,
        marginVertical:45,
        top:-2620,
        left:-90,
        fontWeight:'bold'
    },
    p2:{
        fontSize:15,
        marginVertical:45,
        top:-2690,
        left:-90,
        fontWeight:'bold'
    },
    p1:{
        fontSize:15,
        marginVertical:45,
        top:-2760,
        left:-90,
        fontWeight:'bold'
    },
    t0:{
        fontSize:15,
        marginVertical:45,
        top:-1955,
        left:105,
        fontWeight:'bold'
    },
    t9:{
        fontSize:15,
        marginVertical:45,
        top:-2025,
        left:105,
        fontWeight:'bold'
    },
    t8:{
        fontSize:15,
        marginVertical:45,
        top:-2095,
        left:105,
        fontWeight:'bold'
    },
    t7:{
        fontSize:15,
        marginVertical:45,
        top:-2165,
        left:105,
        fontWeight:'bold'
    },
    t6:{
        fontSize:15,
        marginVertical:45,
        top:-2235,
        left:105,
        fontWeight:'bold'

    },

    t5:{
        fontSize:15,
        marginVertical:45,
        top:-1410,
        left:-90,
        fontWeight:'bold'

    },
    t4:{
        fontSize:15,
        marginVertical:45,
        top:-1480,
        left:-90,
        fontWeight:'bold'

    },
    t3:{
        fontSize:15,
        marginVertical:45,
        top:-1550,
        left:-90,
        fontWeight:'bold'

    },
    t2:{
        fontSize:15,
        marginVertical:45,
        top:-1620,
        left:-90,
        fontWeight:'bold'

    },
    t1:{
        fontSize:15,
        marginVertical:45,
        top:-1690,
        left:-90,
        fontWeight:'bold'

    },
   
    h1:{
       
        marginVertical:30,
        backgroundColor: "#F8D866",
        borderRadius: 10,
        width:150,
        height: 120,
        left:-100
    },
  
    h2:{
       
        marginVertical:30,
        backgroundColor: "#F8D866",
        borderRadius: 10,
        width:150,
        height: 120,
        left:100,
        top: -900
    },
  
  container: {
    alignItems: 'center',
    height: 1100,
  },
  
  btext:{
      fontStyle: "normal",
      fontSize: 23,
      textAlign:'center',
      width: 50,
      fontWeight: "bold",
      fontFamily: "sans-serif-condensed",
  },



  Bbutton: {
      backgroundColor:'#FEF0B3',
      alignItems: "center",
      borderRadius: 15,
      width: 100,
      height: 35,
      top: -5,
      left: -140,
      textAlign: 'center'
      
  },

  textAbout: {
      fontStyle: "normal",
      fontSize: 25,
      height: 60,
      width: 400,
      padding:13,
      fontWeight: "bold",
      fontFamily: "sans-serif-condensed",
      backgroundColor: "#F8D866",
      textAlign: 'center',
      top:40
  },
});