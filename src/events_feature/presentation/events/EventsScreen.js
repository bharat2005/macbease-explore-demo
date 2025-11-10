import { View, Text, Pressable } from 'react-native'
import React, { useRef } from 'react'
import { SafeAreaView, useSafeAreaInsets } from 'react-native-safe-area-context'
import EventsSearchTabBar from './components/EventsSearchTabBar'
import FilterBottomSheet from './components/FilterBottomSheet'
import TimingFilterBar from './components/TimingFilterBar'
import EventsTabsView from './components/EventsTabsView'
import Colors from '../../../../constants/Colors'
import Ionicons from '@expo/vector-icons/Ionicons';

const EventsScreen = () => {
  const sheetRef = useRef(null)
  const insets = useSafeAreaInsets()
  return (
    <SafeAreaView style={{flex:1}}>

      <EventsSearchTabBar openBottomSheet={()=>{sheetRef.current.present()}} />

        <TimingFilterBar />

        <EventsTabsView />


        <Pressable style={{paddingVertical:8, paddingHorizontal:16, gap:10,flexDirection:'row', backgroundColor:Colors.primary, borderRadius:14, position:'absolute', bottom :insets.bottom + 12,alignSelf:'center'}}>
          <Ionicons name="ticket" size={22} color="white" />
          <Text style={{color:'white', fontSize:16, fontWeight:'500'}}>My Tickets</Text>
        </Pressable>



      <FilterBottomSheet sheetRef={sheetRef} onSheetClose={()=>{sheetRef.current.dismiss()}} />
    </SafeAreaView>
  )
}

export default EventsScreen