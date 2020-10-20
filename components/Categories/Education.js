import React, { Component } from 'react'
import {View, Text, StyleSheet, Button, TouchableOpacity} from 'react-native';
import Header from "./Heaaader";
export default  class Categories extends Component {
    render() {
        return(
            <Header navigation={this.props.navigation} title='Platform screen'/>

        )
    }

}

