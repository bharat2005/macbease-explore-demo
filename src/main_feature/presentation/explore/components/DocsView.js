import { View, Text, FlatList, Image } from 'react-native'
import React from 'react'
import Feather from '@expo/vector-icons/Feather';
import CrousalHeader from './CrousalHeader';


const docsData = [
    {id:1, title:"Introduction to Space Dynamics", by:"", downloads:"5388"},
    {id:2, title:"Useful Phrases for writing reserch", by:"", downloads:"7923"},
    {id:3, title:"Interactive Desgins", by:"", downloads:"9382"},
    {id:4, title:"Orbital Mechanics", by:"", downloads:"293"},
    {id:5, title:"Space Dynamics", by:"", downloads:"1204"},
]

const DocsView = () => {


    const docsComp  = ({item}) =>{
        return (
            <View style={{width:120, paddingHorizontal:8, gap:8}}>

                <View style={{width:'100%', height:140, borderRadius:18, flexDirection:'column-reverse', backgroundColor:'black', overflow:'hidden', borderColor:'darkgray'}}>
                    <Image source={require("../../../../../assets/images/pdf.jpg")} style={{height:'100%', width:'100%', position:'absolute'}}/>

                    <View style={{width:'100%', height:'38%',  backgroundColor:'#0000009a',  paddingHorizontal:8, justifyContent:'center', alignItems:'center'}}>
                        <Text numberOfLines={2} style={{color:'white', textAlign:'center', fontSize:12, fontFamily:'poppins-regular'}}>
                            {item.title}
                        </Text>
                    </View>

                </View>

                <View style={{flexDirection:'row', justifyContent:'flex-start', alignItems:'center', width:'100%', paddingHorizontal:8, gap:6}}>
                    <Feather name="download" size={16} color="#5d5d5dff" />

                    <Text style={{fontFamily:'poppins-medium', fontSize:14,color:'#5d5d5dff'}}>{item.downloads}</Text>
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
        data={docsData}
        renderItem={docsComp}
        contentContainerStyle={{paddingHorizontal:12, paddingVertical:14}}
        />


    </View>
  )
}

export default DocsView