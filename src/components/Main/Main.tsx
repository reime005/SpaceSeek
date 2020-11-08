import * as React from 'react';
import { StatusBar, useColorScheme, View } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-view';
import { NavigationContainer } from '@react-navigation/native';
import { ThemeProvider } from 'styled-components';

import '../../config/i18n';
import { BottomNavigator } from '../../navigators/BottomNavigator';
import { darkTheme, lightTheme } from '../../config/theme';
import '../../service/initApi';
import { SplashScreen } from '../SplashScreen/SplashScreen';
import { initialWindowMetrics } from 'react-native-safe-area-context';
import { ErrorBoundary } from '../Error/ErrorBoundary';

const LOADING_TIME_MS = 1200;

export const Main = () => {
  const [loaded, setLoaded] = React.useState(false);
  const colorScheme = useColorScheme();

  React.useEffect(() => {
    const t = setTimeout(() => {
      setLoaded(true);
    }, LOADING_TIME_MS);

    return () => clearTimeout(t);
  }, []);

  if (!loaded) {
    return (
      <ErrorBoundary>
        <ThemeProvider theme={colorScheme === 'dark' ? darkTheme : lightTheme}>
          <SplashScreen />
        </ThemeProvider>
      </ErrorBoundary>
    );
  }

  return (
    <ErrorBoundary>
      <StatusBar barStyle="dark-content" />
      <NavigationContainer>
        <ThemeProvider theme={colorScheme === 'dark' ? darkTheme : lightTheme}>
          {/* get rid of 'white page flash' by passing initialMetrics */}
          <SafeAreaProvider initialMetrics={initialWindowMetrics}>
            <BottomNavigator />
          </SafeAreaProvider>
        </ThemeProvider>
      </NavigationContainer>
    </ErrorBoundary>
  );
};
