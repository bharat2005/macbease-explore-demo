import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import Entypo from '@expo/vector-icons/Entypo';
import { useNavigation } from '@react-navigation/native';
import FontAwesome6 from '@expo/vector-icons/FontAwesome6';
import Feather from '@expo/vector-icons/Feather';

const EventsSearchTabBar = ({openBottomSheet}) => {
    const navigation = useNavigation()
  return (
    <View style={{width:'100%', height:50,gap:12, flexDirection:'row', alignItems:'center', paddingVertical:6, paddingHorizontal:12}}>
      
      {/* NavigateBack */}
      <TouchableOpacity onPress={()=>{navigation.goBack()}}>
        <Entypo name="chevron-thin-left" size={24} color="black" />
      </TouchableOpacity>


        {/* //Search Bar */}
        <View style={{flex:1, height:'100%', backgroundColor:'lightgray', paddingHorizontal:8, borderRadius:12, flexDirection:'row', gap:12, alignItems:'center'}}>

            <Feather name="search" size={24} color="black" />

            <Text>Explore events you might like</Text>

        </View>



        {/* FilterButton */}
        <TouchableOpacity onPress={openBottomSheet} style={{justifyContent:'center', alignItems:'center',backgroundColor:'lightgray', height:'100%', aspectRatio:1, borderRadius:12}}>
            <FontAwesome6 name="sliders" size={18} color="black" />
        </TouchableOpacity>






    </View>
  )
}

export default EventsSearchTabBar