import React from 'react';
import * as RN from 'react-native';
import { LaunchSerializerCommon } from '../../service/service';

import { SpaceListItem } from './SpaceListItem';
import { Spinner } from './Spinner';

interface Props {
  onEndReached: () => void;
  data: LaunchSerializerCommon[] | null;
}

const dw = RN.Dimensions.get('screen').width;

export const SpaceList = (props: Props) => {
  return (
    <RN.FlatList
      onEndReachedThreshold={0.5}
      // scrollEventThrottle={16}
      onEndReached={props.onEndReached}
      contentContainerStyle={{ paddingTop: 16, width: '100%' }}
      data={props.data}
      numColumns={dw > 700 ? 2 : 1}
      showsVerticalScrollIndicator={false}
      keyExtractor={(item) => item.id || '1'}
      ListEmptyComponent={Spinner}
      renderItem={(item) => <SpaceListItem {...item.item} />}
    />
  );
};
