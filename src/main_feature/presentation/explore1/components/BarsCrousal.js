import { View, Text, FlatList, Dimensions, Image } from 'react-native'
import React from 'react'

const barsData = [
    {
        id:0,
        image : require("../../../../../assets/images/bar.png")
    },
        {
        id:1,
        image : require("../../../../../assets/images/bar.png")
    },
        {
        id:2,
        image : require("../../../../../assets/images/bar.png")
    },
        {
        id:3,
        image : require("../../../../../assets/images/bar.png")
    },
]

const BarsCrousal = () => {


    const renderItem = ({item}) =>{
        return (
            <View style={{width:Dimensions.get('screen').width, paddingHorizontal:12}}>

                <View style={{height:60, width:'100%', borderRadius:12, backgroundColor:'gray', overflow:'hidden'}}>
                    <Image source={item.image} style={{height:'100%', width:'100%'}} />
                </View>

            </View>
        )
    }
  return (
    <View style={{width:'100%'}}>
        
    <FlatList 
    horizontal
    showsHorizontalScrollIndicator={false}
    pagingEnabled
    data={barsData}
    renderItem={renderItem}
    />

    </View>
  )
}

export default BarsCrousal