import React from 'react';
import { ActivityIndicator } from 'react-native';
import * as S from './SplashScreen.styled';

export const SplashScreen = () => {
  return (
    <S.StyledSplashScreen>
      <ActivityIndicator color="white" size="large" />
    </S.StyledSplashScreen>
  );
};
