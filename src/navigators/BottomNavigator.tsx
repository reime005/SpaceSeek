import * as React from 'react';
import { Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { HomeScreen } from '../screens/HomeScreen';

const Tab = createBottomTabNavigator();

export const BottomNavigator = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="Settings" component={HomeScreen} />
    </Tab.Navigator>
  );
};
