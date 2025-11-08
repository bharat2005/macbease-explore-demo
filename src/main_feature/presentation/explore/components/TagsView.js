import { View, Text, FlatList, Image } from 'react-native'
import React from 'react'
import CrousalHeader from './CrousalHeader'

const tagsData = [
    {id:1, title:'#Code', images:[require("../../../../../assets/images/1.jpg"), require("../../../../../assets/images/2.jpg"), require("../../../../../assets/images/3.jpg")], usedNumber:"9020"},
    {id:2, title:'#StartUp', images:[require("../../../../../assets/images/a.jpg"), require("../../../../../assets/images/b.jpg"), require("../../../../../assets/images/c.jpg")], usedNumber:"3560"},
    {id:3, title:'#Ai & Ml', images:[require("../../../../../assets/images/3.jpg"), require("../../../../../assets/images/2.jpg"), require("../../../../../assets/images/1.jpg")], usedNumber:"6202"},
    {id:4, title:'#Alumni', images:[require("../../../../../assets/images/c.jpg"), require("../../../../../assets/images/b.jpg"), require("../../../../../assets/images/a.jpg")], usedNumber:"1203"},
    {id:5, title:'#StandUp', images:[require("../../../../../assets/images/1.jpg"), require("../../../../../assets/images/2.jpg"), require("../../../../../assets/images/3.jpg")], usedNumber:"4921"},
    {id:6, title:'#Universe', images:[require("../../../../../assets/images/a.jpg"), require("../../../../../assets/images/b.jpg"), require("../../../../../assets/images/c.jpg")], usedNumber:"7832"},
]

const TagsView = () => {


    const tagscomp = ({item})=> {
        return (
            <View style={{height:160, aspectRatio:1, padding:8}}>

                <View style={{height:'100%', width:'100%', borderRadius:18, backgroundColor:'#dbdbdbff', padding:12}}>
                    <View style={{width:'100%', flex:1, justifyContent:'center', alignItems:'center'}}>
                        <Text style={{fontFamily:'poppins-medium', fontSize:16}}>
                            {item.title}
                        </Text>
                    </View>

                    <View style={{width:'100%', flexDirection:'row', justifyContent:"space-between"}}>

                        <View style={{flexDirection:'row'}}>
                            {
                                item.images.map((item, index)=> {
                                    return(
                                        <View key={index} style={{height:34, width:34, borderRadius:16, marginLeft:index === 0? 0 : -12, backgroundColor:'black', overflow:'hidden'}}>
                                            <Image source={item} style={{height:'100%',width:'100%'}} />
                                        </View>
                                    )
                                })
                            }

                        </View>

                        <View style={{paddingHorizontal:8, backgroundColor:'#c0c0c0ff', borderRadius:23, justifyContent:'center', alignItems:'center'}}>
                            <Text style={{fontFamily:"poppins-medium", fontSize:12}}>{item.usedNumber}</Text>
                        </View>

                    </View>
                </View>

            </View>
        )
    }


  return (
    <View style={{width:'100%', marginVertical:12}}>
        <CrousalHeader title={"Your vide tribe"} moreButton={true} />

        <FlatList 
        horizontal
        showsHorizontalScrollIndicator={false}
        data={tagsData}
        renderItem={tagscomp}
        contentContainerStyle={{paddingHorizontal:18}}
        style={{marginVertical:8}}
        />
    </View>
  )
}

export default TagsView