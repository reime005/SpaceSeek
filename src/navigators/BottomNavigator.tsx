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
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { SettingsScreen } from '../screens/SettingsScreen';
import { useTheme } from 'styled-components';

const Tab = createBottomTabNavigator();

export const BottomNavigator = () => {
  const theme = useTheme();
  const insets = useSafeAreaInsets();

  return (
    <Tab.Navigator
      screenOptions={screenOptions}
      tabBarOptions={{
        ...tabBarOptions,
        tabStyle: {
          flexDirection: 'column',
          justifyContent: 'flex-end',
          backgroundColor: theme.headerBackgroundColor,
        },
        style: {
          backgroundColor: theme.headerBackgroundColor,
          height: 70 + insets.bottom,
          paddingTop: 6,
          paddingBottom: 8 + insets.bottom,
        },
      }}
      initialRouteName={bottomRoutes.launches}>
      {/* <Tab.Screen name={bottomRoutes.home} component={SpaceStackNavigator} /> */}
      <Tab.Screen
        options={{ tabBarTestID: 'launches-route-btn' }}
        name={bottomRoutes.launches}
        component={LaunchStackNavigator}
      />

      <Tab.Screen
        options={{ tabBarTestID: 'map-route-btn' }}
        name={bottomRoutes.search}
        component={MapScreen}
      />

      <Tab.Screen
        options={{ tabBarTestID: 'settings-route-btn' }}
        name={bottomRoutes.settings}
        component={SettingsScreen}
      />
    </Tab.Navigator>
  );
};

const screenOptions: BottomTabNavigationOptions = {
  tabBarIcon: NavBarIcon,
  tabBarLabel: NavBarLabel,
};

const tabBarOptions: BottomTabBarOptions = {};
