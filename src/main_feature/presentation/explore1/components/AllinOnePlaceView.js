import { View, Text, FlatList, Image } from 'react-native'
import React, { useMemo } from 'react'
import CrousalHeader from '../../explore/components/CrousalHeader';
import SmartImage2 from './SmartImage2';



const unCleanClubsData = [
    { id: 1, image: require("../../../../../assets/images/allmusic.png"), title: "Arts" },
    { id: 2, image: require("../../../../../assets/images/allsports.png"), title: "Sports" },
    { id: 3, image: require("../../../../../assets/images/allhack.png"), title: "Tech" },
    { id: 4, image: require("../../../../../assets/images/alldance.png"), title: "Education" },
    { id: 5, image: require("../../../../../assets/images/allwork.png"), title: "Hobbies" },
    { id: 6, image: require("../../../../../assets/images/alltheater.png"), title: "Social" },
    { id: 7, image: require("../../../../../assets/images/alltech.png"), title: "Wellness" },
    { id: 8, image: require("../../../../../assets/images/allart.png"), title: "Community" },
];







const AllinOnePlaceView = ({data, uiSignature}) => {


    const cleanedData = useMemo(()=>{
        const cleanedClubsData = []

for (let i = 0; i < data.length - 1; i+=2){
    cleanedClubsData.push(data.slice(i,i+2))
}
return cleanedClubsData 
    },[data])


    const clubCategoriesComp = ({item}) => {
        return (
            <View style={{ gap:14, paddingHorizontal:6}}>

            {
                item.map((item, index)=> {
                    return(
                        <View key={index} style={{height:140, width:160, backgroundColor:'gray', borderRadius:16, justifyContent:'center', alignItems:'center', overflow:'hidden', borderWidth:0.8, borderColor:'darkgray'}}>
                            <SmartImage2 imgKey={item.cover}  height={1000} width={1000} style={{position:'absolute', height:'100%', width:'100%', opacity:0.6}} resizeMode='cover' />
                        <Text style={{fontSize:16, fontFamily:'poppins-medium', color:'white'}}>{item.key}</Text>
                        
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
      data={cleanedData}
      renderItem={clubCategoriesComp}
      contentContainerStyle={{paddingHorizontal:2}}
      style={{marginVertical:12}}
      />

    </View>
  )
}

export default AllinOnePlaceView