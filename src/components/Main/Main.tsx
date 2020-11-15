import * as React from 'react';
import { useColorScheme } from 'react-native';
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
import { useStore, ColorScheme } from '../../hooks/useStore';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { ThemedStatusBar } from '../ThemedStatusBar/ThemedStatusBar';

const LOADING_TIME_MS = 1200;

export const Main = () => {
  const [loaded, setLoaded] = React.useState(false);
  const rnScheme = useColorScheme();
  const colorScheme = useStore((state) => state.colorScheme);
  const setColorScheme = useStore((state) => state.setColorScheme);

  React.useEffect(() => {
    const t = setTimeout(() => {
      setLoaded(true);
    }, LOADING_TIME_MS);

    return () => clearTimeout(t);
  }, []);

  React.useEffect(() => {
    AsyncStorage.getItem('theme', (_, result) => {
      if (result === 'dark' || result === 'light') {
        setColorScheme(result);
      } else {
        let newColorScheme: ColorScheme = 'dark';

        if (rnScheme === 'light') {
          newColorScheme = 'light';
        }

        setColorScheme(newColorScheme);
      }
    });
  }, [rnScheme, setColorScheme]);

  if (!loaded) {
    return (
      <ErrorBoundary>
        <ThemeProvider theme={colorScheme === 'light' ? lightTheme : darkTheme}>
          <SplashScreen />
        </ThemeProvider>
      </ErrorBoundary>
    );
  }

  return (
    <ErrorBoundary>
      <ThemedStatusBar barStyle="dark-content" />

      <NavigationContainer>
        <ThemeProvider theme={colorScheme === 'light' ? lightTheme : darkTheme}>
          {/* get rid of 'white page flash' by passing initialMetrics */}
          <SafeAreaProvider initialMetrics={initialWindowMetrics}>
            <BottomNavigator />
          </SafeAreaProvider>
        </ThemeProvider>
      </NavigationContainer>
    </ErrorBoundary>
  );
};
