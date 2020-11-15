import React from 'react';
import * as RN from 'react-native';
import { Pad } from '../../service/service';
import { Title } from '../Basic/Basic';
import { InfoIcon } from '../SVG/InfoIcon';
import { LocationIcon } from '../SVG/LocationIcon';
import * as S from './Search.styled';

interface Props {
  item: Pad;
  onPress?: () => void;
}

export const SearchItem = (props: Props) => {
  const openInfoLink = () => {
    const url = props.item.wiki_url || props.item.map_url;

    if (typeof url === 'string' && url.length) {
      RN.Linking.openURL(url);
    }
  };

  return (
    <S.StyledItemWrapper activeOpacity={0.9} {...props}>
      <RN.View style={{ flexDirection: 'row', flex: 1 }}>
        <RN.View style={{ flex: 1 }}>
          <Title fontType="bold" size="l" numberOfLines={1}>
            {props.item.name || 'Launch Pad'}
          </Title>

          <Title
            fontType="regular"
            size="m"
            fontColor="subtle"
            numberOfLines={1}>
            {props.item.location.name || 'Location'}
          </Title>

          <Title
            fontType="regular"
            size="m"
            fontColor="subtle"
            numberOfLines={1}>
            Launches: {props.item.total_launch_count || '1'}
          </Title>
        </RN.View>

        <RN.View
          style={{
            marginLeft: 16,
            alignItems: 'flex-start',
            justifyContent: 'flex-end',
            flexDirection: 'row',
          }}>
          <RN.TouchableOpacity
            activeOpacity={0.9}
            style={{ marginRight: 8 }}
            onPress={openInfoLink}>
            <InfoIcon />
          </RN.TouchableOpacity>

          <LocationIcon />
        </RN.View>
      </RN.View>
    </S.StyledItemWrapper>
  );
};
