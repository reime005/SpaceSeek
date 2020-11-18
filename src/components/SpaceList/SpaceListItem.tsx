import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { StyleSheet, TouchableOpacity, View } from 'react-native';
import { useTheme } from 'styled-components';
import { spaceRoutes } from '../../navigators/routes';
import { LaunchSerializerCommon } from '../../service/service';
import { RegularText, Title } from '../Basic/Basic';
import { ImageLoadingWrapper } from '../Basic/ImageLoadingWrapper';
import { RocketIcon } from '../SVG/RocketIcon';

export const SpaceListItem = (item: LaunchSerializerCommon) => {
  const nav = useNavigation();
  const {
    listItemBackgroundColor,
    searchBackgroundColor,
    fontColors,
  } = useTheme();

  return (
    <TouchableOpacity
      activeOpacity={0.9}
      onPress={() => {
        nav.navigate(spaceRoutes.details, { id: item.id });
      }}
      style={[styles.wrapper, { backgroundColor: listItemBackgroundColor }]}>
      <ImageLoadingWrapper
        style={styles.image}
        source={{ uri: item.image || '' }}
        resizeMode="cover"
      />

      <View style={styles.textWrapper}>
        <View style={[styles.icon, { backgroundColor: searchBackgroundColor }]}>
          <RocketIcon width={18} height={18} fill={fontColors.regular} />
        </View>

        <Title style={styles.title} size="l" numberOfLines={1}>
          {item.name || 'No Description'}
        </Title>

        <RegularText numberOfLines={2} size="m">
          {item.mission?.description || 'No description'}
        </RegularText>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    shadowOffset: { height: 0, width: 0 },
    shadowRadius: 4,
    shadowOpacity: 0.2,
    elevation: 4,
    flex: 1,
    height: 255,
    alignItems: 'flex-start',
    justifyContent: 'center',
    marginVertical: 6,
    marginHorizontal: 12,
    borderRadius: 16,
  },
  textWrapper: {
    flex: 1,
    height: '100%',
    width: '100%',
    padding: 16,
  },
  image: {
    backgroundColor: '#ccc',
    width: '100%',
    height: 150,
    borderTopLeftRadius: 16,
    borderTopRightRadius: 16,
  },
  icon: {
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
  },
  title: {
    paddingRight: 24,
    paddingBottom: 6,
  },
});
