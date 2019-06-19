import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View,Button} from 'react-native';
// import {AsyncStorage} from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';

class dashboard extends React.Component {
  static navigationOptions = {
    title: 'Dashboard',
  };
  constructor() {
    super();
    this.state={};
    // this.retrieveData =this.retrieveData.bind(this);
  }
  Username = "";
  password = "";
  retrieveData = async () => {
    try {
      Username = await AsyncStorage.getItem('Username');
      Password = await AsyncStorage.getItem('Password')
      if (this.Username !== null && this.password !== null) {
        // We have data!!
        this.setState({username :Username})
        this.setState({password :Password})
        console.log(this.state.username,this.state.password);
      }
    } catch (error) {
      // Error retrieving data
      console.log(error.message);
    }
  };
  componentDidMount (){
    this.retrieveData()
  }
  render() {
    return (
      <View>
        <Text>dashboard</Text>
        <Text>Hi {this.state.username}</Text>
      </View>
    );
  }
}

export default dashboard