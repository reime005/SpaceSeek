import React from 'react';
import * as RN from 'react-native';
import MapView, { Region } from 'react-native-maps';
import { Marker } from 'react-native-maps';
import { Pad } from '../service/service';
import { useTheme } from 'styled-components';

import { SafeAreaView } from 'react-native-safe-area-context';
import { Search } from '../components/SearchBar/Search';

const { width, height } = RN.Dimensions.get('screen');

const DEFAULT_REGION: Region = {
  latitude: 52.515151,
  longitude: 13.407049,
  latitudeDelta: 5,
  longitudeDelta: 5,
};

export interface MapScreenIncomeParamsProps {
  pad?: Pad;
}

export interface MapScreenProps {
  route?: {
    params?: MapScreenIncomeParamsProps;
  };
}

export const MapScreen = (props: MapScreenProps) => {
  const theme = useTheme();

  const [region, setRegion] = React.useState<Region>(DEFAULT_REGION);

  const [item, setItem] = React.useState<Partial<Pad>>({
    latitude: '37.78825',
    longitude: '-122.4324',
  });

  const onChangeItem = (i: Pad) => {
    setRegion({
      ...DEFAULT_REGION,
      latitude: Number(i.latitude || '0'),
      longitude: Number(i.longitude || '0'),
    });

    setItem(i);
  };

  React.useEffect(() => {
    if (props.route?.params?.pad) {
      onChangeItem(props.route?.params?.pad);
    }
  }, [props.route]);

  return (
    <>
      <SafeAreaView
        edges={['top']}
        style={{
          flex: 1,
          zIndex: 2,
          justifyContent: 'flex-start',
          alignItems: 'center',
        }}
        pointerEvents="box-none">
        <Search onChangeItem={onChangeItem} />
      </SafeAreaView>

      <MapView
        style={{ flex: 1, position: 'absolute', width, height, zIndex: 0 }}
        region={region}
        onRegionChangeComplete={setRegion}
        initialRegion={DEFAULT_REGION}>
        <Marker
          pinColor={theme.focusedIconColor}
          key={item.id || 1}
          coordinate={{
            latitude: Number(item.latitude || '0') || region.latitude,
            longitude: Number(item.longitude || '0') || region.longitude,
          }}
          title={item.name || 'Launch'}
          description={`${item.location?.name}`}
        />
      </MapView>
    </>
  );
};
