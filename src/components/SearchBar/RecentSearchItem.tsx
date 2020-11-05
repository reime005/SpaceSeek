import React from 'react';
import * as RN from 'react-native';
import { Title } from '../Basic/Basic';
import { ClockIcon } from '../SVG/ClockIcon';
import { CrossIcon } from '../SVG/CrossIcon';
import * as S from './Search.styled';

interface Props {
  text: string;
  onRemoveItem?: () => void;
  onPress?: () => void;
}

export const RecentSearchItem = (props: Props) => {
  return (
    <S.Row {...props}>
      <ClockIcon />

      <Title fontType="italic" numberOfLines={1} style={{ paddingLeft: 10, flex: 1, textAlign: 'center' }}>
        {props.text || ""}
      </Title>

      <CrossIcon />
    </S.Row>
  );
};
