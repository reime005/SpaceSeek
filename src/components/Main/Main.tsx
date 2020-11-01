import * as React from 'react';
import { useColorScheme, View } from 'react-native';
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
          <View style={{ flex: 1 }}>
            <BottomNavigator />
          </View>
        </SafeAreaProvider>
      </ThemeProvider>
    </NavigationContainer>
  );
};
