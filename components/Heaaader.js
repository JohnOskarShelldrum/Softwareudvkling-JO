import React, { Component } from 'react'
import {View, Text, StyleSheet, Button, TouchableOpacity} from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import {Header} from 'react-native-elements';

export default class Heaaader extends Component{

    handleNavigation = () => {
        this.props.navigation.openDrawer()
    };

    render() {
        const {title}= this.props;
        return(
            <View style={styles.container}>

                <Header
                    placement="left"
                    leftComponent={{ icon: 'menu', color: '#fff', }}
                    centerComponent={{ text: title, style: { color: '#fff' } }}
                    rightComponent={{ icon: 'home', color: '#fff' }}
                />
                </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'white',

    },
    title: {
        marginTop: 2,
        paddingVertical: 2,
        borderWidth: 2,
        borderColor: "#20232a",
        borderRadius: 6,
        backgroundColor: "#61dafb",
        color: "#20232a",
        fontSize: 15,
        fontWeight: "bold"
    }
})


    //<TouchableOpacity style={styles.icon} onPress={this.handleNavigation}>
    //<MaterialCommunityIcons name="format-align-justify" size={30} color="grey" />
    //</TouchableOpacity>
