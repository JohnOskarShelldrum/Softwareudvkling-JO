import * as React from 'react';
import { View, Text, FlatList, TouchableOpacity } from 'react-native';
import firebase from 'firebase';

import UserListItem from './UserListItem';
import Heaaader from "./Heaaader";

export default class UserList extends React.Component {
    state = {
        users: {},
    };

    componentDidMount() {
        firebase
            .database()
            .ref('/Users')
            .on('value', snapshot => {
                this.setState({ users: snapshot.val() });
            });
    }

    handleSelectUser = id => {
        console.log("ID",id)
        this.props.navigation.navigate('UserDetails', { id } );
    };

    render() {
        const { users } = this.state;
        if (!users) {
            return null
        }
        const userArray = Object.values(users);
        const userKeys = Object.keys(users);
        return (
            <View>
                <Heaaader navigation={this.props.navigation} title='User list'/>
                <FlatList
                    data={userArray}
                    keyExtractor={(item, index) => userKeys[index]}
                    renderItem={({ item, index }) => (
                        <UserListItem
                            user={item}
                            id={userKeys[index]}
                            onSelect={this.handleSelectUser}
                        />
                    )}
                />
            </View>
        );
    }
}
