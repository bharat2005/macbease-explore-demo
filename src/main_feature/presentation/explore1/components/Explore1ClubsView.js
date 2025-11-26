import { View, Text, FlatList, Image } from 'react-native'
import React, { useMemo } from 'react'
import CrousalHeader from '../../explore/components/CrousalHeader';
import SmartImage2 from './SmartImage2';







const Explore1ClubsView = ({data, uiSignature}) => {

    const cleanedClubsData = useMemo(()=>{
        const cleanedClubsDataArray = []
        for (let i = 0; i < data.length - 1; i+=2){
    cleanedClubsDataArray.push(data.slice(i,i+2))

}
return cleanedClubsDataArray
    },[data])


    const clubCategoriesComp = ({item}) => {
        return (
            <View style={{ gap:4, paddingHorizontal:2}}>

            {
                item.map((item, index)=> {
                    return(
                        <View key={index} style={{height:130, width:220, backgroundColor:'gray', borderRadius:4, justifyContent:'center', alignItems:'center', overflow:'hidden'}}>
                            {/* <Image source={item.image} style={{position:'absolute', height:'100%', width:'100%', opacity:0.6}} resizeMode='cover' /> */}
                            <SmartImage2 imgKey={item.cover} height={1000} width={1000} style={{position:'absolute', height:'100%', width:'100%', opacity:0.6}} />
                        <Text style={{fontSize:20, fontFamily:'poppins-medium', color:'white'}}>{item.key}</Text>
                        
                        </View>
                    )
                })
                
            }
            </View>
        )
    }









  return (
    <View style={{width:'100%'}}>
      <CrousalHeader title={uiSignature}/>


      <FlatList 
      horizontal
      showsHorizontalScrollIndicator={false}
      data={cleanedClubsData}
      renderItem={clubCategoriesComp}
      contentContainerStyle={{paddingHorizontal:8}}
      style={{marginVertical:12}}
      />

    </View>
  )
}

export default Explore1ClubsView