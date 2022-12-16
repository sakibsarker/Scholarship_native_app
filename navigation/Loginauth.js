import { View, Text } from 'react-native'
import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Login from '../src/Login';
import Loginstack from './Loginstack';
const TabNav = createBottomTabNavigator();
const Loginauth = () => {
  return (
    <TabNav.Navigator>
    <TabNav.Screen
  name="Login"
  component={Loginstack}
  options={{
      headerShown: false,
     
    }}
  
/>
  
</TabNav.Navigator>
  )
}

export default Loginauth