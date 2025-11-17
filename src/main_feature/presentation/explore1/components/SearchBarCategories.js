import { View, Text, FlatList, Image } from 'react-native'
import React from 'react'

const categoryData = [
    {
      key: "events",
      title: "Events",
      image: "https://thumbs.dreamstime.com/b/white-events-logo-calendar-icon-dark-background-132771884.jpg"
    },
    {
      key: "hackathons",
      title: "Hackthons",
    image: "https://media.istockphoto.com/vectors/hackathon-logo-vector-id1216719282?k=20&m=1216719282&s=612x612&w=0&h=KuNdov2Neq8P48qvnKODz0j0qRWAH_Yzysh1cEQpvbw="
    },
    {
      key: "workShops",
      title: "WorkShops",
    image: "https://thumbs.dreamstime.com/b/workshop-dark-colorful-elements-text-written-over-background-84739985.jpg"
    },
    {
      key: "sports",
      title: "Sports",
    image: "https://as2.ftcdn.net/v2/jpg/03/02/12/83/1000_F_302128359_q6aCwgAvdYZBPF4XSwxXddLPE0h3Kor1.jpg",
    },
    {
      key: "music",
      title: "Music",
    image: "https://img.freepik.com/premium-vector/simple-music-logo-design-concept-vector_9850-3772.jpg"
    },
    {
      key: "courses",
      title: "Courses",
    image: "https://icon-library.com/images/mortar-board-icon/mortar-board-icon-3.jpg"
    },
  ]

const SearchBarCategories = () => {
    
    const renderItem = ({item})=>{
        return (
            <View style={{width:80, height:'100%', alignItems:'center', justifyContent:'center', gap:6}}>

                <View style={{aspectRatio:1, width:'70%', borderRadius:'50%', backgroundColor:'black', overflow:'hidden'}}>
                    <Image source={{uri:item.image}} style={{height:'100%', width:'100%'}} />
                </View>
                <Text style={{fontSize:12, color:'gray'}}>{item.title}</Text>

            </View>
        )
    }


  return (
    <View style={{width:'100%', height:100, marginTop:6}}>
     
     <FlatList
     horizontal
     showsHorizontalScrollIndicator={false}
     data={categoryData}
     renderItem={renderItem}
     />

    
    </View>
  )
}

export default SearchBarCategories