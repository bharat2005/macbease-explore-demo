

import { View, Text } from 'react-native'
import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { NavigationContainer } from '@react-navigation/native'
import HomeScreen from '../home/HomeScreen'
import ExploreScreen from '../explore/ExploreScreen'
import SearchScreen from '../search/SearchScreen'


const Tab = createBottomTabNavigator()

const MainNavGraph = () => {
  return (
    <NavigationContainer>
        <Tab.Navigator>
          <Tab.Screen name={"home"} component={HomeScreen}/>
          <Tab.Screen name={"explore"} component={ExploreScreen}/>
          <Tab.Screen name={"search"} component={SearchScreen}/>
        </Tab.Navigator>
    </NavigationContainer>
  )
}

export default MainNavGraph