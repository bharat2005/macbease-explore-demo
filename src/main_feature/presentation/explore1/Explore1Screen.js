import { View, Text, Image } from "react-native";
import React, { Fragment, useMemo } from "react";
import Animated, {
  Extrapolation,
  interpolate,
  useAnimatedScrollHandler,
  useAnimatedStyle,
  useSharedValue,
} from "react-native-reanimated";
import { SafeAreaView } from "react-native-safe-area-context";
import CrousalView from "../explore/components/CrousalView";
import { Feather } from "@expo/vector-icons";
import Explore1CrousalView from "./components/Explore1CrousalView";
import SearchBarCategories from "./components/SearchBarCategories";
import Explore1ClubsView from "./components/Explore1ClubsView";
import Explore1NormalCrousalView from "./components/Explore1NormalCrousalView";
import AllinOnePlaceView from "./components/AllinOnePlaceView";
import GalleryView from "./components/GalleryView";
import BarsCrousal from "./components/BarsCrousal";
import Searchbar from "./components/Searchbar";
import CrousalData from "../../../constants/CrousalData";
import FeaturedEventsView from "./components/FeaturedEventsView";
import TopClubsView from "./components/TopClubsView";
import TopCommunityView from "./components/TopCommunityView"
import PastEventsView from './components/PastEventsView'
import SmartImage2 from "./components/SmartImage2";


const Explore1Screen = () => {


  const alignSignature = {
    pagination:Explore1CrousalView,
    generic_filters:SearchBarCategories,
    featured_events:FeaturedEventsView,
    banner: BarsCrousal,
    quadrant_filters:Explore1ClubsView,
    top_clubs:TopClubsView,
    top_communities:TopCommunityView,
    tile_filters:AllinOnePlaceView,
    past_events:PastEventsView,
    event_gallery:GalleryView
  }

  const renderItem = (item, index) =>{
    const Comp = alignSignature[item.uiSignature]
    if(Comp){
      return <Comp data={item.data} uiSignature={item.uiSignature} />
    } else {
      return <></>
    }
  
  }


  return (
    <SafeAreaView edges={["top"]} style={{ backgroundColor: "white" }}>


      <Animated.ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ gap: 12 }}
        stickyHeaderIndices={[0]}
      >

        <Searchbar/>

   

        {
          CrousalData.blocks.map((item, index)=>{
            return (
            <Fragment key={item.order}>
              {renderItem(item, index)}
            </Fragment>
            )
          })
          
        }

      </Animated.ScrollView>
    </SafeAreaView>
  );
};

export default Explore1Screen;
