import * as React from 'react';
import {View, Text, Platform, FlatList, StyleSheet, Button, Alert, ScrollView}
    from 'react-native';
import firebase from 'firebase';
import { YellowBox } from 'react-native';
import Heaaader from "./Heaaader";



const styles = StyleSheet.create({
    container: { flex: 1, justifyContent: 'flex-start' },
    row: {
        margin: 5,
        padding: 5,
        flexDirection: 'row',
    },
    label: { width: 100, fontWeight: 'bold' },
    value: { flex: 1 },
    headerX: {
        height: 80,
        elevation: 15,
        shadowOffset: {
            height: 7,
            width: 1
        },
        shadowColor: "rgba(0,0,0,1)",
        shadowOpacity: 0.1,
        shadowRadius: 5
    }
});

export default class UserDetails extends React.Component {
    state = { Users: null };

    componentDidMount() {
        // Vi udlæser ID fra navgation parametre og loader bilen når

        const id = this.props.navigation.getParam('id');
        this.LoadUsers(id);
    }

    LoadUsers = id => {
        firebase
            .database()
            // ID fra funktionens argument sættes ind i stien vi læser fra
            .ref('/Users/'+id)
            .on('value', asds => {
                this.setState({ Users: asds.val() });
            });
    };

    handleEdit = () => {
        // Vi navigerer videre til EditCar skærmen og sender ID med
        const { navigation } = this.props;
        const id = navigation.getParam('id');
        navigation.navigate('EditUsers', { id });
    };

    confirmDelete = () => {
        if(Platform.OS ==='ios' || Platform.OS ==='android'){
            Alert.alert('Are you sure?', 'Do you want to delete the car?', [
                { text: 'Cancel', style: 'cancel' },
                // Vi bruger this.handleDelete som eventHandler til onPress
                { text: 'Delete', style: 'destructive', onPress:
                    this.handleDelete },
            ]);
        } else {
            if(confirm('Er du sikker på du vil slette denne aktivitet?')){
                this.handleDelete()
            }
        }
    };

    // Vi spørger brugeren om han er sikker

    // Vi sletter den aktuelle user
    handleDelete = () => {
        const { navigation } = this.props;
        const id = navigation.getParam('id');
        try {
            firebase
                .database()
                // Vi sætter bilens ID ind i stien
                .ref(`/Users/${id}`)
                // Og fjerner data fra den sti
                .remove();
            // Og går tilbage når det er udført
            navigation.goBack();
        } catch (error) {
            Alert.alert(error.message);
        }
    };

    render() {
        const { Users } = this.state;
        if (!Users) {
            return <Text>I'm sorry, no data :(</Text>;
        }
        return (
            <View style={styles.container}>
                <Heaaader navigation={this.props.navigation} title='View user'/>
                <Button title="Edit" onPress={this.handleEdit} />
                <Button title="Delete" onPress={this.confirmDelete} />
                <View style={styles.row}>
                    <Text style={styles.label}>Price</Text>
                    <Text style={styles.value}>{Users.price}</Text>
                </View>
                <View style={styles.row}>
                    <Text style={styles.label}>Activity</Text>
                    <Text style={styles.value}>{Users.activity}</Text>
                </View>
                <View style={styles.row}>
                    <Text style={styles.label}>Name</Text>
                    <Text style={styles.value}>{Users.name}</Text>
                </View>
                <View style={styles.row}>
                    <Text style={styles.label}>information</Text>
                    <Text style={styles.value}>{Users.information}</Text>
                </View>
            </View>
        );
    }
}
