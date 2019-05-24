import React from 'react';
import {
  ActivityIndicator,
  AsyncStorage,
  StatusBar,
  View,
} from 'react-native';
import firebase from 'firebase';

import User from '../User';

export default class AuthLoadingScreen extends React.Component {
  constructor(props) {
    super(props);
    this._bootstrapAsync();
  }

  componentWillMount() {
    // Initialize Firebase
    var firebaseConfig = {
      apiKey: "AIzaSyDCQota6hXoEt3Vdkjj5sG1clfwVRP4M9k",
      authDomain: "this-or-no.firebaseapp.com",
      databaseURL: "https://this-or-no.firebaseio.com",
      projectId: "this-or-no",
      storageBucket: "this-or-no.appspot.com",
      messagingSenderId: "1086022157549",
      appId: "1:1086022157549:web:17830108357220d6"
    };
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
  }

  // Fetch the token from storage then navigate to our appropriate place
  _bootstrapAsync = async () => {
    User.phone = await AsyncStorage.getItem('userPhone');
    this.props.navigation.navigate(User.phone ? 'App' : 'Auth');
  };

  // Render any loading content that you like here
  render() {
    return (
      <View>
        <ActivityIndicator />
        <StatusBar barStyle="default" />
      </View>
    );
  }
}