import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import HomeScreen from "./components/HomeScreen";
import SettingsScreen from "./components/SettingsScreen";
import Topnavigation from "./components/TopNavigation";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { StyleSheet } from 'react-native';

const Tab = createBottomTabNavigator();

export default function App() {
    return (
        <NavigationContainer>
            <Tab.Navigator>
                <Tab.Screen name="Home" component={HomeScreen} />
                <Tab.Screen name="Settings" component={SettingsScreen} />
                <Tab.Screen name="Topnavigations with details" component={Topnavigation} />
            </Tab.Navigator>
        </NavigationContainer>
    );
}
