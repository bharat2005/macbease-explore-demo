import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import Feather from '@expo/vector-icons/Feather';

const CrousalHeader = ({title, text, moreButton, moreText}) => {
  return (
           <View style={{flexDirection:'row', alignItems:'center', justifyContent:'space-between', paddingHorizontal:12}}>
   
               <View>
                   <Text style={{fontSize:20, color:'black', fontFamily:'poppins-medium'}}>{title}</Text>
                   {text && <Text style={{fontSize:14,  color:'#717171ff',fontFamily:'poppins-regular'}}>{text}</Text>}
                   
               </View>


               {
                moreButton && (
             <TouchableOpacity style={{gap:2,flexDirection:'row', justifyContent:'center', alignContent:'center' }}>
                  {moreText &&  <Text style={{fontSize:15, fontWeight:'400', color:'#818181ff',fontFamily:'poppins-medium'}}>more</Text> }
                   <Feather name="chevron-right" size={24} color="#818181ff" />
               </TouchableOpacity>
                )
               }
   
  
               
           </View>
   
  )
}

export default CrousalHeader