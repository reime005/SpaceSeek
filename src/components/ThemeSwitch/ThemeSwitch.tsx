import React from 'react';
import * as RN from 'react-native';

import { useStore } from '../../hooks/useStore';

export const ThemeSwitch = () => {
  const { colorScheme, setColorScheme } = useStore();

  return (
    <RN.Switch
      value={colorScheme === 'dark'}
      //ios_backgroundColor={primaryColor}
      onValueChange={() =>
        setColorScheme(colorScheme === 'dark' ? 'light' : 'dark')
      }
    />
  );
};
