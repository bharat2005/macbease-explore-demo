import { View, Text, FlatList, Dimensions, Image, TouchableOpacity } from 'react-native'
import React, { useRef, useState } from 'react'
import CrousalHeader from '../../explore/components/CrousalHeader'
import Entypo from '@expo/vector-icons/Entypo';
import SmartImage2 from './SmartImage2';


const GalleryView = ({data, uiSignature}) => {
    const flatListRef = useRef(null)
    const [currentCardIndex, setCurrentCardIndex] = useState(0)
    const [imageIndex, setImageIndex] = useState(0) 

    const handleScroll = (e) =>{
        const index = Math.round(e.nativeEvent.contentOffset.x / Dimensions.get("screen").width)
        setCurrentCardIndex(index)
        setImageIndex(0)
    }

    const goToNext = () =>{
        const gallary = data[currentCardIndex].gallery
        if(imageIndex < gallary.length - 1){
            setImageIndex(prev => prev + 1)
        }
    }

    const goToPrev = () =>{
            if(imageIndex > 0){
            setImageIndex(prev => prev - 1)
        }
    }



    const renderItem = ({item})=>{
        return (
            <View style={{width:Dimensions.get('screen').width, height:200, paddingHorizontal:18}}>

                <View style={{width:'100%', height:'100%', backgroundColor:'gray', borderRadius:12, overflow:'hidden', justifyContent:'center', alignItems:'center'}}>
                    <SmartImage2 imgKey={item.gallery[imageIndex].url} height={1000} width={1000} style={{height:'100%', width:'100%', position:'absolute'}} />
                    <Text style={{color:'white', fontSize:34, fontWeight:'600', textAlign:'center'}}>{item.name}</Text>

                </View>

            </View>
        )
    }


  return (
    <View style={{width:'100%'}}>
        <CrousalHeader title={uiSignature}/>

        <View>
        <FlatList 
        onScroll={handleScroll}
        ref={flatListRef}
        scrollEventThrottle={16}
        data = {data}
        showsHorizontalScrollIndicator={false}
        horizontal
        pagingEnabled
        renderItem={renderItem}
        style={{marginVertical:12}}
        />

        <TouchableOpacity onPress={goToPrev} style={{position:'absolute', left:18, top:'40%', height:50, width:50,  justifyContent:'center', alignItems:'center'}}    >
            <Entypo name="chevron-thin-left" size={22} color="white" />
        </TouchableOpacity>

        
        <TouchableOpacity onPress={goToNext} style={{position:'absolute', right:18, top:'40%', height:50, width:50, justifyContent:'center', alignItems:'center'}}    >
            <Entypo name="chevron-thin-right" size={22} color="white" />
        </TouchableOpacity>

        </View>

    
    </View>
  )
}

export default GalleryView