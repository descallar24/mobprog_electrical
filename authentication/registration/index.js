import { useState } from "react";
import { Button, TextInput, View, Text} from "react-native";
import { useNavigation } from "@react-navigation/native";

export default function Registration(){
    const navigation = useNavigation();
    const [data, setData] = useState({
        username: '',
        first_name: '',
        last_name: '',
        email: '',
        password1: '',
        password2: ''
    })
    return(
        <View>
            <TextInput placeholder="First name" value={data.first_name} onChangeText={(text) => {
                setData({
                    ...data,
                    first_name: text
                });
            }} />
            <TextInput placeholder="Last name" value={data.last_name} onChangeText={(text) => {
                setData({
                    ...data,
                last_name: text
                });
            }} />
            <TextInput placeholder="Username" value={data.username} onChangeText={(text) => {
                setData({
                    ...data,
                    username: text
                });
            }} />
            <TextInput placeholder="Email name" value={data.email} onChangeText={(text) => {
                setData({
                    ...data,
                email: text
                });
            }} />
            <TextInput placeholder="Password" value={data.password1} onChangeText={(text) => {
                setData({
                    ...data,
                    password1: text
                });
            }} />
            <TextInput placeholder="Confirm Password" value={data.password2} onChangeText={(text) => {
                setData({
                    ...data,
                password2: text
                });
            }} />
            <Button title="Submit" onPress={() => {
                navigation.navigate('Dashboard')
            } } />
            <Text onPress={() => {
                navigation.navigate('Login');
            }}>Cancel</Text>
   
        </View>
    )

}