import React,{ Component } from 'react'
import HomeScreen from "./HomeScreen";
import SettingsScreen from "./SettingsScreen";
import Topnavigation from "./TopNavigation"
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { MaterialCommunityIcons } from '@expo/vector-icons';

const Tab = createBottomTabNavigator();

export default class MyTabs extends Component {
    render() {
        return (
            <Tab.Navigator
                initialRouteName="Home"
      tabBarOptions={{
        activeTintColor: '#e91e63',
      }}
      >
            <Tab.Screen name="Home" component={HomeScreen}
            options={{
                tabBarLabel: 'Home',
                tabBarIcon: ({ color, size }) => (
                  <MaterialCommunityIcons name="home" color={color} size={size} />
                ),
              }} />

            <Tab.Screen name="Settings" component={SettingsScreen}
             options={{
                tabBarLabel: 'Settings',
                tabBarIcon: ({ color, size }) => (
                  <MaterialCommunityIcons name="settings" color={color} size={size} />
                ),
              }} />
            <Tab.Screen name="Details" component={Topnavigation}
             options={{
                tabBarLabel: 'Details',
                tabBarIcon: ({ color, size }) => (
                  <MaterialCommunityIcons name="information" color={color} size={size}/>
            
                ),
            }} />
        </Tab.Navigator>
            );
        }
    }