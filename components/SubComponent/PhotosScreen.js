import React,{ Component } from 'react'
import { Button, View, Text, TouchableOpacity, Image, StyleSheet, ScrollView, TextInput } from 'react-native';


/*Stylesheet til Photos Screen*/
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
        StyledView:{
            height:150,
        },
        image: {

            alignItems: 'center',
            justifyContent: 'center',
            width: 200,
            
        },
});

/*PhotosScreen klasse*/
export default class PhotosScreen extends Component {
/*State til textinput oprettes*/
    state = {
        b1: '',
        b2: '',

    };
/*Handlers til textinput oprettes*/
    handleChangeB1 = b1 => this.setState({ b1 });
    handleChangeB2 = b2 => this.setState({ b2 });
    render() {
         return (
             /*View med container style. Foto album oprettes med scrollview. Indeholder 3 billeder, som man kan klikke på og skrive mere information.
             Hvert billede har en kort beskrivelse man kan tilføje under ved hjælp af inputtext. */
            <View style={styles.container}>
                <ScrollView >
               <Text style={styles.header}></Text>
                <TouchableOpacity onPress={()=>this.props.navigation.push('Puka Beach')}>
                <Image source = {{uri:'https://a.cdn-hotels.com/gdcs/production152/d1031/c11cf3af-ceac-485d-89ad-ab09a8bc97ce.jpg'}}
                style = {{ width: 200, height: 200 }}/>
                </TouchableOpacity>
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

                 <TouchableOpacity onPress={()=>this.props.navigation.push('Puka Sunset')}>
                <Image source = {{uri:'https://media.tacdn.com/media/attractions-splice-spp-674x446/07/ba/13/e8.jpg'}}
                style = {{ width: 200, height: 200 }}/>
                </TouchableOpacity>
                <View style={styles.input} >
                <TextInput
                    style={styles.inputText}
                    placeholder='Beskrivelse'
                    placeholderTextColor="#003f5c"
                    onChangeText={this.handleChangeB2}
                    underlineColorAndroid="transparent"
                    autoCapitalize="none"
                    
                />
                </View>

                <TouchableOpacity onPress={()=>this.props.navigation.push('Puka Sunset')}>
                <Image source = {{uri:'https://upload.wikimedia.org/wikipedia/commons/thumb/8/83/Kust_till_kust_banan.JPG/1200px-Kust_till_kust_banan.JPG'}}
                style = {{ width: 200, height: 200 }}/>
                </TouchableOpacity>

                 </ScrollView>
            </View>

        );
    }
}
