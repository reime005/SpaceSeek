import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { StyleSheet, View } from 'react-native';
import FastImage from 'react-native-fast-image';
import { spaceRoutes } from '../../navigators/routes';
import { LaunchSerializerCommon } from '../../service/service';
import { RegularText, Title } from '../Basic/Basic';
import { HomeIcon } from '../SVG/HomeIcon';

import * as S from './SpaceList.styled';

export const SpaceListItem = (item: LaunchSerializerCommon) => {
  const nav = useNavigation();

  return (
    <S.StyledWrapper
      style={styles.shadow}
      activeOpacity={0.9}
      onPress={() => {
        nav.navigate(spaceRoutes.details, { id: item.id });
      }}>
      <S.StyledImage source={{ uri: item.image || '' }} resizeMode="cover" />
      <S.StyledTextBox>
        <View
          style={{
            position: 'absolute',
            right: 6,
            top: -15,
            padding: 4,
            backgroundColor: 'white',
            elevation: 2,
            shadowRadius: 2,
            shadowOffset: { height: 0, width: 0 },
            shadowOpacity: 0.2,
            zIndex: 2,
            borderRadius: 4,
          }}>
          <HomeIcon />
        </View>

        <S.StyledTitle size="l" numberOfLines={1}>
          {item.name || 'No Description'}
        </S.StyledTitle>

        <RegularText numberOfLines={2} size="m">
          {item.mission?.description || 'TODO'}
        </RegularText>
      </S.StyledTextBox>
    </S.StyledWrapper>
  );
};

const styles = StyleSheet.create({
  shadow: {
    shadowOffset: { height: 0, width: 0 },
    shadowRadius: 4,
    shadowOpacity: 0.2,
    elevation: 4,
  },
});

// 1) styled auslagern
// 2) header and search bar
// 3) category switch
// 4) font from logo
