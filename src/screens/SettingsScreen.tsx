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
import { SearchIcon } from '../components/SVG/SearchIcon';
import { CloseIcon } from '../components/SVG/CloseIcon';
import { Search } from '../components/SearchBar/Search';

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
  const [isModalVisible, setModalVisible] = React.useState(false);

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

          <Search />


        {/* <RN.View
          style={[{
            minHeight: 150,
            marginTop: 8,
            width: '100%',
            backgroundColor: 'white',
            borderRadius: 24,
            padding: 24,
          }, styles.shadow]}> */}

        {/* <Modal
          propagateSwipe
          animationIn="fadeIn"
          animationInTiming={150}
          animationOut="fadeOutUp"
          animationOutTiming={150}
          isVisible={isModalVisible}
          onSwipeComplete={onSwipeComplete}
          hasBackdrop={false}
          swipeThreshold={0.2}
          coverScreen={true}
          swipeDirection="up"
          style={[
            {
              // marginTop: 8,
              // top: 60,
              // width: '100%',
              // backgroundColor: 'red',
              // borderRadius: 24,
              // padding: 24,
            },
            styles.shadow,
          ]}>
          {data &&
            data.map((d) => (
              <RN.TouchableOpacity onPress={() => onItemPress(d)}>
                <RegularText style={{ marginVertical: 16 }}>
                  {JSON.stringify(d)}
                </RegularText>
              </RN.TouchableOpacity>
            ))}
        </Modal> */}

        {/* </RN.View> */}
      </SafeAreaView>

      <MapView
        style={{ flex: 1, position: 'absolute', width, height, zIndex: 0 }}
        region={{
          ...item,
          latitudeDelta: 25,
          longitudeDelta: 25,
        }}
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

const styles = RN.StyleSheet.create({
  shadow: {
    elevation: 7,
    shadowColor: '#999999',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.5,
    shadowRadius: 2,
  },
});
