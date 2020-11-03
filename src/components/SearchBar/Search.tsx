import { useRoute } from '@react-navigation/native';
import React from 'react';
import { useTranslation } from 'react-i18next';
import * as RN from 'react-native';
import { LatLng } from 'react-native-maps';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { Pad, PadService } from '../../service/service';
import { CloseIcon } from '../SVG/CloseIcon';
import { SearchIcon } from '../SVG/SearchIcon';

import { PanGestureHandler } from 'react-native-gesture-handler';
import Animated, {
  useAnimatedGestureHandler,
  useAnimatedStyle,
  useSharedValue,
  withSpring,
} from 'react-native-reanimated';
import { RegularText } from '../Basic/Basic';

const usePan = () => {
  const gestureHandler = useAnimatedGestureHandler({
    onStart: (event, ctx) => {
      // with the context (ctx), we track the original start positions
      // ctx.startX = x.value;
      // ctx.startY = y.value;
      // // keep the y value for figuring out the image rotation direction
      // originY.value = event.y;
    },
    onActive: (event, ctx) => {
      // user is actively touching and moving the image
      // x.value = ctx.startX + event.translationX;
      // y.value = ctx.startY + event.translationY;
    },
    onEnd: (event, ctx) => {
      // dragged 40 percent of the screen's width
      // const thresh = width * 0.4;
      // // how much the user moved the image horizontally
      // const diff = ctx.startX + event.translationX;
      // if (diff > thresh) {
      //   // swiped right
      //   onSnap(true);
      // } else if (diff < -1 * thresh) {
      //   // swiped left
      //   onSnap(false);
      // } else {
      //   // no left or right swipe, so 'jump' back to the initial position
      //   x.value = withSpring(0);
      //   y.value = withSpring(0);
      // }
    },
  });

  return { gestureHandler };
};

const { width: dw, height: dh } = RN.Dimensions.get('screen');

const MIN_HEIGHT = 15;
const MAX_MARGIN = dh * 0.5;

const isBetween = (value: number, lower: number, higher: number) =>
  value >= lower && value <= higher;

export const Search = () => {
  const { t } = useTranslation();
  const { name } = useRoute();

  const insets = useSafeAreaInsets();

  const [item, setItem] = React.useState<LatLng>({
    latitude: 37.78825,
    longitude: -122.4324,
  });
  const [searchValue, setSearchValue] = React.useState('');
  const [value, setValue] = React.useState('');
  const [isModalVisible, setModalVisible] = React.useState(false);

  const [data, setData] = React.useState<null | []>(null);

  const height = useSharedValue(MIN_HEIGHT);

  const gestureHandler = useAnimatedGestureHandler({
    onStart: (event, ctx) => {
      // with the context (ctx), we track the original start positions
      // ctx.startX = x.value;
      ctx.startY = event.y;
      // // keep the y value for figuring out the image rotation direction
      // originY.value = event.y;
    },
    onActive: (event, ctx) => {
      // user is actively touching and moving the image
      // x.value = ctx.startX + event.translationX;
      // y.value = ctx.startY + event.translationY;
      // console.warn(event.y);

      height.value -= ctx.startY - event.y;

      // console.warn(height.value);

      // height.value += event.y;
      // height.value += (event.translationY / 10);
    },
    onEnd: (event, ctx) => {

      const h = height.value;
      console.warn(h);

      if (h > dh * 0.3 && h < dh * 0.6) {
        height.value = withSpring(dh * 0.35);
      } else if (h < dh * 0.3) {
        height.value = withSpring(0);
      } else {
        height.value = withSpring(dh)
      }

      // else if (isBetween(h, dh * 0.7, dh * 1)) {
      //   height.value = withSpring(0);
      // }

      // dragged 40 percent of the screen's width
      // const thresh = width * 0.4;
      // // how much the user moved the image horizontally
      // const diff = ctx.startX + event.translationX;
      // if (diff > thresh) {
      //   // swiped right
      //   onSnap(true);
      // } else if (diff < -1 * thresh) {
      //   // swiped left
      //   onSnap(false);
      // } else {
      //   // no left or right swipe, so 'jump' back to the initial position
      //   x.value = withSpring(0);
      //   y.value = withSpring(0);
      // }
    },
  });

  React.useEffect(() => {
    if (!searchValue.length) {
      return;
    }

    PadService.padList({ limit: 15, search: searchValue }).then((res) =>
      setData(res.results),
    );
  }, [searchValue]);

  const onItemPress = (item: Pad) => {
    setItem({
      latitude: Number(item.latitude || '0'),
      longitude: Number(item.longitude || '0'),
    });
    setModalVisible(false);
  };

  const onSwipeComplete = () => {
    setModalVisible(false);
  };

  const onFocus = () => {
    setModalVisible(true);
  };

  const stylez = useAnimatedStyle(() => {
    let h = height.value;

    if (h < 0) {
      h = 0;
    }

    // else if (h > MAX_MARGIN) {
    //   h > MAX_MARGIN;
    // }

    return {
      marginTop: h,
    };
  });

  return (
    <>
      <RN.View
        style={[
          {
            flexDirection: 'row',
            borderRadius: 100,
            width: '90%',
            margin: 16,
            alignItems: 'center',
            paddingHorizontal: 16,
            backgroundColor: 'white',
          },
          styles.shadow,
        ]}>
        <SearchIcon />

        <RN.TextInput
          pointerEvents="box-only"
          onFocus={onFocus}
          value={value}
          onChangeText={setValue}
          onEndEditing={(e) => setSearchValue(e.nativeEvent.text)}
          style={[
            {
              flex: 1,
              minHeight: 50,
              marginHorizontal: 8,
            },
          ]}
        />

        <CloseIcon />
      </RN.View>

      <RN.View
        style={{
          alignItems: 'center',
          justifyContent: 'flex-end',
          height: '100%',
          width: '100%',
        }}>
        <PanGestureHandler avgTouches onGestureEvent={gestureHandler}>
          <Animated.View
            style={[
              {
                flex: 1,
                borderTopLeftRadius: 24,
                borderTopRightRadius: 24,
                backgroundColor: 'white',
                minHeight: 125,
                width: '100%',
                elevation: 3,
                shadowColor: 'grey',
                shadowOffset: { width: 0, height: -1 },
                shadowOpacity: 0.2,
                shadowRadius: 2,
                paddingVertical: 8,
                paddingHorizontal: 24,
              },
              stylez,
            ]}>
            <RN.View
              style={{
                backgroundColor: 'rgba(0,0,0,.1)',
                height: 4,
                width: '15%',
                borderRadius: 100,
                alignSelf: 'center',
              }}
            />

              <RN.FlatList data={require('../../mockData/pads.json')} style={{ flex: 1 }} renderItem={(item) => {
                return <RN.TouchableOpacity style={{ marginVertical: 24 }}>
                  <RegularText>{JSON.stringify(item.item)}</RegularText>
                </RN.TouchableOpacity>
              }} />

          </Animated.View>
        </PanGestureHandler>
      </RN.View>
    </>
  );
};
const styles = RN.StyleSheet.create({
  shadow: {
    elevation: 7,
    shadowColor: '#999999',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.5,
    shadowRadius: 2,
  },
});
