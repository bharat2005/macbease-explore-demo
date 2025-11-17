import { View, Text } from 'react-native'
import React from 'react'
import Animated, { Extrapolation, interpolate, useAnimatedScrollHandler, useAnimatedStyle, useSharedValue } from 'react-native-reanimated'
import { SafeAreaView } from 'react-native-safe-area-context'


const HEADER_MAX_HEIGHT = 300
const SEARCH_BAR_HEIGHT = 100

const Explore1Screen = () => {
  const scrollY = useSharedValue(0)

  const onScroll = useAnimatedScrollHandler({
    onScroll:(e)=>{
      scrollY.value = e.contentOffset.y
    }
  })


  const crousalFadeStyle = useAnimatedStyle(()=>{
    const opacity = interpolate(
      scrollY.value,
      [0, HEADER_MAX_HEIGHT /2, HEADER_MAX_HEIGHT],
      [1,0.5,0],
      Extrapolation.CLAMP
    )
    return {
      opacity
    }
  })





  return (
    <SafeAreaView edges={["top"]} >


    <Animated.ScrollView
    showsVerticalScrollIndicator={false}
    onScroll={onScroll}
    stickyHeaderIndices={[1]}
    >



        {/* AnimatedCrousal */}
        <Animated.View style={[{height:HEADER_MAX_HEIGHT, backgroundColor:'cyan'}, crousalFadeStyle]}>
        </Animated.View>

        {/* SerachBar */}
        <View style={{width:'100%', height:SEARCH_BAR_HEIGHT, backgroundColor:'red'}}>
        </View>





{
     [...Array(15).fill(null)].map((item, index)=>{
        return <View key={index} style={{height:100, width:'100%', backgroundColor:'black', marginVertical:12}}>

        </View>
      })

}
   

    </Animated.ScrollView>
        </SafeAreaView>
  )
}

export default Explore1Screen
