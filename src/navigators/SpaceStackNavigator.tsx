import * as React from 'react';
import {
  createStackNavigator,
  StackNavigationOptions,
} from '@react-navigation/stack';
import { HomeScreen } from '../screens/HomeScreen';
import { bottomRoutes, spaceRoutes } from './routes';
import { useRoute } from '@react-navigation/native';
import { SpaceDetailsScreen } from '../screens/SpaceDetailsScreen';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { SearchBar } from '../components/SearchBar/SearchBar';

const Stack = createStackNavigator();

export const SpaceStackNavigator = () => {
  const { top } = useSafeAreaInsets();

  return (
    <Stack.Navigator screenOptions={screenOptions} headerMode={'screen'}>
      <Stack.Screen
        name={bottomRoutes.home}
        component={HomeScreen}
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
        component={SpaceDetailsScreen}
      />
    </Stack.Navigator>
  );
};

const screenOptions: StackNavigationOptions = {
  animationEnabled: true,
  headerBackTitleVisible: false,
  headerTitle: '',
};
