import { View, Text, Touchable, TouchableOpacity, FlatList, Image } from 'react-native'
import React from 'react'
import Feather from '@expo/vector-icons/Feather';
import CrousalHeader from './CrousalHeader';

const profData = [
    {id:6, name : "Prof. Deepak", image:'https://tse1.mm.bing.net/th/id/OIP.8yaAxUaTZN-9DSELK-O27wHaHs?rs=1&pid=ImgDetMain&o=7&rm=3'},
    {id:1, name : "Prof. Reny", image:'https://tse1.mm.bing.net/th/id/OIP.rmHgX0RSd9-VwUuvatYinwAAAA?rs=1&pid=ImgDetMain&o=7&rm=3'},
    {id:4, name : "Prof. Robin", image:'https://tse2.mm.bing.net/th/id/OIP.lRzzLJxniEwV6uYV_b5YXAAAAA?rs=1&pid=ImgDetMain&o=7&rm=3'},
    {id:2, name : "Prof. Harjeet", image:'https://tse3.mm.bing.net/th/id/OIP.zngmWYCUPQqUoLABcuy7fwAAAA?rs=1&pid=ImgDetMain&o=7&rm=3'},
    {id:3, name : "Naranyan", image:'https://fruitgrowersnews.com/wp-content/uploads/2018/09/Hanu-IMG_99635-copy-e1536854970438-194x300.jpg'},
    {id:5, name : "Prof. Joshpe", image:'https://th.bing.com/th/id/OIP.ednnikF8xWtB1o2y1lniTwAAAA?o=7rm=3&rs=1&pid=ImgDetMain&o=7&rm=3'},
    {id:7, name : "Prof. Srinivas", image:'https://www.iso.org/files/live/sites/isoorg/files/archive/Ref1819/dr.jayathilak.jpg'},
    {id:8, name : "Prof. Samir", image:'https://tse1.mm.bing.net/th/id/OIP.8wQbghrSlfI2XR_qiUtL0AAAAA?w=215&h=269&rs=1&pid=ImgDetMain&o=7&rm=3'},

]

const ProfessorsView = () => {

    const profView = ({item}) =>{
        return (
            <View style={{ width:100, gap:12, justifyContent:'center', alignItems:'center', marginHorizontal:8}}>

                <View style={{backgroundColor:'black', borderRadius:'50%', width:'100%',  aspectRatio:1, overflow:'hidden'}} >
                    <Image source={{uri:item.image}} style={{height:'100%', width:'100%'}}/>
                </View>

                <Text style={{fontSize:14, color:'#000000ff',fontFamily:'poppins-regular'}}>{item.name}</Text>
                
            </View>
        )
    }
  return (
    <View style={{width:'100%', marginVertical:16}}>


    <CrousalHeader title="Professors" text="Get in contact with profesors!" moreButton={true} moreText={"more"} />

    <FlatList
    style={{marginVertical:12}}
    horizontal={true}
    data={profData}
    showsHorizontalScrollIndicator={false}
    renderItem={profView}
    contentContainerStyle={{paddingHorizontal:12}}
    scrollEnabled={true}
    />

      </View>
  )
}

export default ProfessorsView