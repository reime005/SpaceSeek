import React, { ComponentType } from 'react';
import * as RN from 'react-native';
import { LaunchSerializerCommon } from '../../service/service';

import { SpaceListItem } from './SpaceListItem';

interface Props {
  onEndReached: () => void;
  data: LaunchSerializerCommon[] | null;
}

export const SpaceList = (props: Props) => {
  return (
    <RN.FlatList
      onEndReachedThreshold={0.5}
      // scrollEventThrottle={16}
      onEndReached={props.onEndReached}
      style={{ flex: 1 }}
      data={props.data}
      showsVerticalScrollIndicator={false}
      keyExtractor={(item) => item.id || '1'}
      ListEmptyComponent={() => (
        <RN.View
          style={{
            flex: 1,
            height: '100%',
            alignItems: 'center',
            justifyContent: 'center',
            marginTop: 40,
          }}>
          <RN.ActivityIndicator color="red" />
        </RN.View>
      )}
      renderItem={(item) => <SpaceListItem {...item.item} />}
    />
  );
};
