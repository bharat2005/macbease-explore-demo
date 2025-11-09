

import { View, Text, StatusBar } from 'react-native'
import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import HomeScreen from '../home/HomeScreen'
import ExploreScreen from '../explore/ExploreScreen'
import SearchScreen from '../search/SearchScreen'
import { Ionicons, FontAwesome, Feather } from '@expo/vector-icons';
import Colors from '../../../../constants/Colors'

import { useFonts } from 'expo-font'


const Tab = createBottomTabNavigator()

const MainNavGraph = () => {


  return (
   
        <Tab.Navigator 
        initialRouteName='Explore'
        screenOptions={({route})=> ({
          headerShown: false,
          tabBarIcon: ({focused, color, size})=>{
            let icon
            if(route.name === "Home"){
              icon = focused ? <FontAwesome name="home" size={size} color={color} /> : <FontAwesome name="home" size={size} color={color} />
            } else if(route.name === "Explore"){
              icon = focused ? <Ionicons name="compass" size={size} color={color} /> : <Ionicons name="compass-outline" size={size} color={color} />
            } else if(route.name === "Search"){
              icon = focused ? <Feather name="search" size={size} color={color} /> : <Feather name="search" size={size} color={color} />
            }
            return icon;
          },
          tabBarActivveTintColor: Colors.primary,
          tabBarInactiveTintColor: 'black',

        })}>
          <Tab.Screen name={"Home"} component={HomeScreen}/>
          <Tab.Screen name={"Explore"} component={ExploreScreen}/>
          <Tab.Screen name={"Search"} component={SearchScreen}/>
        </Tab.Navigator>
 
  )
}

export default MainNavGraph