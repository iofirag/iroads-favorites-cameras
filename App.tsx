import 'react-native-gesture-handler';
import React from 'react';
import { StyleSheet, Image, View, Text } from 'react-native';
// import MainComponent from './main.component';
import {NavigationContainer} from '@react-navigation/native';
import {AppStack} from './router/AppStack'
// import {createStackNavigator} from '@react-navigation/stack';

// const Stack = createStackNavigator();

export default function App() {
  return (    
    <AppStack />
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
});
