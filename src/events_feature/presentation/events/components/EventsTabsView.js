import { View, Text, Dimensions, FlatList } from 'react-native'
import React, { useState } from 'react'
import { SceneMap, TabView } from 'react-native-tab-view'
import EventCategorriesTabBar from './EventCategorriesTabBar'
import { Ionicons, MaterialCommunityIcons, FontAwesome5, Feather, Octicons } from '@expo/vector-icons';
import FontAwesome6 from '@expo/vector-icons/FontAwesome6';

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


const EmptyComp = () => {
  const [refreshing, setRefreshing] = useState(false)

  const mockLoad = async () => {
    setRefreshing(true)
    await new Promise((resolve, reject)=> {setTimeout(()=>resolve("Done"), 3000)})
    setRefreshing(false)
  }

  const renderItem = () => {
    return  (
      <></>
    )
  }
    return (
        <View style={{flex:1}}>

          <FlatList 
            onRefresh={mockLoad}
            refreshing={refreshing}
            data={eventsData}
            renderItem={renderItem}
          />

        </View>
    )
}

const EventsTabsView = () => {
    const [index, setIndex] = useState(0)



const [routes, setRoutes] = useState([
  { 
    key: "all", 
    title: 'All', 
    icon: (focused) => <Ionicons name="apps-outline" size={22} color={focused ? 'black' : 'gray'} /> 
  },
  { 
    key: "group", 
    title: 'Groups', 
    icon: (focused) => <Ionicons name="people-outline" size={22} color={focused ? 'black' : 'gray'} /> 
  },
  { 
    key: "social", 
    title: 'Social', 
    icon: (focused) => <Ionicons name="chatbubbles-outline" size={22} color={focused ? 'black' : 'gray'} /> 
  },
  { 
    key: "hobby", 
    title: 'Hobbies', 
    icon: (focused) => <MaterialCommunityIcons name="puzzle-outline" size={22} color={focused ? 'black' : 'gray'} /> 
  },
  { 
    key: "sports", 
    title: 'Sports', 
    icon: (focused) => <FontAwesome6 name="futbol-ball" size={22} color={focused ? 'black' : 'gray'} /> 
  },
  { 
    key: "travel", 
    title: 'Travel', 
    icon: (focused) => <Ionicons name="airplane-outline" size={22} color={focused ? 'black' : 'gray'} /> 
  },
  { 
    key: "career", 
    title: 'Career', 
    icon: (focused) => <MaterialCommunityIcons name="briefcase-outline" size={22} color={focused ? 'black' : 'gray'} /> 
  },
  { 
    key: "tech", 
    title: 'Tech', 
    icon: (focused) => <Ionicons name="hardware-chip-outline" size={22} color={focused ? 'black' : 'gray'} /> 
  },
  { 
    key: "community", 
    title: 'Community', 
    icon: (focused) => <Ionicons name="people-circle-outline" size={22} color={focused ? 'black' : 'gray'} /> 
  },
  { 
    key: "games", 
    title: 'Games', 
    icon: (focused) => <MaterialCommunityIcons name="gamepad-variant-outline" size={22} color={focused ? 'black' : 'gray'} /> 
  },
  { 
    key: "dancing", 
    title: 'Dancing', 
    icon: (focused) => <MaterialCommunityIcons name="human-female-dance" size={22} color={focused ? 'black' : 'gray'} /> 
  },
  { 
    key: "support", 
    title: 'Support', 
    icon: (focused) => <MaterialCommunityIcons name="hand-heart-outline" size={22} color={focused ? 'black' : 'gray'} /> 
  },
  { 
    key: "music", 
    title: 'Music', 
    icon: (focused) => <Ionicons name="musical-notes-outline" size={22} color={focused ? 'black' : 'gray'} /> 
  },
  { 
    key: "arts", 
    title: 'Arts', 
    icon: (focused) => <MaterialCommunityIcons name="palette-outline" size={22} color={focused ? 'black' : 'gray'} /> 
  },
  { 
    key: "education", 
    title: 'Education', 
    icon: (focused) => <Ionicons name="school-outline" size={22} color={focused ? 'black' : 'gray'} /> 
  },
  { 
    key: "pets", 
    title: 'Pets', 
    icon: (focused) => <MaterialCommunityIcons name="paw-outline" size={22} color={focused ? 'black' : 'gray'} /> 
  },
  { 
    key: "write", 
    title: 'Writing', 
    icon: (focused) => <Feather name="edit-3" size={22} color={focused ? 'black' : 'gray'} /> 
  },
  { 
    key: "family", 
    title: 'Family', 
    icon: (focused) => <Ionicons name="home-outline" size={22} color={focused ? 'black' : 'gray'} /> 
  },
  { 
    key: "politics", 
    title: 'Politics', 
    icon: (focused) => <MaterialCommunityIcons name="account-tie-outline" size={22} color={focused ? 'black' : 'gray'} /> 
  },
]);



    const renderScene = SceneMap({
        all:EmptyComp,
        group:EmptyComp,
        social:EmptyComp,
        hobby:EmptyComp,
        sports:EmptyComp,
        travel:EmptyComp,
        career:EmptyComp,
        tech:EmptyComp,
        community:EmptyComp,
        games:EmptyComp,
        dancing:EmptyComp,
        support:EmptyComp,
        music:EmptyComp,
        arts:EmptyComp,
        education:EmptyComp,
        pets:EmptyComp,
        write:EmptyComp,
        family:EmptyComp,
        politics:EmptyComp,
    })

  return (
    <View style={{flex:1}}>

        <EventCategorriesTabBar routes={routes} setIndex={setIndex} index={index} />
      
            <TabView
                navigationState={{ index, routes }}
                renderScene={renderScene}
                onIndexChange={setIndex}
                renderTabBar={()=> null}
                initialLayout={{ width: Dimensions.get('screen').width }}
            />

    </View>
  )
}

export default EventsTabsView
