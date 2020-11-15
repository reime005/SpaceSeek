import { DefaultTheme } from 'styled-components/native';
import { BadgeType } from '../components/Badges/BadgeWrapper';

export type FontColor = 'regular' | 'subtle' | 'light' | 'primary';

declare module 'styled-components' {
  export interface DefaultTheme {
    headerBackgroundColor: string;
    backgroundColor: string;
    backgroundColorLight: string;
    successColor: string;
    failColor: string;
    listItemBackgroundColor: string;
    placeHolderFontColor: string;
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
  headerBackgroundColor: '#fff',
  backgroundColor: '#fff',
  backgroundColorLight: 'rgb(250, 250, 250)',
  successColor: '#008214',
  failColor: '#990000',
  splashBackgroundColor: '#21202e',
  primaryColor: '#e96232',
  focusedIconColor: '#e96232',
  unFocusedIconColor: '#cccccc',
  placeHolderFontColor: '#cccccc',
  secondaryColor: '#666',
  listItemBackgroundColor: 'rgb(252,252,252)',
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
    launch: '#090909',
  },
};

export const darkTheme: DefaultTheme = {
  headerBackgroundColor: '#0d0d0d',
  backgroundColor: '#0d0d0d',
  backgroundColorLight: '#8f8f8f',
  successColor: '#008214',
  failColor: '#990000',
  splashBackgroundColor: '#21202e',
  primaryColor: '#e96232',
  focusedIconColor: '#e96232',
  unFocusedIconColor: '#cccccc',
  placeHolderFontColor: '#fff',
  secondaryColor: '#cacaca',
  listItemBackgroundColor: '#1f1f1f',
  searchBackgroundColor: '#999999',
  mainFont: '#fff',
  fontColors: {
    light: '#fff',
    primary: '#e96232',
    regular: '#fff',
    subtle: '#fafafa',
  },
  badgeBackgroundColors: {
    wiki: '#e4e4e4',
    youtube: '#c93a2f',
    launch: '#dcf0f0',
  },
  badgeFontColors: {
    wiki: '#4c4c4c',
    youtube: '#fefcff',
    launch: '#090909',
  },
};
