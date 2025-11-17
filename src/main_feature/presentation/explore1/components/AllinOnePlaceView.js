import { View, Text, FlatList, Image } from 'react-native'
import React from 'react'
import CrousalHeader from '../../explore/components/CrousalHeader';



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


const cleanedClubsData = []

for (let i = 0; i < unCleanClubsData.length - 1; i+=2){
    cleanedClubsData.push(unCleanClubsData.slice(i,i+2))
}



const AllinOnePlaceView = () => {


    const clubCategoriesComp = ({item}) => {
        return (
            <View style={{ gap:14, paddingHorizontal:6}}>

            {
                item.map((item, index)=> {
                    return(
                        <View key={index} style={{height:140, width:160, backgroundColor:'black', borderRadius:16, justifyContent:'center', alignItems:'center', overflow:'hidden', borderWidth:0.8, borderColor:'darkgray'}}>
                            <Image source={item.image} style={{position:'absolute', height:'100%', width:'100%', opacity:0.6}} resizeMode='cover' />
                        <Text style={{fontSize:16, fontFamily:'poppins-medium', color:'white'}}>{item.title}</Text>
                        
                        </View>
                    )
                })
                
            }
            </View>
        )
    }









  return (
    <View style={{width:'100%'}}>
      <CrousalHeader title="All in One Place"/>


      <FlatList 
      horizontal
      showsHorizontalScrollIndicator={false}
      data={cleanedClubsData}
      renderItem={clubCategoriesComp}
      contentContainerStyle={{paddingHorizontal:2}}
      style={{marginVertical:12}}
      />

    </View>
  )
}

export default AllinOnePlaceView