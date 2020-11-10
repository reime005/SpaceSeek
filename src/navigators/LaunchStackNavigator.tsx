import * as React from 'react';
import {
  createStackNavigator,
  StackNavigationOptions,
} from '@react-navigation/stack';
import { LaunchScreen } from '../screens/LaunchScreen';
import { bottomRoutes, spaceRoutes } from './routes';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { SearchBar } from '../components/SearchBar/SearchBar';
import { LaunchDetailsScreen } from '../screens/LaunchDetailsScreen';

const Stack = createStackNavigator();

export const LaunchStackNavigator = () => {
  const { top } = useSafeAreaInsets();

  return (
    <Stack.Navigator screenOptions={screenOptions} headerMode={'screen'} initialRouteName={spaceRoutes.details}>
      <Stack.Screen
        name={bottomRoutes.launches}
        component={LaunchScreen}
        options={{
          header: SearchBar,
        }}
      />
      <Stack.Screen
        options={{
          headerBackTitleVisible: false,
          headerTintColor: 'white',
          headerStatusBarHeight: top || 25,
          headerTransparent: true,
          headerShown: true,
        }}
        name={spaceRoutes.details}
        component={LaunchDetailsScreen}
      />
    </Stack.Navigator>
  );
};

const screenOptions: StackNavigationOptions = {
  animationEnabled: true,
  headerBackTitleVisible: false,
  headerTitle: '',
};
