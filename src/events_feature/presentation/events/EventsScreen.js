import { View, Text } from 'react-native'
import React, { useRef } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import EventsSearchTabBar from './components/EventsSearchTabBar'
import FilterBottomSheet from './components/FilterBottomSheet'
import TimingFilterBar from './components/TimingFilterBar'

const EventsScreen = () => {
  const sheetRef = useRef(null)
  return (
    <SafeAreaView style={{flex:1}}>

      <EventsSearchTabBar openBottomSheet={()=>{sheetRef.current.present()}} />

        <TimingFilterBar />

        


      <FilterBottomSheet sheetRef={sheetRef} onSheetClose={()=>{sheetRef.current.dismiss()}} />
    </SafeAreaView>
  )
}

export default EventsScreen