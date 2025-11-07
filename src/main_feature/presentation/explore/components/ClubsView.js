import { View, Text, FlatList } from 'react-native'
import React from 'react'
import CrousalHeader from './CrousalHeader'

const ClubsView = () => {


    const clubCategoryColumn = () => {
        return (
            <></>
        )
    }









  return (
    <View style={{width:'100%', marginVertical:18}}>
      <CrousalHeader title="Clubs & Communities"/>

      <FlatList 
      horizontal
      showsHorizontalScrollIndicator={false}
      data={[]}
      renderItem={null}
      contentContainerStyle={{paddingHorizontal:12}}
      style={{marginVertical:12}}
      />

    </View>
  )
}

export default ClubsView