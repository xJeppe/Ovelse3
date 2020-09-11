import React,{ Component } from 'react'
import { Button, View, Text } from 'react-native';

export default class DetailsScreen extends Component {
    render() {
         return (
            <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                <Text>Details Screen</Text>
                <Button
                    title="Go to Updates"
                    onPress={() => this.props.navigation.push('Updates')}
                />
                <Button title="Go to home"
                        onPress={() => this.props.navigation.navigate('Home')} />
            </View>
        );
    }
}
