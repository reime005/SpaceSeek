import { useIsFocused, useRoute } from '@react-navigation/native';
import React from 'react';
import { useTheme } from 'styled-components';
import { BottomRoute } from '../../navigators/routes';
import { RocketIcon } from '../SVG/RocketIcon';
import { SearchIcon } from '../SVG/SearchIcon';
import { SettingsIcon } from '../SVG/SettingsIcon';

const ICON_FOCUSED_SCALED = 1.1;
const ICON_SIZE = 30;

export const NavBarIcon = () => {
  const route = useRoute();
  const isFocused = useIsFocused();
  const { focusedIconColor, unFocusedIconColor } = useTheme();

  const name = route.name as BottomRoute;

  const backgroundColor = isFocused ? focusedIconColor : unFocusedIconColor;

  switch (name) {
    case 'launches': {
      return (
        <RocketIcon
          fill={backgroundColor}
          width={ICON_SIZE}
          height={ICON_SIZE}
          scale={isFocused ? ICON_FOCUSED_SCALED : 1}
        />
      );
    }
    case 'search': {
      return (
        <SearchIcon
          color={backgroundColor}
          fill={'transparent'}
          width={ICON_SIZE}
          height={ICON_SIZE}
          scale={isFocused ? ICON_FOCUSED_SCALED : 1}
        />
      );
    }
    case 'settings': {
      return (
        <SettingsIcon
          fill={backgroundColor}
          width={ICON_SIZE}
          height={ICON_SIZE}
          scale={isFocused ? ICON_FOCUSED_SCALED : 1}
        />
      );
    }
    default:
      throw new Error('missing icon');
  }
};
