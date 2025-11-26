import { View, Text, TouchableOpacity, Pressable } from 'react-native'
import React from 'react'
import Animated, { useAnimatedStyle, useSharedValue, withTiming } from 'react-native-reanimated'
import { Ionicons } from '@expo/vector-icons'

const iconData ={
    "Events": (props) => <Ionicons name="color-palette" {...props}/>,
    "Hackathons": (props) => <Ionicons name="code-slash" {...props} />,
    "Workshops" : (props) => <Ionicons name="construct" {...props} />,
    "Sports" : (props) => <Ionicons name="football" {...props} />,
    "Concerts" : (props) => <Ionicons name="musical-notes" {...props} />,
    "Conferences": (props) => <Ionicons name="people-circle" {...props} />
}



const SearchBarCategoryChip = ({data, isSelected, onPress}) => {
    const width = useSharedValue(80)
    const IconComp = iconData[data.key]

    const aimatedWidth = useAnimatedStyle(()=> {
        return {
            width: withTiming(isSelected ? 130 : 50, {duration:200}),
        }
    })


  return (
    <Pressable onPress={onPress} >

        <Animated.View style={[{paddingHorizontal:8, paddingVertical:12, backgroundColor:'lightgray', flexDirection:'row', borderRadius:12, alignItems:'center', justifyContent:'center'}, aimatedWidth]} >
            <IconComp size={19}/>
            
            {
                isSelected ? <Text numberOfLines={1} style={{color:'black', fontWeight:'500', paddingHorizontal:12,}}>
                {data.key}
            </Text>  : <></>
            }
      
        </Animated.View>
        
    </Pressable>
  )
}

export default SearchBarCategoryChip