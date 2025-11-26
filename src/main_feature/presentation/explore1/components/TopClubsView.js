import { View, Text, FlatList, Image } from 'react-native'
import React from 'react'
import CrousalHeader from '../../explore/components/CrousalHeader';
import SmartImage2 from './SmartImage2';


const topClubsData = [
  {
    id: 1,
    image: require("../../../../../assets/images/club1.png"),
    title: "Arts",
  },
  {
    id: 2,
    image: require("../../../../../assets/images/club2.png"),
    title: "Sports",
  },
  {
    id: 3,
    image: require("../../../../../assets/images/club3.png"),
    title: "Tech",
  },
  {
    id: 4,
    image: require("../../../../../assets/images/club4.png"),
    title: "Education",
  },
  {
    id: 5,
    image: require("../../../../../assets/images/club1.png"),
    title: "Arts",
  },
  {
    id: 6,
    image: require("../../../../../assets/images/club2.png"),
    title: "Sports",
  },
  {
    id: 7,
    image: require("../../../../../assets/images/club3.png"),
    title: "Tech",
  },
  {
    id: 8,
    image: require("../../../../../assets/images/club4.png"),
    title: "Education",
  },
];


const TopClubsView = ({data, uiSignature}) => {
    const hiData = topClubsData
    const headerText = uiSignature


    const clubCategoriesComp = ({item}) => {
 
              
                    return(
                      <View>
                        <View style={{height:180, width:140, backgroundColor:'gray', borderRadius:12, justifyContent:'center', alignItems:'center', overflow:'hidden', borderWidth:0.8, borderColor:'darkgray'}}>
                            <SmartImage2 imgKey={item.secondaryImg}  height={1000} width={1000} style={{position:'absolute', height:'100%', width:'100%'}} resizeMode='cover' />
                        
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
      data={data}
      renderItem={clubCategoriesComp}
      contentContainerStyle={{paddingHorizontal:8, gap:12}}
      style={{marginVertical:12}}
      />

    </View>
  )
}

export default TopClubsView