import * as React from 'react';
import {
  BottomTabBarOptions,
  BottomTabNavigationOptions,
  createBottomTabNavigator,
} from '@react-navigation/bottom-tabs';
import { HomeScreen } from '../screens/HomeScreen';
import { SettingsScreen } from '../screens/SettingsScreen';
import { bottomRoutes } from './routes';
import { NavBarIcon } from '../components/NavBarIcon/NavBarIcon';
import { SpaceStackNavigator } from './SpaceStackNavigator';

const Tab = createBottomTabNavigator();

export const BottomNavigator = () => {
  return (
    <Tab.Navigator screenOptions={screenOptions} tabBarOptions={tabBarOptions} initialRouteName={bottomRoutes.settings}>
      <Tab.Screen name={bottomRoutes.home} component={SpaceStackNavigator} />
      <Tab.Screen name={bottomRoutes.settings} component={SettingsScreen} />
    </Tab.Navigator>
  );
};

const screenOptions: BottomTabNavigationOptions = {
  tabBarIcon: NavBarIcon,
};

const tabBarOptions: BottomTabBarOptions = {
  activeTintColor: 'tomato',
  inactiveTintColor: 'gray',
  showLabel: false,
  style: {},
};
