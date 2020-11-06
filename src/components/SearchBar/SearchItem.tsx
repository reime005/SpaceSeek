import React from 'react';
import * as RN from 'react-native';
import { Pad } from '../../service/service';
import { Title } from '../Basic/Basic';
import { ClockIcon } from '../SVG/ClockIcon';
import { CrossIcon } from '../SVG/CrossIcon';
import * as S from './Search.styled';

interface Props {
  item: Pad;
  onPress?: () => void;
}

export const SearchItem = (props: Props) => {
  return (
    <S.StyledItemWrapper activeOpacity={0.9} {...props}>
      <Title
        fontType="regular"
        size="l"
        numberOfLines={1}
       >
        {props.item.name || 'Launch Pad'}
      </Title>

      <Title
        fontType="regular"
        size="m"
        fontColor="subtle"
        numberOfLines={1}
       >
        {props.item.location.name || 'Location'}
      </Title>

      <Title
        fontType="regular"
        size="m"
        fontColor="subtle"
        numberOfLines={1}
       >
        Launches: {props.item.total_launch_count || '1'}
      </Title>
    </S.StyledItemWrapper>
  );
};
