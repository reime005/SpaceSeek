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
    <S.Row activeOpacity={0.9} {...props}>
      <ClockIcon width={20} height={20} />

      <Title
        fontType="regular"
        size="m"
        numberOfLines={1}
        style={{ paddingLeft: 12, flex: 1 }}>
        {props.text || ''}
      </Title>

      <RN.TouchableOpacity onPress={props.onRemoveItem} activeOpacity={0.9}>
        <CrossIcon width={20} height={20} />
      </RN.TouchableOpacity>
    </S.Row>
  );
};
