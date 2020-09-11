import React,{ Component } from 'react'
import { Button, View, Text } from 'react-native';

export default class UpdatesScreen extends Component {
    render() {
        return (
            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                <Text>Updates!</Text>
                <Button
                    title="Go To Details"
                    onPress={() => this.props.navigation.goBack()}
                />
            </View>
        );
    }
}
