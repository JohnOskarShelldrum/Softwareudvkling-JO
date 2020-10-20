import React, { Component } from 'react'
import {View, Text, StyleSheet, Button, TouchableOpacity} from 'react-native';
import Heaaader from "./Heaaader";
import { ActivityIndicator } from 'react-native';
import { Image } from 'react-native-elements';


export default  class ProfileScreen extends Component {



    render() {
        return (
            <View style={[styles.mainContainer]}>
                <Heaaader navigation={this.props.navigation} title='Din profil'/>
                <View style={styles.imageContainer}>
                    <Image
                        source={{ uri: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.Pk7IOefW1s0t0F-TZVmtLQHaHH%26pid%3DApi&f=1' }}
                        style={{ width: 200, height: 200 }}
                        PlaceholderContent={<ActivityIndicator />}
                    />
                    <Text
                        Peder Tanberg>

                    </Text>
                </View>
            </View>
        );
    }
}


const styles = StyleSheet.create({
    mainContainer: {
        flex: 1,
        width: '100%'
    },
    imageContainer:{
        height: 250,
        alignItems: 'center',
    },
    title: {
        fontSize: 35,
    },
    body: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        borderColor: 'black',
        height: 230,
        borderWidth: 1,
    },
    font1:{
        fontSize: 30,

    },
    font2:{
        fontSize: 30,

    },

})

