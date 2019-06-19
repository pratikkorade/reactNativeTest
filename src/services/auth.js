import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, Button,Alert} from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';

class auth extends React.Component {

    constructor(props) {
        super(props);
        // this.state ={ isLoggedIn: false };
    }

    checkauth(){
        if(this.props.navigation.state.params.username == 'Admin'){
            if(this.props.navigation.state.params.password == '12345'){
                Alert.alert(
                    'Login',
                    'Login successfully',
                    [
                        {text: 'OK', onPress: () => this.props.navigation.navigate('Dashboard')},

                    ]
                );
                retrieveData = async () => {
                    try {
                        Username = await AsyncStorage.setItem('Username',this.props.navigation.state.params.username);
                        Password = await AsyncStorage.setItem('Password',this.props.navigation.state.params.password)
                        if (this.Username !== null && this.password !== null) {
                        }
                    } catch (error) {
                        console.log(error.message);
                    }
                };
                retrieveData()
            } else {
                Alert.alert(
                    'Login',
                    'Invalid Password',
                    [
                        {text: 'try again', onPress: () => this.props.navigation.navigate('Login')},
                    ],
                    {cancelable: false},
                );
            }
        } else {
            Alert.alert(
                'Login',
                'Invalid Username',
                [
                    {text: 'try again', onPress: () => this.props.navigation.navigate('Login')},
                ],
                {cancelable: false},
            );
        }
    }

    componentDidMount (){
        this.checkauth()
    }

    render() {
        return null;
    }
}

export default auth