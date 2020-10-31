import * as React from 'react';
import { useColorScheme } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { SafeAreaProvider } from 'react-native-safe-area-view';
import { NavigationContainer } from '@react-navigation/native';
import { ThemeProvider } from 'styled-components';
import Bugsnag from '@bugsnag/react-native';
import BugsnagPluginReactNavigation from '@bugsnag/plugin-react-navigation'

import '../../config/i18n';
import { BottomNavigator } from '../../navigators/BottomNavigator';
import { darkTheme, lightTheme } from '../../config/theme';

Bugsnag.start({
  plugins: [new BugsnagPluginReactNavigation()]
});


const plugin = Bugsnag.getPlugin('reactNavigation');

if (!plugin) {
  throw new Error("Error in Bugsnag installation");
}

const createNavigationContainer = plugin.createNavigationContainer;
const BugsnagNavigationContainer = createNavigationContainer(NavigationContainer)

export const Main = () => {
  const colorScheme = useColorScheme();

  return (
    <BugsnagNavigationContainer>
      <ThemeProvider theme={colorScheme === 'dark' ? darkTheme : lightTheme}>
        <SafeAreaProvider>
          <SafeAreaView style={{ flex: 1 }}>
            <BottomNavigator />
          </SafeAreaView>
        </SafeAreaProvider>
      </ThemeProvider>
    </BugsnagNavigationContainer>
  );
};
