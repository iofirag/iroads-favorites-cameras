import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import HomeComponent from '../components/home/home.component';
import ViewerComponent from '../components/viewer/viewer.component';
import { NavigationContainer } from '@react-navigation/native';

const Stack = createStackNavigator();

export function AppStack() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeComponent} options={{}}/>
        <Stack.Screen name="Viewer" component={ViewerComponent} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}