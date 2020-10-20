import * as React from 'react';
import {
    View,
    Text,
    StyleSheet,
    TextInput,
    Button,
    Alert,
    ScrollView,
    SafeAreaView,
} from 'react-native';
import firebase from 'firebase';
import Heaaader from "./Heaaader";
import Icon from 'react-native-vector-icons/FontAwesome';
import { Input } from 'react-native-elements';

const styles = StyleSheet.create({
    container: { flex: 1, justifyContent: 'center' },
    row: {
        flexDirection: 'row',
        height: 30,
        margin: 10,
    },
    label: {
        fontWeight: 'bold',
        width: 100 },
    input: {

        width: 150,
        paddingVertical: 2,
        borderRadius: 6,
    },
});

export default class AddUser extends React.Component {
    state = {
        name: '',
        price: '',
        activity: '',
        information: '',
    };

    handleNameChange = text => this.setState({ name: text });

    handlePriceChange = text => this.setState({ price: text });

    handleActivityChange = text => this.setState({ activity: text });

    handleInformationChange = text => this.setState({ information: text });

    handleSave = () => {
        const { name, price, activity, information } = this.state;
        try {
            const reference = firebase
                .database()
                .ref('/Users/')
                .push({ name: name, price: price, activity: activity, information: information });
            Alert.alert(`Saved`);
            this.setState({
                name: '',
                price: '',
                activity: '',
                information: '',
            });
        } catch (error) {
            Alert.alert(`Error: ${error.message}`);
        }
    };

    render() {
        const { name, price, activity, information } = this.state;
        return (

            <SafeAreaView style={styles.container}>
                <ScrollView>
                    <Heaaader navigation={this.props.navigation} title='Add user'/>
                    <View style={styles.row}>
                        <Text style={styles.label}>Name</Text>
                        <Input
                            value={name}
                            placeholder="Ole Nordmann"
                            leftIcon={{ type: 'font-awesome', name: 'icon' }}
                            style={styles.input}
                            onChangeText={this.handleNameChange}
                        />

                    </View>
                    <View style={styles.row}>
                        <Text style={styles.label}>Price</Text>
                        <Input
                            value={price}
                            placeholder="Ole Nordmann"
                            leftIcon={{ type: 'font-awesome', name: 'dollar' }}
                            style={styles.input}
                            onChangeText={this.handlePriceChange}
                        />
                    </View>
                    <View style={styles.row}>
                        <Text style={styles.label}>Activity</Text>
                        <Input
                            value={activity}
                            placeholder="F.eks Jeg er en proff fotballspiller"
                            leftIcon={{ type: 'font-awesome', name: 'info' }}
                            style={styles.input}
                            onChangeText={this.handleInformationChange}
                        />
                    </View>
                    <View style={styles.row}>
                        <Text style={styles.label}>Information</Text>
                        <Input
                            value={information}
                            placeholder="F.eks Fotball"
                            leftIcon={{ type: 'font-awesome', name: 'bullseye' }}
                            style={styles.input}
                            onChangeText={this.handleActivityChange}
                        />
                    </View>
                    <Button title="Add user" onPress={this.handleSave} />
                </ScrollView>
            </SafeAreaView>
        );
    }
}
