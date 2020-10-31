import styled from 'styled-components/native';
import * as ReactNative from 'react-native';
import { FontColor } from '../../config/theme';

export type Font = 'RobotoCondensed-Regular';

type FontSize = 'xs' | 's' | 'm' | 'l' | 'xl' | 'super';

export const fontSizes: { [index in FontSize]: string } = {
  xs: '10px',
  s: '12px',
  m: '14px',
  l: '16px',
  xl: '18px',
  super: '32px',
};

type FontType = 'regular' | 'bold' | 'italic';

const fontFamilies: { [index in FontType]: string } = {
  regular: 'RobotoCondensed-Regular',
  bold: 'RobotoCondensed-Bold',
  italic: 'RobotoCondensed-Italic',
};

export interface IStyledCustomText {
  size: FontSize;
  fontType: FontType;
  fontColor: FontColor;
}

export const StyledCustomText = styled.Text<IStyledCustomText>`
  color: ${(props) => props.theme.fontColors[props.fontColor]};
  font-size: ${(props) => fontSizes[props.size]};
  font-family: ${(props) => fontFamilies[props.fontType]};
`;

export const BaseScroll = styled.ScrollView`
  flex: 1;
  width: 100%;
  height: 100%;
`;

export const BasePage = styled(ReactNative.Animated.View)`
  flex: 1;
  width: 100%;
  padding: 16px;
  padding-bottom: 0;
`;
