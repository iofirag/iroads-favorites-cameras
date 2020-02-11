import 'react-native-gesture-handler';
import React from 'react';
import { StyleSheet } from 'react-native';
import {AppStack} from './router/AppStack'

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
