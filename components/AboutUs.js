import React, { Component } from 'react'
import {View, Text, StyleSheet, Button, TouchableOpacity} from 'react-native';
import Heaaader from "./Heaaader";
export default  class Categories extends Component {
    render() {
        return(
            <Heaaader navigation={this.props.navigation} title='Aboout Us'/>

        )
    }

}

