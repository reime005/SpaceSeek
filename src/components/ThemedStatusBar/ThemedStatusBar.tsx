import React from 'react';
import { StatusBar, StatusBarProps } from 'react-native';
import { useStore } from '../../hooks/useStore';

export const ThemedStatusBar = (props: StatusBarProps) => {
  const colorScheme = useStore((state) => state.colorScheme);

  return (
    <StatusBar
      {...props}
      barStyle={colorScheme === 'dark' ? 'light-content' : props.barStyle}
    />
  );
};
