import { View, Text } from 'react-native'
import React from 'react'
import {createNativeStackNavigator} from '@react-navigation/native-stack';
const Stack = createNativeStackNavigator();
import Login from '../src/Login';
import Signup from '../src/Signup';
const Loginstack = () => {
  return (
    <Stack.Navigator initialRouteName='Login'>
      <Stack.Screen  options={{
      headerShown: false,
     
    }} name="Login" component={Login}/>
      <Stack.Screen  options={{
      headerShown: false,
     
    }} name='Signup' component={Signup}/>
     
  </Stack.Navigator>
  )
}

export default Loginstack