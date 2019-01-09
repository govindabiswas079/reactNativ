/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, ScrollView, Image, TextInput,TouchableHighlight } from 'react-native';
import _ from 'lodash';

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
  android:
    'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

type Props = {};
export default class App extends Component<Props> {

  constructor(props) {
    super(props);
    this.state = { data: [] };
	}


  componentDidMount(){

    const self = this;
    fetch('http://extraview.herokuapp.com/api/people/')
      .then(res => res.json())
      .then(json => this.setState({ data: json }));
      
  }

  render() {
    console.log( "Here1" );
    if ( this.state.data )
      console.log( this.state.data );
    console.log( "Here2" );
    return (
      <ScrollView style={styles.container}>
        <Text style={styles.welcome}>Welcome to React Native !!</Text>
        <Text style={styles.instructions}>To get started, edit App.js</Text>
        <Text style={styles.instructions}>{instructions}</Text>
        {
          this.state.data && 
          this.state.data.map((person, index) => (
            <View key={index} style={styles.person}>
              <Text>Name: {person.name}</Text>
            </View>
          ))
        }
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    marginTop: 0,
    padding: 20,
	flex: 1,
    ...Platform.select({
    	ios: {
            backgroundColor: '#E9D8F7',
        },
        android: {
            backgroundColor: '#D9F2F7',
        },
    }),
  },
  title: {
    fontSize: 18,
    textAlign: 'center',
  },
  input: {
    backgroundColor: '#e4e4e4',
    height: 45,
    borderRadius: 3,
    padding: 5,
    marginTop: 12,
  },
  welcomeImage: {
    width: 100,
    height: 80,
    resizeMode: 'contain',
    marginTop: 15,
    marginLeft: 0,
    alignSelf: 'center',
  },
  button: {
    backgroundColor: '#ff9900',
    height: 45,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 12,
    borderRadius: 3,
  },
  buttonText: {
    color: 'white',
  },
  person: {
    marginTop: 12,
  },
  /*
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
  */
});
