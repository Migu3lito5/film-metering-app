import {NavigationContainer , DefaultTheme} from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Ionicons, MaterialCommunityIcons} from '@expo/vector-icons';
import Home from './screen/TabScreens/Home';
import Rolls from './screen/TabScreens/Rolls';
import Settings from './screen/TabScreens/Settings';
import MeteringCamera from './screen/EventStack/MeteringCamera';
import { View, StyleSheet } from "react-native";


const navTheme = DefaultTheme;
navTheme.colors.background = 'white';

const HomeStack = createNativeStackNavigator();
function HomeStackGroup() {
  return (
    <HomeStack.Navigator>
      <HomeStack.Screen name="Home" component={Home} options={{headerShown:false}}/>
      <HomeStack.Screen name="Camera" component={MeteringCamera} options={{presentation:"modal", headerShown: true}}/>
    </HomeStack.Navigator>
  )
}

const Tab = createBottomTabNavigator();
function TabGroup() {
  return(
  <Tab.Navigator
    initialRouteName="HomeStack" 
    screenOptions={({route, navigation}) => ({
      headerTitleAlign: 'center',
      headerShown: false,
      tabBarStyle: {
        backgroundColor: "#ECF3EB",
        paddingTop: 15,
        height: 90,
      },
      tabBarIcon: ({color, focused, size}) => {
        let iconName;
        let iconColor = focused ? "white" : "#505450";
        let iconSize = focused ? 32 : size;
        switch (route.name) {
          
          case "HomeStack":
            iconName = "home-sharp";
            return (
            <View style={[styles.tabIcon, focused && styles.activeTabIcon]}>
              <Ionicons name={iconName} size={iconSize} color={iconColor} style={{ position: 'absolute' }}/>
            </View>
            )
          case "Rolls":
            iconName = 'film';
            return (
            <View style={[styles.tabIcon, focused && styles.activeTabIcon]}>
              <MaterialCommunityIcons name={iconName} size={iconSize} color={iconColor} style={{ position: 'absolute' }}/>
            </View>
          )
          case "Settings":
            iconName = "settings-sharp";
            return (
            <View style={[styles.tabIcon, focused && styles.activeTabIcon]}>
            <Ionicons name={iconName} size={iconSize} color={iconColor} style={{ position: 'absolute' }}/>
          </View>
            )
          default:
            return null;
        }
      },
      tabBarActiveTintColor: "#A8B9A5",
      tabBarInactiveTintColor: "black",
    })}
  >
    <Tab.Screen name="Rolls" component={Rolls}/>
    <Tab.Screen name="HomeStack" component={HomeStackGroup} options={{tabBarLabel:"Home"}}/>
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

const styles = StyleSheet.create({
  tabIcon: {
    justifyContent: "center",
    alignItems: "center",
    alignContent: "center",
    position: "relative"
  },
  activeTabIcon: {
    borderRadius: 30,
    backgroundColor: "#A8B9A5",
    padding: 40,
    marginBottom: 20,
  },
});