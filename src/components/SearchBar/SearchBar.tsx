import { useRoute } from '@react-navigation/native';
import React from 'react';
import { useTranslation } from 'react-i18next';
import * as RN from 'react-native';
import { Transitioning, Transition } from 'react-native-reanimated';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { Title } from '../Basic/Basic';
import { CloseIcon } from '../SVG/CloseIcon';
import { SearchIcon } from '../SVG/SearchIcon';

export const SearchBar = () => {
  const { name } = useRoute();
  const [searching, setSearching] = React.useState(false);
  const [searchValue, setSearchValue] = React.useState('');

  const { t } = useTranslation();

  const insets = useSafeAreaInsets();

  const ref = React.useRef<any>();

  const onPress = () => {
    ref.current.animateNextTransition();
    setSearching(!searching);
  };

  return (
    <Transitioning.View
      ref={ref}
      transition={transition}
      style={{
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'flex-start',
        paddingHorizontal: 16,
        paddingTop: (insets.top || 0) + 20,
        paddingBottom: 16,
      }}>
      {searching ? (
        <>
          <RN.TouchableOpacity onPress={onPress}>
            <CloseIcon />
          </RN.TouchableOpacity>

          <RN.TextInput
            numberOfLines={1}
            value={searchValue}
            autoFocus
            onChangeText={setSearchValue}
            style={{
              width: '100%',
              paddingHorizontal: 8,
              textDecorationLine: 'none',
              textDecorationColor: 'white',
            }}
            underlineColorAndroid="transparent"
            placeholder="Search for something..."
          />
        </>
      ) : (
        <>
          <RN.View style={{ flex: 1 }}>
            <Title size="super">{t(`screen.${name}.title`)}</Title>
          </RN.View>

          <RN.TouchableOpacity onPress={onPress}>
            <SearchIcon />
          </RN.TouchableOpacity>
        </>
      )}
    </Transitioning.View>
  );
};

const transition = (
  <Transition.Together>
    <Transition.Out type="fade" durationMs={150} />
    <Transition.Change interpolation="easeInOut" />
    <Transition.In type="fade" durationMs={150} delayMs={150} />
  </Transition.Together>
);
