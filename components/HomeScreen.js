import React, { Component } from 'react'
import {View, Text, StyleSheet, Button, TouchableOpacity, Animated, Image} from 'react-native';
import Heaaader from "./Heaaader";
import ImageLoader from "react-native-web";


export default  class HomeScreen extends Component {


    render() {
        return (

            <View style={styles.container}>
                <Heaaader navigation={this.props.navigation} title='Home'/>

                <View style={styles.imageContainer}>
                <Image
                    style={{ width: 350, height: 150}}
                    source={require('./img/activit.png')}
                />
                </View>
            </View>


    );
    }
}

const styles = StyleSheet.create({
    mainContainer: {
        flex: 1,
        width: '100%',
        backgroundColor:'blue',
        alignItems: 'center',
        justifyContent: 'center',
    },

    blue:{
        backgroundColor:'blue'
    },
    green:{
        backgroundColor: 'green'
    },
    textContainer: {
        flex: 0.1,
        marginTop: 200,
        alignItems: 'center',
        height: 100,
        width: 100,
        backgroundColor: 'blue',

    },
    imageContainer: {
        flex:0.5,
        marginTop: 150,
        alignItems: 'center',
        height: 500,
        backgroundColor: 'blue'

    }
})

