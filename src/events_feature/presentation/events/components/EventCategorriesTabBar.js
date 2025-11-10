import { View, Text, FlatList, Pressable } from 'react-native'
import React, { useEffect, useRef } from 'react'
import Colors from '../../../../../constants/Colors'
import Entypo from '@expo/vector-icons/Entypo';

const EventCategorriesTabBar = ({routes, index, setIndex}) => {
    const flatListRef = useRef(null)

    useEffect(()=>{
        if(flatListRef.current){
            flatListRef.current.scrollToIndex({
                animation:true, 
                viewPosition:0.5,
                index
            })
        }
    },[flatListRef, index])

    const renderItem = ({item, index:i}) =>{
        return(
            <Pressable onPress={()=> {setIndex(i)}} style={{height:'100%', gap:4, width:84, justifyContent:'center', alignItems:'center', borderBottomColor:index == i ? 'black' : '', borderBottomWidth: index == i ? 2 : 0}}>
                    {item.icon(index == i)}
                    <Text style={{fontSize:12, color:index ==i ? 'black' : 'gray'}}>{item.title}</Text>
            </Pressable>
        )
    }
  return (
    <View style={{width:'100%', height:64, borderBottomColor:'lightgray', borderBottomWidth:0.8}}>
      <FlatList
        ref={flatListRef}
      horizontal
      showsHorizontalScrollIndicator={false}
        data={routes}
        renderItem={renderItem}
        getItemLayout={(_,index)=> ({
            length:80,
            index:index,
            offset:index * 80
        })}
      />
    </View>
  )
}

export default EventCategorriesTabBar