import { View, Text, Dimensions } from 'react-native'
import React, { useState } from 'react'
import Carousel, { } from 'react-native-reanimated-carousel'
import Colors from '../../../../../constants/Colors'


const {width, height} = Dimensions.get('window')

const crousalData = [
    {id : 1, image: require('../../../../../assets/images/1.jpg')},
    {id : 1, image: ''},
    {id : 1, image: ''},
    {id : 1, image: ''},
]

const CrousalView = () => {
    const [currentIndex, setCurrentIndex] = useState(0)



    const crousalItem = ({item})=> {
        return (
            <View style={{backgroundColor:'black', borderRadius:18, width:'90%',height:'100%', alignSelf:'center'}}>

            </View>
        )
    }
 
  return (
    <View style={{width:width}}>

        <Carousel
        width={width}
        height={220}
        onSnapToItem={(index)=> setCurrentIndex(index) }
        data={crousalData}
        autoPlay={true}
        loop={true}
        autoPlayInterval={4000}
        renderItem={crousalItem}
        />

        <View style={{flexDirection:'row', justifyContent:'center', alignItems:'center', gap:10, marginVertical:14}}>

            {
                crousalData.map((item, index)=>{
                    return(
                        <View key={index} style={{ height:8, width:8, borderRadius:'50%',backgroundColor:currentIndex == index ? Colors.primary : 'lightgray'}}/>
                    )
                })
            }

        </View>
  
      
    </View>
  )
}

export default CrousalView