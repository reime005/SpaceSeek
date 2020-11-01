import React, { ComponentType } from 'react';
import * as RN from 'react-native';
// import { FlatList } from 'react-native-gesture-handler';
import Animated, { useAnimatedStyle } from 'react-native-reanimated';
import { useStore } from '../../hooks/useStore';
import { LaunchSerializerCommon } from '../../service/service';

import * as S from './SpaceList.styled';
import { SpaceListItem } from './SpaceListItem';

interface Props {
  onEndReached: () => void;
  data: LaunchSerializerCommon[] | null;
}

const FlatList = Animated.createAnimatedComponent(RN.FlatList);

export const SpaceList = (props: Props) => {
  const translationY = Animated.useSharedValue(0);

  const state = useStore();

  React.useEffect(() => {
    state.setFoo(translationY);
  }, [translationY]);

  const scrollHandler = Animated.useAnimatedScrollHandler((event) => {
    console.log(event.contentOffset.y);

    translationY.value = event.contentOffset.y;
  });

  // const stylez = useAnimatedStyle(() => {
  //   return {
  //     height: 50 + translationY.value
  //     // transform: [
  //     //   {
  //     //     translateY: translationY.value,
  //     //   },
  //     // ],
  //   };
  // });

  return (
    <FlatList
      onScroll={scrollHandler}
      onEndReachedThreshold={0.5}
      scrollEventThrottle={16}
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
