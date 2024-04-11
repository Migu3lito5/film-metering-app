import {NavigationContainer} from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons, MaterialCommunityIcons} from '@expo/vector-icons';
import Home from './screen/TabScreens/Home';
import Rolls from './screen/TabScreens/Rolls';
import Settings from './screen/TabScreens/Settings';

const Tab = createBottomTabNavigator();

function TabGroup() {
  return(
  <Tab.Navigator
    screenOptions={({route, navigation}) => ({
      headerTitleAlign: 'center',
      tabBarIcon: ({color, focused, size}) => {
        let iconName;
        let iconColor;

        switch (route.name) {
          case "Home":
            iconName = "camera";
            iconColor = focused ? "green" : "black";
            return <Ionicons name={iconName} size={size} color={color}/>;
          case "Rolls":
            iconName = 'film';
            iconColor = focused ? "green" : "black";
            return <MaterialCommunityIcons name={iconName} size={size} color={color}/>;
          case "Settings":
            iconName = "settings-sharp";
            iconColor = focused ? "green" : "black";
            return <Ionicons name={iconName} size={size} color={color}/>;
          default:
            return null;
        }
      },
      tabBarActiveTintColor: "#FF5247",
    }
  )}
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