/**
 * @format
 */

import 'react-native';
import React from 'react';

import 'jest-styled-components/native';

import renderer from 'react-test-renderer';

import { RegularText } from '../src/components/Basic/Basic';
import { darkTheme } from '../src/config/theme';

it('Base Text renders correctly', async () => {
  const tree = renderer
    .create(<RegularText theme={darkTheme}>TEST</RegularText>)
    .toJSON();
  expect(tree).toHaveStyleRule('color', '#fff');
  expect(tree).toHaveStyleRule('fontSize', 14);
});
