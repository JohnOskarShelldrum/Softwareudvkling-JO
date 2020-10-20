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
        borderWidth: 1,
        flex: 1,
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
                .ref('/Trainers/')
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
                        <TextInput
                            value={name}
                            onChangeText={this.handleNameChange}
                            style={styles.input}
                        />
                    </View>
                    <View style={styles.row}>
                        <Text style={styles.label}>Price</Text>
                        <TextInput
                            value={price}
                            onChangeText={this.handlePriceChange}
                            style={styles.input}
                        />
                    </View>
                    <View style={styles.row}>
                        <Text style={styles.label}>Activity</Text>
                        <TextInput
                            value={activity}
                            onChangeText={this.handleActivityChange}
                            style={styles.input}
                        />
                    </View>
                    <View style={styles.row}>
                        <Text style={styles.label}>Information</Text>
                        <TextInput
                            value={information}
                            onChangeText={this.handleInformationChange}
                            style={styles.input}
                        />
                    </View>
                    <Button title="Add user" onPress={this.handleSave} />
                </ScrollView>
            </SafeAreaView>
        );
    }
}
