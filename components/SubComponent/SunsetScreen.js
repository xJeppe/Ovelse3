import React,{ Component } from 'react'
import { Button, View, Text, Image, TouchableOpacity, TextInput, StyleSheet } from 'react-native';

 /*Stylesheet til SunsetScreen*/
const styles = StyleSheet.create({

    input: {
        width: "80%",
        fontSize: 20,
        height: 50,
        padding:20,
        borderWidth: 1,
        borderColor: 'black',
        marginVertical: 10,
        backgroundColor: "#465881",
        borderRadius:25,
        justifyContent:"center",
        marginBottom:20,  
    },
    inputText:{
        height:50,
        color:"white"
      },
    container: {
        flex: 1,
        backgroundColor: '#003f5c',
        alignItems: 'center',
        justifyContent: 'center',
    },
        header: {
            fontWeight:"bold",
            fontSize: 20,
            marginBottom:20
        },
});

 /*SunsetScreen*/
export default class SunsetScreen extends Component {
    
    render() {
        return (
             /*Der oprettes et view i container, indeholder 1 billede og 1 tekst*/
            <View style={styles.container}>
                
                
                
                <Image source = {{uri:'https://media.tacdn.com/media/attractions-splice-spp-674x446/07/ba/13/e8.jpg'}}
                style = {{ width: 200, height: 200 }}/>
            <Text style={{  justifyContent: 'center', alignContent: 'center' }}>
                Solnedgang fra Puka Beach. Har du nogensinde set nogen lignende? Torsdag aften!
            </Text>


            </View>
            
        );
    }
}
