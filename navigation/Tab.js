import { View, Text } from 'react-native'
import React from 'react'
import Home from '../src/Home';
import SchNavigatio from './SchNavigatio';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
const TabNav = createBottomTabNavigator();
const Tab = ({}) => {
  return (
    <TabNav.Navigator>
          <TabNav.Screen
        name="Home"
        component={SchNavigatio}
        options={{
            headerShown: false,
            tabBarShowLabel
           
          }}
        
      />
        
    </TabNav.Navigator>
    
  )
}

export default Tab