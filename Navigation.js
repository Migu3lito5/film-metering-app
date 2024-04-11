import {NavigationContainer , DefaultTheme} from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons, MaterialCommunityIcons} from '@expo/vector-icons';
import Home from './screen/TabScreens/Home';
import Rolls from './screen/TabScreens/Rolls';
import Settings from './screen/TabScreens/Settings';

const navTheme = DefaultTheme;
navTheme.colors.background = 'white';

const Tab = createBottomTabNavigator();

function TabGroup() {
  return(
  <Tab.Navigator
    screenOptions={({route, navigation}) => ({
      headerTitleAlign: 'center',
      headerShown: false,
      tabBarStyle: {
        backgroundColor: "#7f9179",
        paddingTop: 10,
        height: 90,
      },
      tabBarIcon: ({color, focused, size}) => {
        let iconName;
        let iconColor;

        switch (route.name) {
          case "Home":
            iconName = "camera";
            iconColor = focused ? "#cbfcbb" : "white";
            return <Ionicons name={iconName} size={size} color={iconColor}/>;
          case "Rolls":
            iconName = 'film';
            iconColor = focused ? "#cbfcbb" : "white";
            return <MaterialCommunityIcons name={iconName} size={size} color={iconColor}/>;
          case "Settings":
            iconName = "settings-sharp";
            iconColor = focused ? "#cbfcbb" : "white";
            return <Ionicons name={iconName} size={size} color={iconColor}/>;
          default:
            return null;
        }
      },
      tabBarActiveTintColor: "#cbfcbb",
      tabBarInactiveTintColor: "white",
    })}
  >
    <Tab.Screen name="Home" component={Home}/>
    <Tab.Screen name="Rolls" component={Rolls}/>
    <Tab.Screen name="Settings" component={Settings}/>
  </Tab.Navigator>
  )
}

export default function Navigation() {
  return (
    <NavigationContainer>
      <TabGroup />
    </NavigationContainer>
  )
}