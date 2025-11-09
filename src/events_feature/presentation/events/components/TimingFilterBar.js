import { View, Text, Pressable, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import Colors from '../../../../../constants/Colors'

const TimingFilterBar = () => {
    const [selectedFilter, setSelectedFilter] = useState('Upcoming')
  return (
    <View style={{width:'100%', height:50, gap:12, flexDirection:'row', alignItems:'center', paddingHorizontal:12}}>
        {
            ["Upcoming", "Today", "Tommorrow", "Weekend"].map((item,index)=>{
                return (
                    <TouchableOpacity key={item} onPress={()=> setSelectedFilter(item)} style={{backgroundColor:selectedFilter == item ? Colors.primary : 'lightgray', borderRadius:8,  paddingVertical:6, justifyContent:'center', alignItems:'center', flex:1}}>
                        <Text style={{fontSize:14,fontWeight:'400',color :selectedFilter == item ? 'white' : 'black' }}>{item}</Text>
                    </TouchableOpacity>
                )
            })
        }
    </View>
  )
}

export default TimingFilterBar