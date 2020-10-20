import React,{ Component } from 'react'
import { Button, View, Text } from 'react-native';
import {createStackNavigator} from "@react-navigation/stack";
import PukaScreen from "./SubComponent/PukaScreen";
import PhotosScreen from "./SubComponent/PhotosScreen";
import SunsetScreen from "./SubComponent/SunsetScreen";

const Stack = createStackNavigator()

 /*TopNavigation*/
export default class TopNavigation extends Component {
    render() {
        return (
             /*Opretter stacknavigator med 3 ruter*/
            <Stack.Navigator>
                <Stack.Screen name="Photos"
                 component={PhotosScreen}
                 options={{
                    headerStyle: {
                         backgroundColor: "black"
                    },
                    headerTintColor: '#fff',
                     }}  />
                <Stack.Screen name="Puka Beach" 
                component={PukaScreen}
                options={{
                    headerStyle: {
                         backgroundColor: "black"
                        },
                        headerTintColor: '#fff'
                    
                     }} />
                <Stack.Screen name="Puka Sunset"
                 component={SunsetScreen} 
                 options={{
                      headerStyle: {
                           backgroundColor: "black"
                        },
                        headerTintColor: '#fff',
                       }}
                    />
            </Stack.Navigator>
        );
    }
}
