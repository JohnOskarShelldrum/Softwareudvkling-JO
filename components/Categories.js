import React, { Component } from 'react'
import {View, Text, StyleSheet, Button, TouchableOpacity, Image} from 'react-native';
import Sports from "./Categories/Sports";
import Heaaader from "./Heaaader";
export default  class Categories extends Component {

   callFun = () =>
   {
    this.props.navigation.navigate('Sports')

   }

    render() {
        return(

            <View style={styles.container}>
                <Heaaader navigation={this.props.navigation} title='Home'/>

        <View style={styles.imageContainer}>
            <TouchableOpacity activeOpacity = { .5 } onSelect={this.callFun}>
            <Image
                style={{ width: 350, height: 150}}
                source={require('./img/sports.jpg')}
            />
            </TouchableOpacity>
            <Text>
                Sports
            </Text>
        </View>

                <View style={styles.imageContainer}>
                    <Image
                        style={{ width: 350, height: 150}}
                        source={require('./img/education.jpg')}


                    />
                    <Text>
                        Education
                    </Text>
                </View>
                    <View style={styles.imageContainer}>
                        <Image
                            style={{ width: 350, height: 150}}
                            source={require('./img/language.png')}
                        />
                        <Text>
                            Language
                        </Text>
                </View>
                </View>

        )
    }

}

const styles = StyleSheet.create({
    mainContainer: {
        flex: 1,
        width: '100%',
        backgroundColor:'#7CA1B4',
        alignItems: 'center',
        justifyContent: 'center',
    },

    blue:{
        backgroundColor:'#7CA1B4'
    },
    green:{
        backgroundColor: 'green'
    },
    textContainer: {
        flex: 0.1,
        marginTop: 200,
        alignItems: 'center',
        height: 100,
        backgroundColor: '#white'

    },
    imageContainer: {
        flex:0.5,
        marginTop: 40,
        alignItems: 'center',
        height: 300,
        backgroundColor: '#white',
        borderWidth: 2,
        borderColor: "#20232a",
        borderRadius: 6,

    }
})

