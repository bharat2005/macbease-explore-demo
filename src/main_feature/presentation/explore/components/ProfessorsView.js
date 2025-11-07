import { View, Text, Touchable, TouchableOpacity, FlatList } from 'react-native'
import React from 'react'
import Feather from '@expo/vector-icons/Feather';

const profData = [
    {id:1, name : "Reny Roi", image:''},
    // {id:2, name : "Harjeet Singh", image:''},
    // {id:3, name : "Deepak Kumar", image:''},
    // {id:4, name : "Robin Mathur", image:''},
    // {id:5, name : "Suman Rana", image:''},

]

const ProfessorsView = () => {

    const profView = ({item}) =>{
        return (
            <View style={{height:140, width:100, gap:8, justifyContent:'center', alignItems:'center', backgroundColor:'gray'}}>

                <View style={{backgroundColor:'black', borderRadius:'50%', height:'100%', width:'100%'}} />

            </View>
        )
    }
  return (
    <View style={{width:'100%', marginVertical:16}}>

        <View style={{flexDirection:'row', alignItems:'center', justifyContent:'space-between', paddingHorizontal:12}}>

            <View style={{gap:4}}>
                <Text style={{fontSize:18, fontWeight:'700',color:'black'}}>Professors</Text>
                <Text style={{fontSize:12, fontWeight:'400', color:'gray'}}>find your best professiors</Text>
            </View>

            <TouchableOpacity style={{gap:2,flexDirection:'row', justifyContent:'center', alignContent:'center' }}>
                <Text style={{fontSize:14, fontWeight:'400', color:'darkgray'}}>More</Text>
                <Feather name="chevron-right" size={24} color="gray" />
            </TouchableOpacity>
            
        </View>


    <FlatList
    style={{marginVertical:12}}
    horizontal={true}
    data={profData}
    showsHorizontalScrollIndicator={false}
    renderItem={profView}
    contentContainerStyle={{width:'100%', paddingHorizontal:18}}
    scrollEnabled
    />

      </View>
  )
}

export default ProfessorsView