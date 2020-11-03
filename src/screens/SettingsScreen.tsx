import { useRoute } from '@react-navigation/native';
import React from 'react';
import * as RN from 'react-native';
import { useTranslation } from 'react-i18next';
import * as S from '../components/Basic/Basic.styled';
import MapView from 'react-native-maps';
import { Marker, LatLng } from 'react-native-maps';
import { LaunchService, Pad, PadService } from '../service/service';

import Modal from 'react-native-modal';
import { RegularText, Title } from '../components/Basic/Basic';
import {
  SafeAreaView,
  useSafeAreaInsets,
} from 'react-native-safe-area-context';

const { width, height } = RN.Dimensions.get('screen');

export const SettingsScreen = () => {
  const { t } = useTranslation();
  const { name } = useRoute();

  const insets = useSafeAreaInsets();

  const [item, setItem] = React.useState<LatLng>({
    latitude: 37.78825,
    longitude: -122.4324,
  });
  const [searchValue, setSearchValue] = React.useState('');
  const [value, setValue] = React.useState('');
  const [isModalVisible, setModalVisible] = React.useState(true);

  const [data, setData] = React.useState<null | []>(null);

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

  return (
    <>
      <SafeAreaView
        style={{
          flex: 1,
          zIndex: 2,
          justifyContent: 'flex-start',
          alignItems: 'center',
        }}
        pointerEvents="box-none">
        <RN.TextInput
          pointerEvents="box-only"
          onFocus={onFocus}
          value={value}
          onChangeText={setValue}
          onEndEditing={(e) => setSearchValue(e.nativeEvent.text)}
          style={{
            height: 50,
            paddingHorizontal: 24,
            borderRadius: 100,
            width: '90%',
            backgroundColor: 'white',
          }}></RN.TextInput>
        <Modal
          propagateSwipe
          animationIn="fadeIn"
          animationInTiming={150}
          animationOut="fadeOutUp"
          animationOutTiming={150}
          isVisible={isModalVisible}
          onSwipeComplete={onSwipeComplete}
          hasBackdrop={false}
          swipeThreshold={0.2}
          coverScreen={false}
          swipeDirection="up"
          style={{
            flex: 1,
            justifyContent: 'flex-start',
            paddingTop: (50 + insets.top || 0) - 10,
          }}>
          <RN.View
            style={{
              minHeight: 150,
              backgroundColor: 'grey',
              borderRadius: 24,
              padding: 24,
            }}>
            {data &&
              data.map((d) => (
                <RN.TouchableOpacity onPress={() => onItemPress(d)}>
                  <RegularText style={{ marginVertical: 16 }}>
                    {JSON.stringify(d)}
                  </RegularText>
                </RN.TouchableOpacity>
              ))}
          </RN.View>
        </Modal>
      </SafeAreaView>

      <MapView
        style={{ flex: 1, position: 'absolute', width, height, zIndex: 0 }}
        initialRegion={{
          ...item,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        }}>
        <Marker
          key={1}
          coordinate={item}
          title={'marker.title'}
          description={'marker.description'}
        />
      </MapView>
    </>
  );
};
