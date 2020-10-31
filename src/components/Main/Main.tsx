import * as React from 'react';
import { useColorScheme } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { SafeAreaProvider } from 'react-native-safe-area-view';
import { NavigationContainer } from '@react-navigation/native';
import { ThemeProvider } from 'styled-components';

import '../../config/i18n';
import { BottomNavigator } from '../../navigators/BottomNavigator';
import { darkTheme, lightTheme } from '../../config/theme';
import '../../service/initApi';
import { SplashScreen } from '../SplashScreen/SplashScreen';

export const Main = () => {
  const [loaded, setLoaded] = React.useState(false);
  const colorScheme = useColorScheme();

  React.useEffect(() => {
    const t = setTimeout(() => {
      setLoaded(true);
    }, 1000);

    return () => clearTimeout(t);
  }, []);

  if (!loaded) {
    return <SplashScreen />
  }

  return (
    <NavigationContainer>
      <ThemeProvider theme={colorScheme === 'dark' ? darkTheme : lightTheme}>
        <SafeAreaProvider>
          <SafeAreaView style={{ flex: 1 }}>
            <BottomNavigator />
          </SafeAreaView>
        </SafeAreaProvider>
      </ThemeProvider>
    </NavigationContainer>
  );
};
