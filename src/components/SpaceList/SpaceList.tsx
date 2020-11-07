import React, { ComponentType } from 'react';
import * as RN from 'react-native';
import { LaunchSerializerCommon } from '../../service/service';

import { SpaceListItem } from './SpaceListItem';
import { Spinner } from './Spinner';

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
      contentContainerStyle={{ paddingTop: 16, justifyContent: 'center', alignItems: 'center' }}
      data={props.data}
      showsVerticalScrollIndicator={false}
      keyExtractor={(item) => item.id || '1'}
      ListEmptyComponent={Spinner}
      renderItem={(item) => <SpaceListItem {...item.item} />}
    />
  );
};
