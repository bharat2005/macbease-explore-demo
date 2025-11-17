import { View, Text, FlatList, Image } from 'react-native'
import React from 'react'
import CrousalHeader from '../../explore/components/CrousalHeader';







const Explore1NormalCrousalView = ({hiData, headerText}) => {


    const clubCategoriesComp = ({item}) => {
 
              
                    return(
                      <View>
                        <View style={{height:180, width:140, backgroundColor:'gray', borderRadius:12, justifyContent:'center', alignItems:'center', overflow:'hidden', borderWidth:0.8, borderColor:'darkgray'}}>
                            <Image source={item.image} style={{position:'absolute', height:'100%', width:'100%'}} resizeMode='cover' />
                        
                        </View>
                        { (item.text) && <Text style={{alignSelf:'center', fontSize:16, fontWeight:'300'}}>{item.text}</Text> }
                      </View>
         
        )
    }






  return (
    <View style={{width:'100%'}}>
      <CrousalHeader title={headerText}/>


      <FlatList 
      horizontal
      showsHorizontalScrollIndicator={false}
      data={hiData}
      renderItem={clubCategoriesComp}
      contentContainerStyle={{paddingHorizontal:8, gap:12}}
      style={{marginVertical:12}}
      />

    </View>
  )
}

export default Explore1NormalCrousalView