import { View, Text, FlatList, Dimensions, Image, TouchableOpacity } from 'react-native'
import React, { useRef, useState } from 'react'
import CrousalHeader from '../../explore/components/CrousalHeader'
import Entypo from '@expo/vector-icons/Entypo';

const data = [
    {
        id:1,
        title:"SunBurn",
        image : require("../../../../../assets/images/sunburn.png")
    },
    {
        id:2,
        title:"SunBurn",
        image : require("../../../../../assets/images/sunburn.png")
    },
    {
        id:3,
        title:"SunBurn",
        image : require("../../../../../assets/images/sunburn.png")
    },
    {
        id:4,
        title:"SunBurn",
        image : require("../../../../../assets/images/sunburn.png")
    },
]
const GalleryView = () => {
    const flatListRef = useRef(null)
    const [currentIndex, setCurrentIndex] = useState(0)

    const handleScrolled = (e) =>{
        const offsetx = e.nativeEvent.contentOffset.x
        const index = Math.round(offsetx / Dimensions.get('screen').width)
        setCurrentIndex(index)
        
    }

    const goToNext= () =>{
        if(currentIndex < data.length - 1){
            flatListRef.current.scrollToIndex({index:currentIndex + 1, animated:true})
        }
    }
    const goToPrev= () =>{
        if(currentIndex > 0){
            flatListRef.current.scrollToIndex({index:currentIndex - 1, animated:true})
        }
    }


    const renderItem = ({item})=>{
        return (
            <View style={{width:Dimensions.get('screen').width, height:200, paddingHorizontal:18}}>

                <View style={{width:'100%', height:'100%', backgroundColor:'gray', borderRadius:12, overflow:'hidden', justifyContent:'center', alignItems:'center'}}>
                    <Image source={item.image} style={{height:'100%', width:'100%', position:'absolute'}} />
                    <Text style={{color:'white', fontSize:38, fontWeight:'600'}}>{item.title}</Text>

                </View>

            </View>
        )
    }


  return (
    <View style={{width:'100%'}}>
        <CrousalHeader title={"Events Gallery"}/>

        <View>
        <FlatList 
        ref={flatListRef}
        data = {data}
        horizontal
        showsHorizontalScrollIndicatr={false}
        pagingEnabled
        onMomentumScrollEnd={handleScrolled}
        renderItem={renderItem}
        style={{marginVertical:12}}
        />

        <TouchableOpacity onPress={goToPrev} style={{position:'absolute', left:18, top:'40%', height:50, width:50,  justifyContent:'center', alignItems:'center'}}    >
            <Entypo name="chevron-thin-left" size={28} color="white" />
        </TouchableOpacity>

        
        <TouchableOpacity onPress={goToNext} style={{position:'absolute', right:18, top:'40%', height:50, width:50, justifyContent:'center', alignItems:'center'}}    >
            <Entypo name="chevron-thin-right" size={28} color="white" />
        </TouchableOpacity>

        </View>

    
    </View>
  )
}

export default GalleryView