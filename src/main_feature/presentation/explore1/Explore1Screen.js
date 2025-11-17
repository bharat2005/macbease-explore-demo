import { View, Text } from "react-native";
import React from "react";
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

const HEADER_MAX_HEIGHT = 240;

const topClubsData = [
    { id: 1, image: require("../../../../assets/images/club1.png"), title: "Arts" },
    { id: 2, image: require("../../../../assets/images/club2.png"), title: "Sports" },
    { id: 3, image: require("../../../../assets/images/club3.png"), title: "Tech" },
    { id: 4, image: require("../../../../assets/images/club4.png"), title: "Education" },
        { id: 5, image: require("../../../../assets/images/club1.png"), title: "Arts" },
    { id: 6, image: require("../../../../assets/images/club2.png"), title: "Sports" },
    { id: 7, image: require("../../../../assets/images/club3.png"), title: "Tech" },
    { id: 8, image: require("../../../../assets/images/club4.png"), title: "Education" },

];


const topCommuData = [
    { id: 1, image: require("../../../../assets/images/club1.png"), title: "Arts" },
    { id: 2, image: require("../../../../assets/images/club2.png"), title: "Sports" },
    { id: 3, image: require("../../../../assets/images/club3.png"), title: "Tech" },
    { id: 4, image: require("../../../../assets/images/club4.png"), title: "Education" },
        { id: 5, image: require("../../../../assets/images/club1.png"), title: "Arts" },
    { id: 6, image: require("../../../../assets/images/club2.png"), title: "Sports" },
    { id: 7, image: require("../../../../assets/images/club3.png"), title: "Tech" },
    { id: 8, image: require("../../../../assets/images/club4.png"), title: "Education" },

];


const Explore1Screen = () => {
  const scrollY = useSharedValue(0);

  const onScroll = useAnimatedScrollHandler({
    onScroll: (e) => {
      scrollY.value = e.contentOffset.y;
    },
  });

  const crousalFadeStyle = useAnimatedStyle(() => {
    const opacity = interpolate(
      scrollY.value,
      [0, HEADER_MAX_HEIGHT / 2, HEADER_MAX_HEIGHT],
      [1, 0.5, 0],
      Extrapolation.CLAMP
    );
    return {
      opacity,
    };
  });

  return (
    <SafeAreaView edges={["top"]} style={{backgroundColor:'white'}}>
      <Animated.ScrollView
        showsVerticalScrollIndicator={false}
        onScroll={onScroll}
        contentContainerStyle={{gap:12}}
        stickyHeaderIndices={[1]}
      >
        {/* AnimatedCrousal */}
        <Animated.View style={[{ height: HEADER_MAX_HEIGHT, marginBottom:8 }, crousalFadeStyle]}>
          <Explore1CrousalView />
        </Animated.View>

        {/* SerachBarHeader */}
        <View
          style={{
            width: "100%",
            backgroundColor:'white',
            marginBottom:6
          }}
        >
          <View
            style={{
              width:'92%',
              height: 50,
              alignSelf:'center',
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

          <SearchBarCategories />
        </View>

        <Explore1ClubsView />

        <Explore1NormalCrousalView hiData={topClubsData} headerText={"Top Clubs"}/>

            <Explore1NormalCrousalView hiData={topClubsData} headerText={"Top Communities"}/>






      </Animated.ScrollView>
    </SafeAreaView>
  );
};

export default Explore1Screen;
