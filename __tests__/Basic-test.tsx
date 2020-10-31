/**
 * @format
 */

import 'react-native';
import React from 'react';

import 'jest-styled-components/native';

import renderer from 'react-test-renderer';

import { BaseText } from '../src/components/Basic/Basic.styled';

it('Base Text renders correctly', async () => {
  const tree = renderer
    .create(<BaseText theme={{ mainFont: 'grey' }} />)
    .toJSON();
  expect(tree).toHaveStyleRule('color', 'grey');
  expect(tree).toHaveStyleRule('fontSize', 14);
});
