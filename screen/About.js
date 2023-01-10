import * as React from 'react';
import {Image, Button,View,Text,SafeAreaView, StyleSheet, TouchableOpacity} from 'react-native';
import suga from './pics/suga.png';
import box from './pics/box.png'
import circle from './pics/circle.png'

const About = ({ navigation }) => {
  return (
      <SafeAreaView style={styles.container}>
        <TouchableOpacity style={styles.Bbutton} onPress={()=> {
          navigation.navigate('DrawBar')
        }}>
          <Text style={styles.btext}>BACK</Text>
        </TouchableOpacity>
        <View>
        <Text style={styles.electext}>
          electriCAL
        </Text>
          <Image source={suga} style={styles.sugaimg}/>
        </View>
        <View>
        <Text style={styles.textAbout}>ABOUT US</Text>
        </View>
        <Image source={box} style={styles.box}/>
        <View>
        <Text style={styles.electext2}>electriCAL</Text>
        </View>
        <Image source={circle} style={styles.circle}/>
        <Image source={suga} style={styles.sugaimg2}/>
        <View>
          <Text style={styles.ins1}>"electriCAL" is an mobile app for electricity usage which will help you become more aware of your electric consumption any time by just inputting your wattage consumption.  With electriCAL, we made your life easier and wiser.</Text>
        </View>
        
      </SafeAreaView>
  );
}

export default About;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#EFECE1',
    alignItems: 'flex-start',
    justifyContent: 'flex-start'
  },
  
  btext:{
      fontStyle: "normal",
      fontSize: 20,
      textAlign:'center',
      height: 30,
      width: 50,
      padding:0,
      marginLeft:15,
      fontWeight: "bold",
      fontFamily: "sans-serif-condensed",
      
  },

  electext:{
    fontStyle: "normal",
    fontSize: 20,
    textAlign:'center',
    height: 30,
    width: 85,
    padding:0,
    marginLeft:210,
    marginTop: -30,
    fontWeight: "bold",
    fontFamily: "sans-serif-condensed",
    
},
      
  sugaimg: {
      height: 60,
      width: 60,
      color: 'white',
      marginLeft: 290,
      marginTop: -65,
      textDecorationLine: 'underline',

  },
  Bbutton: {
      backgroundColor:'#FEF0B3',
      flexDirection: "row",
      alignItems: "center",
      paddingVertical: 8,
      paddingLeft: 20,
      paddingRight: 50,
      borderRadius: 15,
      marginTop: 50,
      marginLeft: 10
  },

  textAbout: {
      fontStyle: "normal",
      fontSize: 25,
      height: 60,
      width: 330,
      padding:13,
      paddingLeft: 115,
      margin:5,
      fontWeight: "bold",
      fontFamily: "sans-serif-condensed",
      marginTop: 50,
      marginLeft: 15,
      backgroundColor: "#FCD859",
      borderRadius: 15
  },

  box: {
      height: 500,
      width: 320,
      marginLeft: 20,
      borderRadius: 15
  },

  circle: {
    height: 220,
    width:220,
    marginTop: -100,
    marginLeft: 210,
    borderRadius: 220
},

  electext2:{
    fontStyle: "normal",
    fontSize: 35,
    textAlign:'center',
    padding:0,
    marginLeft:65,
    marginTop: -380,
    fontWeight: "bold",
    fontFamily: "sans-serif-condensed",
    
  },

  sugaimg2: {
    height: 120,
    width: 120,
    color: 'white',
    marginLeft: 190,
    marginTop: -565,
    textDecorationLine: 'underline',

},

  ins1:{
      fontStyle: "normal",
      fontSize: 18,
      textAlign:'justify',
      fontWeight: "normal",
      fontFamily: "sans-serif-condensed",
      marginTop: 20,
      margin: 5,
      marginLeft: -60,
      paddingLeft:100,
      paddingRight:30,
      justifyContent: 'center'

  }


});