import React,{ Component } from 'react'
import HomeScreen from "./HomeScreen";
import CameraScreen from "./CameraScreen";
import Topnavigation from "./TopNavigation"
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { MaterialCommunityIcons } from '@expo/vector-icons';

const Tab = createBottomTabNavigator();

 /*BottomTabNavigator*/
export default class BottomNavigation extends Component {
    render() {
        return (
           /*BottomTabNavigator oprettes med 3 ruter. Home rute som startside.*/
            <Tab.Navigator
                initialRouteName="Home"
      tabBarOptions={{
        activeTintColor: "beige",
        inactiveBackgroundColor: "black",
        activeBackgroundColor: "black"
      }}
      >
            <Tab.Screen name="Home" component={HomeScreen}
            options={{
                tabBarLabel: 'Home',
                tabBarIcon: ({ color, size }) => (
                  <MaterialCommunityIcons name="home" color={color} size={size} />
                ),
              }} />

            <Tab.Screen name="Camera" component={CameraScreen}
             options={{
                tabBarLabel: 'Camera',
                tabBarIcon: ({ color, size }) => (
                  <MaterialCommunityIcons name="camera" color={color} size={size} />
                ),
              }} />
            <Tab.Screen name="Photos" component={Topnavigation}
             options={{
                tabBarLabel: 'Photos',
                tabBarIcon: ({ color, size }) => (
                  <MaterialCommunityIcons name="image" color={color} size={size}/>
            
                ),
            }} />
        </Tab.Navigator>
            );
        }
    }