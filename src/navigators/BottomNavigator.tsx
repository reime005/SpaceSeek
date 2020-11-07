import * as React from 'react';
import {
  BottomTabBarOptions,
  BottomTabNavigationOptions,
  createBottomTabNavigator,
} from '@react-navigation/bottom-tabs';
import { MapScreen } from '../screens/MapScreen';
import { bottomRoutes } from './routes';
import { NavBarIcon } from '../components/NavBarIcon/NavBarIcon';
import { LaunchStackNavigator } from './LaunchStackNavigator';
import { NavBarLabel } from '../components/NavBarLabel/NavBarLabel';
import { Platform } from 'react-native';

const Tab = createBottomTabNavigator();

export const BottomNavigator = () => {
  return (
    <Tab.Navigator screenOptions={screenOptions} tabBarOptions={tabBarOptions} initialRouteName={bottomRoutes.search}>
      {/* <Tab.Screen name={bottomRoutes.home} component={SpaceStackNavigator} /> */}
      <Tab.Screen name={bottomRoutes.launches} component={LaunchStackNavigator} />
      <Tab.Screen name={bottomRoutes.search} component={MapScreen} />
      {/* <Tab.Screen name={bottomRoutes.settings} component={SettingsScreen} /> */}
    </Tab.Navigator>
  );
};

const screenOptions: BottomTabNavigationOptions = {
  tabBarIcon: NavBarIcon,
  tabBarLabel: NavBarLabel
};

const tabBarOptions: BottomTabBarOptions = {
  activeTintColor: 'tomato',
  inactiveTintColor: 'gray',
  style: {
    height: Platform.OS === 'ios' ? 90 : 60,
  },
  showLabel: true,
};
