import { View, Text } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import EventsScreen from '../events/EventsScreen'

const EventStack = createNativeStackNavigator()

const EventsNavGraph = () => {
  return (
    <EventStack.Navigator screenOptions={{headerShown:false}} initialRouteName='events'>
        <EventStack.Screen name="events" component={EventsScreen} />
    </EventStack.Navigator>
  )
}

export default EventsNavGraph