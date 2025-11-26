import { View, Text, FlatList, Image } from 'react-native'
import React from 'react'
import CrousalHeader from '../../explore/components/CrousalHeader';
import SmartImage2 from './SmartImage2';

const topPastData = [
  {
    id: 1,
    image: require("../../../../../assets/images/past1.png"),
    text: "Spectra 2025",
  },
  {
    id: 2,
    image: require("../../../../../assets/images/past2.png"),
    text: "Comic Verse",
  },
  {
    id: 3,
    image: require("../../../../../assets/images/past3.png"),
    text: "Showdown",
  },
  {
    id: 4,
    image: require("../../../../../assets/images/past4.png"),
    text: "Infinite premier",
  },
  {
    id: 5,
    image: require("../../../../../assets/images/past1.png"),
    text: "Spectra 2025",
  },
  {
    id: 6,
    image: require("../../../../../assets/images/past2.png"),
    text: "Spectra 2025",
  },
  {
    id: 7,
    image: require("../../../../../assets/images/past3.png"),
    text: "Spectra 2025",
  },
  {
    id: 8,
    image: require("../../../../../assets/images/past4.png"),
    text: "Spectra 2025",
  },
];


const FeaturedEventsView = ({data, uiSignature}) => {
    const hiData = topPastData
    const headerText = uiSignature

    const clubCategoriesComp = ({item}) => {
 
              
                    return(
                      <View>
                        <View style={{height:180, width:140, backgroundColor:'gray', borderRadius:12, justifyContent:'center', alignItems:'center', overflow:'hidden', borderWidth:0.8, borderColor:'darkgray'}}>
                          <SmartImage2 imgKey={item.url} contain={true} width={2000} height={2000} style={{height:'100%', width:'100%'}} />
                      
                        </View>
                        { (item.name) && <Text style={{alignSelf:'center', fontSize:15, fontWeight:'300'}}>{item.name}</Text> }
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

export default FeaturedEventsView