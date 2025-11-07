import { View, Text, Button, TouchableOpacity, Image } from 'react-native'
import React from 'react'
import CrousalHeader from './CrousalHeader'
import { FlatList } from 'react-native'
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import Entypo from '@expo/vector-icons/Entypo';
import Ionicons from '@expo/vector-icons/Ionicons';
import FontAwesome6 from '@expo/vector-icons/FontAwesome6';
import Colors from '../../../../../constants/Colors';

const eventsData = [
    {
        id:1,
        image:require("../../../../../assets/images/a.jpg"),
        dateString:"11 October",
        timeString:"9am - 10pm",
        title:"LPU Innovate Now",
        hostedBy:"Organised by Department of Enturpenuratship",
        location:"In Campus"
     },
         {
        id:2,
         image:require("../../../../../assets/images/b.jpg"),
         dateString:"25 November",
        timeString:"5pm - 8pm",
        title:"Comic Verse",
        hostedBy:"Organised by Play2Unite",
        location:"SDMA - Auditorium"
     },
         {
        id:3,
         image:require("../../../../../assets/images/c.jpg"),
        dateString:"17 November",
        timeString:"5pm - 7pm",
        title:"Opening Showdown",
        hostedBy:"Organised by Pawn Knight",
        location:"Block 13, DSW"
     },
         {
        id:4,
         image:require("../../../../../assets/images/d.jpg"),
        dateString:"2 November",
        timeString:"5pm - 7pm",
        title:"Dead Poet's Society",
        hostedBy:"Organised by Macbease Crew",
        location:"Block 13, DSW"
     },
]

const EventsView = () => {

    const eventComp = ({item}) => {
        return (
            <View style={{width:300, paddingHorizontal:8}}>

                <View style={{width:'100%',  backgroundColor:'white',  borderRadius:16, overflow:'hidden', borderWidth:1, borderColor:'lightgray'}} >

                    <View style={{width:'100%',  height:160, backgroundColor:'gray'}}>
                        <Image source={item.image} style={{height:'100%', width:'100%'}} />
                    </View>

                    <View style={{ width:'100%', paddingHorizontal:12, marginVertical:12}}>

                    <Text style={{fontFamily:'poppins-semibold', fontSize:18, marginBottom:8}}>{item.title}</Text>

                    <View style={{width:'100%',  gap:4}}>
                        <View style={{width:'100%', alignItems:'center', justifyContent:'space-between', flexDirection:'row' }}>
                       
                       <View style={{flexDirection:'row',alignItems:'center', justifyContent:'center', gap:4}}>
                            <MaterialIcons name="access-time-filled" size={18} color="#5d5d5dff" />

                           <Text style={{color:'#5d5d5dff', fontFamily:'poppins-regular'}}>{item.timeString}</Text>
                       </View>

                           <View style={{flexDirection:'row',alignItems:'center', justifyContent:'center', gap:8}}>
                            <Entypo name="calendar" size={18} color="#5d5d5dff" />

                           <Text style={{color:'#5d5d5dff', fontFamily:'poppins-regular', fontSize:14}}>{item.dateString}</Text>
                       </View>
                     

                        </View>

                        <View style={{flexDirection:'row', gap:8}}>
                            <Ionicons name="location" size={18} color="#5d5d5dff" />
                           <Text style={{color:'#5d5d5dff', fontFamily:'poppins-regular'}}>{item.location}</Text>
                        </View>
                     </View>


                     <TouchableOpacity style={{height:40, width:'100%', backgroundColor:Colors.primary, borderRadius:18, marginTop:16, justifyContent:'center', alignItems:'center'}}>
                        <Text style={{fontFamily:'poppins-regular', fontSize:16, color:'white'}}>See More</Text>

                     </TouchableOpacity>

                        

                
                 


                    </View>

              

                </View>



            </View>
        )
    }




  return (
    <View style={{width:'100%'}}>
      <CrousalHeader title={"Events you can't miss!"} moreButton={true}/>

      <FlatList
      horizontal
      showsHorizontalScrollIndicator={false}
      style={{marginVertical:14}}
      data={eventsData}
      renderItem={eventComp}
      contentContainerStyle={{paddingHorizontal:12}}
      />

    </View>

  )
}

export default EventsView