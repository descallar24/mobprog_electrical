import Login from './authentication/login';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Registration from './authentication/registration';
import Profile from './authentication/profile';
import Forgotpassword from './authentication/forgotpassword';
import { StyleSheet } from 'react-native';
import Dashboard from './authentication/dashboard';
import { createDrawerNavigator } from '@react-navigation/drawer';
import React from 'react';
import Manual from './screen/Manual';
import About from './screen/About';
import DrawBar from './screen/DrawBar';


const Stack = createNativeStackNavigator();
const Drawer = createDrawerNavigator ();

const ManualScreenStack = () => {
  return (
    <Stack.Navigator initialRouteName= "Manual1"
    screenOptions= {{headerShown: false}}>
      <Stack.Screen name="Manual" component={Manual}/>
    </Stack.Navigator> 
  );
}

const AboutScreenStack = () => {
  return (
    <Stack.Navigator initialRouteName= "About1"
    screenOptions= {{headerShown: false}}>
      <Stack.Screen name="About" component={About}/>
    </Stack.Navigator> 
  );
}


export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown:false}}>
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Registration" component={Registration} options={{title:"Register"}} />
        <Stack.Screen name="Profile" component={Profile} />
        <Stack.Screen name="Forgotpassword" component={Forgotpassword} />
        <Stack.Screen name="Dashboard" component={Dashboard} />
        <Stack.Screen name="DrawBar" component={DrawBar} />
        <Stack.Screen name= "Manual"  component={Manual}/>
        <Stack.Screen name= "About" component={About}/>
        </Stack.Navigator>
    </NavigationContainer>
    
  );
}



/*const styles = StyleSheet.create({
  container: {
      width: 100,
      height: 100,
      backgroundColor: 'yellow'
  }

})
  */