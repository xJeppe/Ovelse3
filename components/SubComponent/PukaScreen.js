import React,{ Component } from 'react'
import { Button, View, Text, Image, TouchableOpacity, TextInput, StyleSheet } from 'react-native';
/*Stylesheet til PukaScreen*/
const styles = StyleSheet.create({

    input: {
        width: "80%",
        fontSize: 20,
        height: 200,
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
        height:300,
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

/*PukaScreen klasse*/
export default class PukaScreen extends Component {
/*State til textinput oprettes*/
    state = {
        b1: '',
        b2: '',

    };
/*Handler til textinput oprettes*/
    handleChangeB1 = b1 => this.setState({ b1 });
    
    render() {
        return (
            /*View med Container style, indeholder 1 billede med 1 textinput*/
            <View style={styles.container}>
                
                
                
                <Image source = {{uri:'https://a.cdn-hotels.com/gdcs/production152/d1031/c11cf3af-ceac-485d-89ad-ab09a8bc97ce.jpg'}}
                style = {{ width: 200, height: 200 }}/>
                <View style={styles.input} >
                <TextInput
                    style={styles.inputText}
                    placeholder='Beskrivelse'
                    placeholderTextColor="#003f5c"
                    onChangeText={this.handleChangeB1}
                    underlineColorAndroid="transparent"
                    autoCapitalize="none"
                    
                />
                </View>


            </View>
            
        );
    }
}
