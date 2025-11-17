import { View, Text, Dimensions, Image } from 'react-native'
import React, { useState } from 'react'
import Carousel, { } from 'react-native-reanimated-carousel'
import Colors from '../../../../../constants/Colors'


const {width, height} = Dimensions.get('window')

const crousalData = [
    {id : 3, image: require('../../../../../assets/images/crousalimage1.png')},
    {id : 1, image: require('../../../../../assets/images/crousalimage2.png')},
    {id : 2, image: require('../../../../../assets/images/crousalimage3.png')},
]

const Explore1CrousalView = () => {
    const [currentIndex, setCurrentIndex] = useState(0)



    const crousalItem = ({item})=> {
        return (
            <View style={{backgroundColor:'gray', borderRadius:18, width:'94%',height:'100%', alignSelf:'center'}}>
                <Image source={item.image} resizeMode='cover' style={{height:'100%', width:'100%', borderRadius:18}}/>
            </View>
        )
    }
 
  return (
    <View style={{width:width, paddingVertical:12}}>

        <Carousel
        width={width}
        height={200}
        onSnapToItem={(index)=> setCurrentIndex(index) }
        data={crousalData}
        autoPlay={true}
        loop={true}
        autoPlayInterval={4000}
        renderItem={crousalItem}
        />

        <View style={{flexDirection:'row', justifyContent:'center', alignItems:'center', gap:10, height:28}}>

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

export default Explore1CrousalView