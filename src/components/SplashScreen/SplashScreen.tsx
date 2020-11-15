import React from 'react';
import { Title } from '../Basic/Basic';
import { Spinner } from '../SpaceList/Spinner';
import { RocketIcon } from '../SVG/RocketIcon';
import * as S from './SplashScreen.styled';

export const SplashScreen = () => {
  return (
    <S.StyledSplashScreen>
      <RocketIcon width={100} height={100} fill="white" />

      <Title style={{ marginVertical: 24, color: 'white' }} size="super">
        Space Seek
      </Title>

      <Spinner
        style={{ marginLeft: 24 }}
        fill="white"
        width={250}
        height={62}
      />
    </S.StyledSplashScreen>
  );
};
