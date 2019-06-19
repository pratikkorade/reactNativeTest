// /**
//  * Sample React Native App
//  * https://github.com/facebook/react-native
//  *
//  * @format
//  * @flow
//  */

import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View,TextInput,Button} from 'react-native';
// import { Provider } from 'react-redux';
import { AppNavigator } from './src/navigators/AppNavigator';
export default class App extends Component {
  render() {
    return (
         <AppNavigator />
    );
  }
}

// import { createStackNavigator, createDrawerNavigator, DrawerActions, HeaderBackButton } from 'react-navigation'
// import login from './src/components/login'
// import dashboard from './src/components/dashboard'
// import auth from './src/services/auth'

// export default createStackNavigator({
//   Login : {screen: login},
//   Dashboard : {screen : dashboard},
//   Auth :{screen: auth}
// }, {
//   // headerMode: 'none',
//     initialRouteName: 'Login',
//     // navigationOptions:{
//     //     gesturesEnabled: false,
//     // }
// })