import { View, Text, FlatList, Image } from 'react-native'
import React from 'react'
import CrousalHeader from './CrousalHeader'


const unCleanClubsData = [
    { id: 1, image: require("../../../../../assets/images/art.jpg"), title: "Arts" },
    { id: 2, image: require("../../../../../assets/images/sports.jpg"), title: "Sports" },
    { id: 3, image: require("../../../../../assets/images/tech.jpg"), title: "Tech" },
    { id: 4, image: require("../../../../../assets/images/edu.jpg"), title: "Education" },
    { id: 5, image: require("../../../../../assets/images/hobby.jpg"), title: "Hobbies" },
    { id: 6, image: require("../../../../../assets/images/social.jpg"), title: "Social" },
    { id: 7, image: require("../../../../../assets/images/wellness.jpg"), title: "Wellness" },
    { id: 8, image: require("../../../../../assets/images/community.jpg"), title: "Community" },
];


const cleanedClubsData = []

for (let i = 0; i < unCleanClubsData.length - 1; i+=2){
    cleanedClubsData.push(unCleanClubsData.slice(i,i+2))
}



const ClubsView = () => {


    const clubCategoriesComp = ({item}) => {
        return (
            <View style={{ gap:14, paddingHorizontal:6}}>

            {
                item.map((item, index)=> {
                    return(
                        <View key={index} style={{height:160, width:160, backgroundColor:'black', borderRadius:18, justifyContent:'center', alignItems:'center', overflow:'hidden'}}>
                            <Image source={item.image} style={{position:'absolute', height:'100%', width:'100%', opacity:0.5}} resizeMode='cover' />
                        <Text style={{fontSize:16, fontFamily:'poppins-medium', color:'white'}}>{item.title}</Text>
                        
                        </View>
                    )
                })
                
            }
            </View>
        )
    }









  return (
    <View style={{width:'100%', marginVertical:18}}>
      <CrousalHeader title="Clubs & Communities"/>


      <FlatList 
      horizontal
      showsHorizontalScrollIndicator={false}
      data={cleanedClubsData}
      renderItem={clubCategoriesComp}
      contentContainerStyle={{paddingHorizontal:14}}
      style={{marginVertical:12}}
      />

    </View>
  )
}

export default ClubsView