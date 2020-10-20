import { StatusBar } from 'expo-status-bar';
import React from 'react'
import {createDrawerNavigator} from "react-navigation-drawer";
import { StyleSheet,ScrollView, Text, View,TouchableOpacity } from 'react-native';
import {Platform} from "react-native-web";
import ProfileScreen from "./components/ProfileScreen";
import Categories from "./components/Categories";
import HomeScreen from "./components/HomeScreen";
import AboutUs from "./components/AboutUs";
import {createAppContainer} from "react-navigation";
import firebase from 'firebase';
import Adduser from "./components/Adduser";
import Users from "./components/UserDetails";
import UserListItem from "./components/UserListItem";
import UserList from "./components/UserList";


const MyDrawerNavigator = createDrawerNavigator({
  Home: {
    screen: HomeScreen,
  },
  Categories:{
    screen: Categories
  },
  Profile:{
    screen: ProfileScreen
  },
  About:{
  screen: AboutUs
},
  Adduser:{
    screen: Adduser
  },
  UserList:{
    screen:UserList
  },

})

const AppNav = createAppContainer(MyDrawerNavigator)

export default class App extends React.Component {
  componentWillMount() {
    const firebaseConfig = {
      apiKey: "AIzaSyDHz2amY7HByQGZbnahQGr2HAHb39pOF-M",
      authDomain: "realtimedatabase69-de706.firebaseapp.com",
      databaseURL: "https://realtimedatabase69-de706.firebaseio.com",
      projectId: "realtimedatabase69-de706",
      storageBucket: "realtimedatabase69-de706.appspot.com",
      messagingSenderId: "466588325174",
      appId: "1:466588325174:web:cf4628df00c18308140f97",
      measurementId: "G-FS1SN7VYG4"

    };
    // I koden under blir det sjekket at det ikke allerede er intializert en firebase database
    if (firebase.apps.length === 0) {
      firebase.initializeApp(firebaseConfig);
    }
  }
  render() {
    return (
        <AppNav/>
    );
  }
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
