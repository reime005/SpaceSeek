/**
 * @format
 */

import 'react-native';
import React from 'react';

import 'jest-styled-components/native';

import renderer from 'react-test-renderer';

import { RegularText, Title, SubText } from '../src/components/Basic/Basic';

import {
  BasePage,
  StyledBaseScroll,
  IconWrapper,
} from '../src/components/Basic/Basic.styled';

import { darkTheme, lightTheme } from '../src/config/theme';

it('Regular Text renders correctly', async () => {
  const tree = renderer
    .create(<RegularText theme={darkTheme}>TEST</RegularText>)
    .toJSON();
  expect(tree).toMatchSnapshot();
  expect(tree).toHaveStyleRule('color', darkTheme.fontColors.regular);
  expect(tree).toHaveStyleRule('fontSize', 14);
});

it('Title renders correctly', async () => {
  const tree = renderer.create(<Title theme={lightTheme}>TEST</Title>).toJSON();
  expect(tree).toMatchSnapshot();
  expect(tree).toHaveStyleRule('color', lightTheme.fontColors.regular);
  expect(tree).toHaveStyleRule('fontSize', 16);
});

it('SubText renders correctly', async () => {
  const tree = renderer
    .create(<SubText theme={lightTheme}>TEST</SubText>)
    .toJSON();
  expect(tree).toMatchSnapshot();
  expect(tree).toHaveStyleRule('color', lightTheme.fontColors.subtle);
  expect(tree).toHaveStyleRule('fontSize', 12);
});

it('BasePage renders correctly', async () => {
  const tree = renderer.create(<BasePage theme={lightTheme} />).toJSON();
  expect(tree).toMatchSnapshot();
});

it('StyledBaseScroll renders correctly', async () => {
  const tree = renderer
    .create(<StyledBaseScroll theme={lightTheme} />)
    .toJSON();
  expect(tree).toMatchSnapshot();
});

it('IconWrapper renders correctly', async () => {
  const tree = renderer.create(<IconWrapper theme={lightTheme} />).toJSON();
  expect(tree).toMatchSnapshot();
});
