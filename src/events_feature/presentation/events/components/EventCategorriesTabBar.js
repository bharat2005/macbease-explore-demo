import { View, Text, FlatList, Pressable } from 'react-native'
import React from 'react'
import Colors from '../../../../../constants/Colors'
import Entypo from '@expo/vector-icons/Entypo';

const EventCategorriesTabBar = ({routes, index, setIndex}) => {

    const renderItem = ({item, index:i}) =>{
        return(
            <Pressable  onPress={()=> {setIndex(i)}} style={{height:'100%', gap:4, paddingHorizontal:16, justifyContent:'center', alignItems:'center', borderBottomColor:index == i ? 'black' : '', borderBottomWidth: index == i ? 2 : 0}}>
                    <Entypo name="star" size={24} color="black" />
                    <Text style={{fontSize:12}}>{item.title}</Text>
            </Pressable>
        )
    }
  return (
    <View style={{width:'100%', height:60, borderBottomColor:'lightgray', borderBottomWidth:0.8}}>
      <FlatList
      horizontal
      showsHorizontalScrollIndicator={false}
        data={routes}
        renderItem={renderItem}
      />
    </View>
  )
}

export default EventCategorriesTabBar