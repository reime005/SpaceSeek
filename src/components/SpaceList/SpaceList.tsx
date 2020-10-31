import React from 'react';
import { ActivityIndicator, FlatList, View } from 'react-native';
import { LaunchSerializerCommon } from '../../service/service';

import * as S from './SpaceList.styled';
import { SpaceListItem } from './SpaceListItem';

interface Props {
  onEndReached: () => void;
  data: LaunchSerializerCommon[] | null;
}

export const SpaceList = (props: Props) => {
  return (
    <FlatList
      onEndReachedThreshold={0.5}
      // scrollEventThrottle={16}
      onEndReached={props.onEndReached}
      style={{ flex: 1 }}
      data={props.data}
      showsVerticalScrollIndicator={false}
      keyExtractor={(item) => item.id || '1'}
      ListEmptyComponent={() => (
        <View
          style={{
            flex: 1,
            height: '100%',
            alignItems: 'center',
            justifyContent: 'center',
            marginTop: 40,
          }}>
          <ActivityIndicator color="red" />
        </View>
      )}
      renderItem={(item) => <SpaceListItem {...item.item} />}
    />
  );
};
