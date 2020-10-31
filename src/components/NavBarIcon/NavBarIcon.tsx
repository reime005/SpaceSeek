import { useIsFocused, useRoute } from '@react-navigation/native';
import React from 'react';
import { useTheme } from 'styled-components';
import { BottomRoute } from '../../navigators/routes';
import { HomeIcon } from '../SVG/HomeIcon';
import { SettingsIcon } from '../SVG/SettingsIcon';

const ICON_FOCUSED_SCALED = 1.2;

export const NavBarIcon = () => {
  const route = useRoute();
  const isFocused = useIsFocused();
  const { focusedIconColor, unFocusedIconColor } = useTheme();

  const name = route.name as BottomRoute;

  const backgroundColor = isFocused ? focusedIconColor : unFocusedIconColor;

  return (
    <>
      {name === 'home' && (
        <HomeIcon
          fill={backgroundColor}
          scale={isFocused ? ICON_FOCUSED_SCALED : 1}
        />
      )}

      {name === 'settings' && (
        <SettingsIcon
          fill={backgroundColor}
          scale={isFocused ? ICON_FOCUSED_SCALED : 1}
        />
      )}
    </>
  );
};
