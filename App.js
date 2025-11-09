import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import MainNavGraph from './src/main_feature/presentation/navigations/MainNavGraph';
import { useFonts } from 'expo-font';
import {SafeAreaViewProfiler} from 'react-native-safe-area-context'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import EventsNavGraph from './src/events_feature/presentation/navigation/EventsNavGraph';
import { BottomSheetModalProvider } from '@gorhom/bottom-sheet'
import { GestureHandlerRootView } from 'react-native-gesture-handler';

const RootStack = createNativeStackNavigator()

export default function App() {

    useFonts({
    // "poppins-bold":require("../../../../assets/font/Poppins-Bold.ttf"),
    // "poppins-light":require("../../../../assets/font/Poppins-Light.ttf"),
    // "poppins-medium":require("../../../../assets/font/Poppins-Medium.ttf"),
    // "poppins-regular":require("../../../../assets/font/Poppins-Regular.ttf"),
    // "poppins-semibold":require("../../../../assets/font/Poppins-SemiBold.ttf"),
  })
  

  return (
    <GestureHandlerRootView style={{flex:1}}>
    <BottomSheetModalProvider>
      <NavigationContainer>
        <StatusBar barStyle="dark-content" />
        <RootStack.Navigator initialRouteName='maingraph' screenOptions={{headerShown:false}}>
            <RootStack.Screen name='maingraph' component={MainNavGraph} />
            <RootStack.Screen name="eventsgraph" component={EventsNavGraph} />
        </RootStack.Navigator>
    </NavigationContainer>
    </BottomSheetModalProvider>
    </GestureHandlerRootView>
    
  );
}

