import { View, Text, TouchableOpacity } from 'react-native'
import React, { useRef } from 'react'
import LinearGradient, {} from 'react-native-linear-gradient'
import Colors from '../../../../constants/Colors'
import Feather from '@expo/vector-icons/Feather';
import Animated, { useAnimatedScrollHandler, useSharedValue } from 'react-native-reanimated'



const ExploreScreen = () => {
  const scrollY = useSharedValue(0);

  const scrollHandler = useAnimatedScrollHandler(e => {
    scrollY.value = e.contentOffset.y
  })

  



  return (
    <View style={{flex:1, backgroundColor: '#f0f0f0'}}>

      <LinearGradient 
      colors={[Colors.primary, '#f0f0f0']}
      >
        <View style={{height:300, width:'100%',  alignItems:'center', paddingTop:50, paddingHorizontal:24}}>
          <View style={{width:'100%', alignItems:'center', justifyContent:'center', flexDirection:'row'}}>
              <Text style={{fontSize:24, fontWeight:'bold'}}>Macbease</Text>

              <TouchableOpacity style={{position:'absolute', right:0}}>
                <Feather name="search" size={28} color="black" />
              </TouchableOpacity>
              
          </View>
         

        </View>
      </LinearGradient>



      <Animated.ScrollView

       >

        {
          [...Array(10).fill(0)].map((_,index)=>{
            return (
              <View key={index} style={{width:'100%', height:150, backgroundColor:'black', marginVertical:12}}>
              </View>
            )
          })
        }

      </Animated.ScrollView>




      
      
    
    </View>
  )
}

export default ExploreScreen