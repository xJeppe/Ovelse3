import React,{ Component } from 'react'
import { Button, View, Text, Image, TextInput, StyleSheet } from 'react-native';
 

/*Stylesheet til Homescreen*/
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

 /*Homescreen*/
export default class HomeScreen extends Component {
 /*States oprettes til inputfelterne*/
    state = {
        fornavn: '',
        efternavn: '',

    };
 /*Handlers oprettes til textinput felterne*/
    handleChangeForNavn = fornavn => this.setState({ fornavn });
    handleChangeEfterNavn = efternavn => this.setState({ efternavn });
    

    render() {
        return (
             /*View med container, indeholder "profilbillede" samt 2 inputtext*/
            <View style={styles.container}>
               <Text style={styles.header}>Navn</Text>

                <Image source = {{uri:'https://upload.wikimedia.org/wikipedia/commons/thumb/7/7e/Circle-icons-profile.svg/512px-Circle-icons-profile.svg.png'}}
                style = {{ width: 200, height: 200, marginBottom: 10 }}/>
               
               
                <View style={styles.input} >
                <TextInput
                    style={styles.inputText}
                    placeholder='Fornavn'
                    placeholderTextColor="#003f5c"
                    onChangeText={this.handleChangeForNavn}
                    underlineColorAndroid="transparent"
                    autoCapitalize="none"
                    
                />
                </View>
                
                <View style={styles.input} >
                <TextInput
                    style={styles.inputText}
                    placeholder='Efternavn'
                    placeholderTextColor="#003f5c"
                    onChangeText={this.handleChangeEfterNavn}
                    underlineColorAndroid="transparent"
                    autoCapitalize="none"
                    
                />
                </View>


            </View>
        );
    }
}
