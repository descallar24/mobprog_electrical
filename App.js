import Login from './authentication/login';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Registration from './authentication/registration';
import Dashboard from './authentication/dashboard';
import { StyleSheet } from 'react-native';
import Forgotpassword from './authentication/forgotpassword';
import Profile from './authentication/profile';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown:false}}>
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Dashboard" component={Dashboard} />
        <Stack.Screen name="Forgotpassword" component={Forgotpassword} />
        <Stack.Screen name="Registration" component={Registration} options={{title:"Register"}} />
        <Stack.Screen name="Profile" component={Profile} options={{title: "Profile Details"}}/>

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