

import { View, Text, StatusBar } from 'react-native'
import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { NavigationContainer } from '@react-navigation/native'
import HomeScreen from '../home/HomeScreen'
import ExploreScreen from '../explore/ExploreScreen'
import SearchScreen from '../search/SearchScreen'
import { Ionicons, FontAwesome, Feather } from '@expo/vector-icons';
import Colors from '../../../../constants/Colors'

import { useFonts } from 'expo-font'


const Tab = createBottomTabNavigator()

const MainNavGraph = () => {
  
  useFonts({
    "poppins-bold":require("../../../../assets/font/Poppins-Bold.ttf"),
    "poppins-light":require("../../../../assets/font/Poppins-Light.ttf"),
    "poppins-medium":require("../../../../assets/font/Poppins-Medium.ttf"),
    "poppins-regular":require("../../../../assets/font/Poppins-Regular.ttf"),
    "poppins-semibold":require("../../../../assets/font/Poppins-SemiBold.ttf"),
  })
  


  return (
    <NavigationContainer>
      <StatusBar barStyle="dark-content" />
        <Tab.Navigator 
        initialRouteName='explore'
        screenOptions={({route})=> ({
          headerShown: false,
          tabBarIcon: ({focused, color, size})=>{
            let icon
            if(route.name === "home"){
              icon = focused ? <FontAwesome name="home" size={size} color={color} /> : <FontAwesome name="home" size={size} color={color} />
            } else if(route.name === "explore"){
              icon = focused ? <Ionicons name="compass" size={size} color={color} /> : <Ionicons name="compass" size={size} color={color} />
            } else if(route.name === "search"){
              icon = focused ? <Feather name="search" size={size} color={color} /> : <Feather name="search" size={size} color={color} />
            }
            return icon;
          },
          tabBarActivveTintColor: Colors.primary,
          tabBarInactiveTintColor: 'black',

        })}>
          <Tab.Screen name={"home"} component={HomeScreen}/>
          <Tab.Screen name={"explore"} component={ExploreScreen}/>
          <Tab.Screen name={"search"} component={SearchScreen}/>
        </Tab.Navigator>
    </NavigationContainer>
  )
}

export default MainNavGraph