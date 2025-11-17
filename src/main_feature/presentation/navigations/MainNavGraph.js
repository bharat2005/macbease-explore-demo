
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { Ionicons, FontAwesome, Feather } from '@expo/vector-icons';
import Colors from '../../../../constants/Colors'
import ExploreScreen from '../explore/ExploreScreen';
import Explore1Screen from '../explore1/Explore1Screen';
import Explore3Screen from '../explore3/Explore3Screen';




const Tab = createBottomTabNavigator()

const MainNavGraph = () => {
  return (
   
        <Tab.Navigator 
        initialRouteName='Explore1'
        screenOptions={({route})=> ({
          headerShown: false,
          tabBarIcon: ({focused, color, size})=>{
            return focused ? <Ionicons name="compass" size={size} color={color} /> : <Ionicons name="compass-outline" size={size} color={color} />;
          },
          tabBarActivveTintColor: Colors.primary,
          tabBarInactiveTintColor: 'black',

        })}>
          <Tab.Screen name={"Explore1"} component={Explore1Screen}/>
          <Tab.Screen name={"Explore2"} component={ExploreScreen}/>
          <Tab.Screen name={"Explore3"} component={Explore3Screen}/>
        </Tab.Navigator>
 
  )
}

export default MainNavGraph