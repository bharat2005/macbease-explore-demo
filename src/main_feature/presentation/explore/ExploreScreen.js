import { View, Text, TouchableOpacity } from 'react-native'
import React, { useRef } from 'react'
import LinearGradient, {} from 'react-native-linear-gradient'
import Colors from '../../../../constants/Colors'
import Feather from '@expo/vector-icons/Feather';
import Animated, { interpolate, useAnimatedScrollHandler, useAnimatedStyle, useSharedValue } from 'react-native-reanimated'
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import CrousalView from './components/CrousalView';
import AnimatedHeader from './components/AnimatedHeader';
import ProfessorsView from './components/ProfessorsView';

const colorHeaderHeight = 260


const ExploreScreen = () => {
  const scrollY = useSharedValue(0);
  const insets = useSafeAreaInsets()

  const scrollHandler = useAnimatedScrollHandler(e => {
    scrollY.value = e.contentOffset.y
  })

  const animatedOpacity = useAnimatedStyle(()=>({
    opacity: interpolate(
      scrollY.value,
      [0,colorHeaderHeight / 4],
       [1, 0], 
       'clamp'
      )
  }))

  



  return (
    <View style={{flex:1, backgroundColor: '#f0f0f0'}}>

    <AnimatedHeader animatedOpacity={animatedOpacity} colorHeaderHeight={colorHeaderHeight} insets={insets} />


      <Animated.ScrollView
      showsVerticalScrollIndicator={false}
        style={{width:'100%', zIndex:2, marginTop:insets.top}}
        onScroll={scrollHandler}
       >
        <View style={{height:80}}/>

        <CrousalView/>

        <ProfessorsView />





      </Animated.ScrollView>




      
      
    
    </View>
  )
}

export default ExploreScreen