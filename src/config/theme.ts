import { DefaultTheme } from 'styled-components/native';

export type FontColor = 'regular' | 'subtle' | 'light' | 'primary';

declare module 'styled-components' {
  export interface DefaultTheme {
    primaryColor: string;
    secondaryColor: string;
    searchBackgroundColor: string;
    focusedIconColor: string;
    unFocusedIconColor: string;
    mainFont: string;
    fontColors: {[index in FontColor]: string}
  }
}

export const lightTheme: DefaultTheme = {
  primaryColor: 'rgb(127, 90, 240)',
  focusedIconColor: '#ff884d',
  unFocusedIconColor: '#cccccc',
  secondaryColor: '#666',
  searchBackgroundColor: '#fafafa',
  mainFont: '#090909',
  fontColors: {
    light: '#fff',
    primary: '#ff884d',
    regular: '#090909',
    subtle: '#666'
  }
};

export const darkTheme: DefaultTheme = {
  primaryColor: 'rgb(127, 90, 240)',
  focusedIconColor: '#ff884d',
  unFocusedIconColor: '#cccccc',
  secondaryColor: '#cacaca',
  searchBackgroundColor: '#707070',
  mainFont: '#090909',
  fontColors: {
    light: '#fff',
    primary: '#ff884d',
    regular: '#090909',
    subtle: '#666'
  }
};
