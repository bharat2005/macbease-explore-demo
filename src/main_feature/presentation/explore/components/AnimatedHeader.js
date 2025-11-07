import { View, Text } from 'react-native'
import React from 'react'
import Animated from 'react-native-reanimated'
import LinearGradient from 'react-native-linear-gradient'
import Colors from '../../../../../constants/Colors'



const AnimatedHeader = ({animatedOpacity, colorHeaderHeight, insets}) => {
  return (
      <Animated.View style={[animatedOpacity, {position:'absolute', top:0, left:0, right:0, zIndex:1}]}>
         <LinearGradient colors={[Colors.primary,'white' ]} start={{x:0, y:1}} end={{x:1, y:0}}>
           <View style={{height:colorHeaderHeight, width:'100%', paddingTop:insets.top + 18, alignItems:'center'}}>
                 <Text style={{fontSize:24, fontWeight:'bold'}}>Macbease</Text>
           </View>
         </LinearGradient>
         </Animated.View>
  )
}

export default AnimatedHeader