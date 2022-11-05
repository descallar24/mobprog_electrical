import { useNavigation } from "@react-navigation/native";
import { useState } from "react";
import { Button, Text, TextInput, TextInputComponent, View, Alert } from "react-native";
export default function Dashboard(){
    const navigation = useNavigation();
    const [budget, setBudget] = useState('')
    const kwh = 16.673;
    const [result, setResult] = useState('')


  

    return(
        <View>
            <Text>Hi </Text>
            <Text>
                Input Desire Budget: ₱{budget} 
            </Text>
            <TextInput placeholder="PHP" 
            keyboardType="numeric"
            onSubmitEditing={(val) => setBudget(val.nativeEvent.text)}/>
            <Button title="SAVE" />         
            <Text>KW/H: {kwh}</Text>
            <Text>Enter your KW/H Consumption: </Text>
            <TextInput onSubmitEditing={(rs) => setResult(rs.nativeEvent.text) } 
            keyboardType="numeric" placeholder="KW/H"/>
            
             <Text>Result: ₱{result * kwh} </Text>  
            <Button title="Logout" onPress={() => {
                navigation.navigate('Login');
            }}/>
            
        </View>
    )
}
