import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { StyleSheet, View } from 'react-native';
import { spaceRoutes } from '../../navigators/routes';
import { LaunchSerializerCommon } from '../../service/service';
import { RegularText } from '../Basic/Basic';
import { ImageLoadingWrapper } from '../Basic/ImageLoadingWrapper';
import { RocketIcon } from '../SVG/RocketIcon';

import * as S from './SpaceList.styled';

export const SpaceListItem = (item: LaunchSerializerCommon) => {
  const nav = useNavigation();

  return (
    <S.StyledWrapper
      style={[styles.shadow]}
      activeOpacity={0.9}
      onPress={() => {
        nav.navigate(spaceRoutes.details, { id: item.id });
      }}>
      <ImageLoadingWrapper
        style={styles.image}
        source={{ uri: item.image || '' }}
        resizeMode="cover"
      />

      <S.StyledTextBox>
        <View
          style={{
            position: 'absolute',
            right: 6,
            top: -15,
            padding: 6,
            backgroundColor: 'white',
            elevation: 2,
            shadowRadius: 2,
            shadowOffset: { height: 0, width: 0 },
            shadowOpacity: 0.2,
            zIndex: 2,
            borderRadius: 4,
          }}>
          <RocketIcon width={18} height={18} />
        </View>

        <S.StyledTitle size="l" numberOfLines={1}>
          {item.name || 'No Description'}
        </S.StyledTitle>

        <RegularText numberOfLines={2} size="m">
          {item.mission?.description || 'No description'}
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
  image: {
    backgroundColor: '#ccc',
    width: '100%',
    height: '100%',
    flex: 2,
    borderTopLeftRadius: 16,
    borderTopRightRadius: 16,
  },
});
