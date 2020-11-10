import { DefaultTheme } from 'styled-components/native';
import { BadgeType } from '../components/Badges/BadgeWrapper';

export type FontColor = 'regular' | 'subtle' | 'light' | 'primary';

declare module 'styled-components' {
  export interface DefaultTheme {
    backgroundColor: string;
    splashBackgroundColor: string;
    primaryColor: string;
    secondaryColor: string;
    searchBackgroundColor: string;
    focusedIconColor: string;
    unFocusedIconColor: string;
    mainFont: string;
    fontColors: { [index in FontColor]: string };
    badgeBackgroundColors: { [index in BadgeType]: string };
    badgeFontColors: { [index in BadgeType]: string };
  }
}

export const lightTheme: DefaultTheme = {
  backgroundColor: '#fff',
  splashBackgroundColor: '#21202e',
  primaryColor: '#e96232',
  focusedIconColor: '#e96232',
  unFocusedIconColor: '#cccccc',
  secondaryColor: '#666',
  searchBackgroundColor: 'rgb(252,252,252)',
  mainFont: '#090909',
  fontColors: {
    light: '#fff',
    primary: '#e96232',
    regular: '#090909',
    subtle: '#666',
  },
  badgeBackgroundColors: {
    wiki: '#e4e4e4',
    youtube: '#c93a2f',
    launch: '#dcf0f0',
  },
  badgeFontColors: {
    wiki: '#4c4c4c',
    youtube: '#fefcff',
    launch: '#090909'
  },
};

export const darkTheme: DefaultTheme = {
  backgroundColor: '#21202e',
  splashBackgroundColor: '#21202e',
  primaryColor: 'rgb(127, 90, 240)',
  focusedIconColor: '#ff884d',
  unFocusedIconColor: '#cccccc',
  secondaryColor: '#cacaca',
  searchBackgroundColor: '#707070',
  mainFont: '#fff',
  fontColors: {
    light: '#fff',
    primary: '#ff884d',
    regular: '#090909',
    subtle: '#666',
  },
  badgeBackgroundColors: {
    wiki: '#e4e4e4',
    youtube: '#c93a2f',
    launch: '#dcf0f0',
  },
  badgeFontColors: {
    wiki: '#4c4c4c',
    youtube: '#fefcff',
    launch: '#090909'
  },
};
