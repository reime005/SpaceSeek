import { useRoute } from '@react-navigation/native';
import React from 'react';
import { useTranslation } from 'react-i18next';
import * as RN from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { Transitioning, Transition } from 'react-native-reanimated';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { useTheme } from 'styled-components';
import { Category } from '../../config/locales/localeTypes';
import { useStore } from '../../hooks/useStore';
import { Title } from '../Basic/Basic';
import { CloseIcon } from '../SVG/CloseIcon';
import { SearchIcon } from '../SVG/SearchIcon';
import { StyledTextInput } from './Search.styled';

export const SearchBar = () => {
  const theme = useTheme();
  const { name } = useRoute();
  const [searching, setSearching] = React.useState(false);
  const [value, setValue] = React.useState('');

  const { t } = useTranslation();

  const insets = useSafeAreaInsets();

  const ref = React.useRef<any>();

  const onPress = () => {
    toggleSearchVisible();
    ref.current.animateNextTransition();
    setSearching(!searching);
    setSearchValue('');
  };

  const { setSearchValue, toggleSearchVisible, searchValue } = useStore();

  React.useEffect(() => {
    setValue(searchValue);
  }, [searchValue]);

  return (
    <Transitioning.View
      ref={ref}
      transition={transition}
      style={{
        backgroundColor: theme.headerBackgroundColor,
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

          <StyledTextInput
            numberOfLines={1}
            placeholderTextColor={theme.placeHolderFontColor}
            autoFocus
            value={value}
            onChangeText={setValue}
            onEndEditing={(val) => {
              setSearchValue(val.nativeEvent.text);
            }}
            style={{
              width: '100%',
              paddingHorizontal: 8,
              textDecorationLine: 'none',
              textDecorationColor: 'white',
            }}
            underlineColorAndroid="transparent"
            placeholder={t('noSearchResults')}
          />
        </>
      ) : (
        <>
          <RN.View style={{ flex: 1 }}>
            <Title size="super">{t(`screen.${name}.title`)}</Title>

            <RN.View style={{ flexDirection: 'row', paddingTop: 6 }}>
              <CategorySwitch category="launchUpcomingList" />

              <RN.View style={{ width: 12 }} />

              <CategorySwitch category="launchPreviousList" />
            </RN.View>
          </RN.View>

          <RN.TouchableOpacity onPress={onPress}>
            <SearchIcon />
          </RN.TouchableOpacity>
        </>
      )}
    </Transitioning.View>
  );
};

const CategorySwitch = ({ category }: { category: Category }) => {
  const { t } = useTranslation();

  const { setCategory, category: selectedCategory } = useStore();

  return (
    <TouchableOpacity onPress={() => setCategory(category)}>
      <Title
        fontColor={selectedCategory === category ? 'primary' : 'regular'}
        size="m">
        {t(`category.${category}`)}
      </Title>
    </TouchableOpacity>
  );
};

const transition = (
  <Transition.Together>
    <Transition.Out type="fade" durationMs={150} />
    <Transition.Change interpolation="easeInOut" />
    <Transition.In type="fade" durationMs={150} delayMs={150} />
  </Transition.Together>
);
