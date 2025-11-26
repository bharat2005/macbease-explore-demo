import { View, Text, FlatList, Image } from 'react-native'
import React, { useState } from 'react'
import SearchBarCategoryChip from './SearchBarCategoryChip'

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

const SearchBarCategories = ({data}) => {
  const [isChipSelected, setIsChipSelected] = useState(null)
    
    const renderItem = ({item})=>{
        return (
            <SearchBarCategoryChip 
            data={item} 
            isSelected={isChipSelected == item.key} 
            onPress={() => setIsChipSelected(isChipSelected == item.key ? null : item.key)}
            />
        )
    }


  return (
    <View style={{width:'100%'}}>

     
     <FlatList
     horizontal
     showsHorizontalScrollIndicator={false}
     data={data}
     contentContainerStyle={{gap:12, paddingHorizontal:12, paddingVertical:12}}
     renderItem={renderItem}
     />

    
    </View>
  )
}

export default SearchBarCategories