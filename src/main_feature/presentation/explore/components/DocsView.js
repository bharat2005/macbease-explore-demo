import { View, Text, FlatList } from 'react-native'
import React from 'react'
import Feather from '@expo/vector-icons/Feather';


const docsData = [
    {id:1, title:"Introduction to Space Dynamics", by:"", downloads:"5388"},
    {id:2, title:"Useful Phrases for writing reserch", by:"", downloads:"7923"},
    {id:3, title:"Interactive Desgins", by:"", downloads:"9382"},
    {id:4, title:"Orbital Mechanics", by:"", downloads:"293"},
    {id:5, title:"Space Dynamics", by:"", downloads:"1204"},
]

const DocsView = () => {


    const docsComp  = ({item}) =>{
        reutrn (
            <View style={{width:100, paddingHorizontal:12, }}>

                <View style={{width:'100%', height:120, borderRadius:12, backgroundColor:'black'}}>

                </View>

                <View style={{flexDirection:'row', justifyContent:'center', alignItems:'center'}}>
                    <Feather name="download" size={24} color="#5d5d5dff" />

                    <Text style={{fontFamily:'poppins-medium', fontSize:18,color:'#5d5d5dff'}}>{item.downloads}</Text>
                </View>

            </View>
        )
    }









  return (
    <View style={{width:'100%', marginVertical:12}}>
        <CrousalHeader title={"Useful Notes"} moreButton={true} />

        <FlatList
        horizontal
        showsHorizontalScrollIndicator={false}
        data={[]}
        renderItem={null}
        contentContainerStyle={{paddingHorizontal:12}}
        />


    </View>
  )
}

export default DocsView