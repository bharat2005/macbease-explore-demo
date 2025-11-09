import { View, Text, Dimensions } from 'react-native'
import React, { useState } from 'react'
import { SceneMap, TabView } from 'react-native-tab-view'
import EventCategorriesTabBar from './EventCategorriesTabBar'

const EmptyComp = () => {
    return (
        <Text>NOting here</Text>
    )
}

const EventsTabsView = () => {
    const [index, setIndex] = useState(0)
    const [routes, setRoutes] = useState([
        {key:"all", title:'All Events'},
        {key:"group", title:'New groups'},
        {key:"social", title:'Social Activities'},
        {key:"hobby", title:'Hobbies'},
        {key:"sports", title:'Sports'},
        {key:"travel", title:'Travel'},
        {key:"career", title:'Career & Buisness'},
        {key:"tech", title:'Tech'},
        {key:"community", title:'Community'},
        {key:"games", title:'Games'},
        {key:"dancing", title:'Dancing'},
        {key:"support", title:'Sports'},
        {key:"music", title:'Music'},
        {key:"arts", title:'Arts'},
        {key:"education", title:'Education'},
        {key:"pets", title:'Religion'},
        {key:"write", title:'Writing'},
        {key:"family", title:'Family'},
        {key:"politics", title:'Politics'},
    ])

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
