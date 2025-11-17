import { View, Text, FlatList, Image } from 'react-native'
import React from 'react'
import CrousalHeader from '../../explore/components/CrousalHeader';



const unCleanClubsData = [
    { id: 1, image: require("../../../../../assets/images/featured1.png"), title: "Arts" },
    { id: 2, image: require("../../../../../assets/images/featured2.png"), title: "Sports" },
    { id: 3, image: require("../../../../../assets/images/featured3.png"), title: "Tech" },
    { id: 4, image: require("../../../../../assets/images/featured4.png"), title: "Education" },
    { id: 1, image: require("../../../../../assets/images/featured1.png"), title: "Arts" },
    { id: 2, image: require("../../../../../assets/images/featured2.png"), title: "Sports" },
    { id: 3, image: require("../../../../../assets/images/featured3.png"), title: "Tech" },
    { id: 4, image: require("../../../../../assets/images/featured4.png"), title: "Education" },
];


const cleanedClubsData = []

for (let i = 0; i < unCleanClubsData.length - 1; i+=2){
    cleanedClubsData.push(unCleanClubsData.slice(i,i+2))
}



const Explore1ClubsView = () => {


    const clubCategoriesComp = ({item}) => {
        return (
            <View style={{ gap:4, paddingHorizontal:2}}>

            {
                item.map((item, index)=> {
                    return(
                        <View key={index} style={{height:130, width:220, backgroundColor:'black', borderRadius:4, justifyContent:'center', alignItems:'center', overflow:'hidden'}}>
                            <Image source={item.image} style={{position:'absolute', height:'100%', width:'100%', opacity:0.6}} resizeMode='cover' />
                        <Text style={{fontSize:20, fontFamily:'poppins-medium', color:'white'}}>{item.title}</Text>
                        
                        </View>
                    )
                })
                
            }
            </View>
        )
    }









  return (
    <View style={{width:'100%'}}>
      <CrousalHeader title="Featured Sections"/>


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