import { View, Text, Dimensions, Image } from 'react-native'
import React, { useState } from 'react'
import Carousel, { } from 'react-native-reanimated-carousel'
import Colors from '../../../../../constants/Colors'


const {width, height} = Dimensions.get('window')

const crousalData = [
    {id : 3, image: require('../../../../../assets/images/3.jpg')},
    {id : 1, image: require('../../../../../assets/images/1.jpg')},
    {id : 2, image: require('../../../../../assets/images/2.jpg')},
    {id : 4, image: require('../../../../../assets/images/4.jpg')},
]

const CrousalView = () => {
    const [currentIndex, setCurrentIndex] = useState(0)



    const crousalItem = ({item})=> {
        return (
            <View style={{backgroundColor:'gray', borderRadius:18, width:'90%',height:'100%', alignSelf:'center'}}>
                <Image source={item.image} resizeMode='cover' style={{height:'100%', width:'100%', borderRadius:18}}/>
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