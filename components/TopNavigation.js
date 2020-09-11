import React,{ Component } from 'react'
import { Button, View, Text } from 'react-native';
import {createStackNavigator} from "@react-navigation/stack";
import UpdatesScreen from "./SubComponent/UpdatesScreen";
import DetailsScreen from "./SubComponent/DetailsScreen";

const Stack = createStackNavigator()


export default class TopNavigation extends Component {
    render() {
        return (
            <Stack.Navigator>
                <Stack.Screen name="Details" component={DetailsScreen} />
                <Stack.Screen name="Updates" component={UpdatesScreen} />
            </Stack.Navigator>
        );
    }
}
