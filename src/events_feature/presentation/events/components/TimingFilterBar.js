import { View, Text, Pressable, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import Colors from '../../../../../constants/Colors'

const TimingFilterBar = () => {
    const [selectedFilter, setSelectedFilter] = useState('Upcoming')
  return (
    <View style={{width:'100%', height:50, justifyContent:'space-evenly', flexDirection:'row', alignItems:'center'}}>
        {
            ["Upcoming", "Today", "Tommorrow", "Weekend"].map((item,index)=>{
                return (
                    <TouchableOpacity key={item} onPress={()=> setSelectedFilter(item)} style={{backgroundColor:selectedFilter == item ? Colors.primary : 'lightgray', borderRadius:8, paddingHorizontal:12, paddingVertical:6}}>
                        <Text style={{fontSize:14,fontWeight:'400',color :selectedFilter == item ? 'white' : 'black' }}>{item}</Text>
                    </TouchableOpacity>
                )
            })
        }
    </View>
  )
}

export default TimingFilterBar