import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View,Button,TextInput} from 'react-native';

class login extends React.Component {

  constructor() {
    super();
    this.state={};
    this.showdata =this.showdata.bind(this);
  }
  static navigationOptions = {
    title: 'Login',
  };
  showdata(){
    // const username = this.username._lastNativeText
    // const password = this.password._lastNativeText

    console.log(this.state.username,this.state.password);
  }
  render() {
    return (
      // <View></View>
      <View style={styles.container}>
        <Text style={styles.welcome}>Welcome to Login!</Text>
        {/* <Text>User Name</Text> */}
        <TextInput onChangeText = {text =>this.setState({username :text})} 
          placeholder ='Username'
          // ref ={input => this.username = input} 
        />
        {/* <Text>Password</Text> */}
        <TextInput placeholder ='Password' onChangeText = {text =>this.setState({password :text})} 
          secureTextEntry={true}
          // ref ={input => this.password = input} 
        />
        <View style={{margin:10, alignItems: 'center',justifyContent: 'center'}} />
        <Button title={"submit"} onPress={() => this.props.navigation.navigate('Auth',{username:this.state.username,password:this.state.password})}
        />

      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    // alignItems: 'center',
    backgroundColor: '#F5FCFF',
    // margin: 10,
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    marginBottom: 20,
  }
});

export default login
