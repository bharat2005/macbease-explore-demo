import { View, Text, FlatList, Dimensions, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import SmartImage2 from './SmartImage2'

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

const BarsCrousal = ({data}) => {


    const renderItem = ({item}) =>{
        return (
            <View style={{width:Dimensions.get('screen').width, paddingHorizontal:12}}>

                <View style={{height:60, width:'100%', borderRadius:12, backgroundColor:'gray', overflow:'hidden', flexDirection:'row', paddingHorizontal:24, alignItems:'center'}}>
                    <SmartImage2 imgKey={item.chiefImage} style={{height:'100%', width:'100%', opacity:0.5, backgroundColor:'black'}} />

                <View style={{flexDirection:'row', justifyContent:'center', alignItems:'center', gap:12}}>
                    <View style={{height:40,width:40, borderRadius:'50%', backgroundColor:'black', overflow:'hidden'}}>
                          <SmartImage2 imgKey={item.featuringImg}  height={1000} width={1000} style={{height:'100%', width:'100%'}} />
                    </View>

                    <View style={{height:'100%'}}>
                        <Text style={{fontSize:17, fontWeight:'500'}}>{item.name}</Text>
                        <Text style={{fontSize:10, fontWeight:'350'}}>{item.chiefMsg}</Text>
                    </View>

                </View>

                <View style={{flex:1}} />

                <TouchableOpacity style={{height:'50%',borderRadius:8, justifyContent:'center', alignItems:'center', paddingHorizontal:12, backgroundColor:'white'}} >
                    <Text style={{fontWeight:'400'}}>Join Now</Text>
                </TouchableOpacity>
         
    
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
    data={[data]}
    renderItem={renderItem}
    />

    </View>
  )
}

export default BarsCrousal