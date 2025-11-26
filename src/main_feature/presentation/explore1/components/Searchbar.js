import { View, Text } from 'react-native'
import React from 'react'
import { Feather } from '@expo/vector-icons'

const Searchbar = () => {
  return (
         <View
          style={{
            width: "100%",
            backgroundColor: "white",
            paddingVertical: 12,
          }}
        >
          <View
            style={{
              width: "92%",
              height: 50,
              alignSelf: "center",
              backgroundColor: "lightgray",
              paddingHorizontal: 14,
              borderRadius: 12,
              flexDirection: "row",
              gap: 12,
              alignItems: "center",
            }}
          >
            <Feather name="search" size={24} color="black" />

            <Text>Explore events you might like</Text>
          </View>

          
        </View>
  )
}

export default Searchbar