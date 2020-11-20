/* eslint-disable react-hooks/exhaustive-deps */
import React from 'react';
import * as RN from 'react-native';
import { Pad, PadService } from '../../service/service';
import { CloseIcon } from '../SVG/CloseIcon';
import { SearchIcon } from '../SVG/SearchIcon';

import * as S from './Search.styled';

import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withSpring,
} from 'react-native-reanimated';
import { Title } from '../Basic/Basic';
import { useTranslation } from 'react-i18next';
import { useStore } from '../../hooks/useStore';
import { RecentSearchItem } from './RecentSearchItem';
import { SearchItem } from './SearchItem';
import { useTheme } from 'styled-components';
import { SecondSpinner } from '../SpaceList/SecondSpinner';

const { height: dh } = RN.Dimensions.get('screen');

const MIN_HEIGHT = 80;
const MAX_HEIGHT = dh * 0.5;

const springConfig: Animated.WithSpringConfig = {
  velocity: 10,
  damping: 100,
  stiffness: 300,
};

interface Props {
  onChangeItem: (item: Pad) => void;
}

export const Search = (props: Props) => {
  const { t } = useTranslation();
  const theme = useTheme();

  const store = useStore();
  let recentSearches = store.recentSearches
    ? store.recentSearches.filter((s) => s.type === 'pad')
    : null;

  const [searchValue, setSearchValue] = React.useState('');
  const [value, setValue] = React.useState('');
  const [limit, setLimit] = React.useState(15);
  const [loading, setLoading] = React.useState(false);
  const [error, setError] = React.useState(false);

  const [data, setData] = React.useState<null | Pad[]>(null);

  const height = useSharedValue(MIN_HEIGHT);

  React.useEffect(() => {
    store.loadSearches();
  }, []);

  React.useEffect(() => {
    if (!searchValue.length) {
      return;
    }

    setLoading(true);

    store.addRecentSearch({
      text: searchValue,
      type: 'pad',
      key: Date.now().toString(),
    });

    // const t = setTimeout(() => {
    //   setData(require('../../mockData/pads.json'));
    //   setLoading(false);
    // }, 1000);

    // return () => clearTimeout(t);
    PadService.padList({ limit, search: searchValue })
      .then((res) => {
        setData(res.results);
        setError(false);
      })
      .catch(() => {
        //TODO: track
        setError(true);
        closeBoxIfOpen();
      })
      .finally(() => setLoading(false));
  }, [searchValue]);

  const onItemPress = (item: Pad) => {
    props.onChangeItem(item);
    onBoxPress();
  };

  const [boxIsOpen, setBoxIsOpen] = React.useState(false);

  const onBoxPress = () => {
    if (!data?.length && !recentSearches?.length) {
      return;
    }

    if (height.value > MIN_HEIGHT) {
      height.value = withSpring(MIN_HEIGHT, springConfig);
      setBoxIsOpen(false);
    } else {
      height.value = withSpring(MAX_HEIGHT, springConfig);
      setBoxIsOpen(true);
    }
  };

  const closeBoxIfOpen = () => {
    if (boxIsOpen) {
      onBoxPress();
    }
  };

  const onFocus = () => {
    closeBoxIfOpen();
  };

  const onChangeText = (value: string) => {
    setValue(value);
    closeBoxIfOpen();
  };

  const clearSearch = () => {
    setSearchValue('');
    setValue('');
    setData(null);
    closeBoxIfOpen();
  };

  const stylez = useAnimatedStyle(() => {
    return {
      height: height.value,
    };
  }, []);

  let searchResultTextShort = t('noSearchResults');

  if (data && (data?.length || 0) === 1) {
    searchResultTextShort = `1 ${t('result')}`;
  } else if (data && (data?.length || 0) > 1) {
    searchResultTextShort = `${data.length} ${t('results')}`;
  } else if (recentSearches?.length) {
    searchResultTextShort = t('recentSearches');
  }

  const wrapperContent = () => {
    if (!boxIsOpen && (loading || error)) {
      return (
        <RN.View
          style={{
            flex: 1,
            justifyContent: 'flex-start',
            alignItems: 'center',
          }}>
          <S.StyledSearchResultsPullBar />

          <RN.View
            style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            {loading && <SecondSpinner />}
            {error && <Title>{t('errorText')}</Title>}
          </RN.View>
        </RN.View>
      );
    }

    const hasRecentSearches = recentSearches && recentSearches.length > 0;
    const hasSearchedData = data && data.length > 0;

    if (!boxIsOpen) {
      return (
        <RN.TouchableOpacity
          activeOpacity={1}
          onPress={onBoxPress}
          style={{
            flex: 1,
            alignItems: 'center',
            justifyContent: 'flex-start',
          }}>
          <S.StyledSearchResultsPullBar />

          <RN.View
            style={{
              flex: 1,
              alignItems: 'center',
              marginTop: 16,
              justifyContent: 'flex-start',
            }}>
            <Title size="xl">{searchResultTextShort}</Title>
          </RN.View>
        </RN.TouchableOpacity>
      );
    }

    if (boxIsOpen && !hasSearchedData && hasRecentSearches) {
      return (
        <>
          <Title size="xl" style={{ paddingTop: 24, paddingLeft: 24 }}>
            {searchResultTextShort}
          </Title>

          <RN.FlatList
            key={`recent-${recentSearches?.length}`}
            data={recentSearches}
            alwaysBounceVertical={false}
            style={styles.list}
            showsVerticalScrollIndicator={false}
            ItemSeparatorComponent={S.StyledSearchItemSeparator}
            renderItem={(item) => {
              return (
                <RecentSearchItem
                  onPress={() => {
                    setSearchValue(item.item.text);
                    setValue(item.item.text);
                  }}
                  onRemoveItem={() => {
                    if (recentSearches?.length === 1) {
                      onBoxPress();
                    }

                    store.removeRecentSearch(item.item);
                  }}
                  text={item.item.text}
                />
              );
            }}
          />
        </>
      );
    }

    if (boxIsOpen && hasSearchedData) {
      return (
        <RN.FlatList
          data={data}
          key={data?.length}
          style={styles.list}
          showsVerticalScrollIndicator={false}
          bounces={false}
          onEndReachedThreshold={0.5}
          ItemSeparatorComponent={S.StyledSearchItemSeparator}
          onEndReached={() => setLimit(limit + 15)}
          keyExtractor={(i) => String(i.id || '1')}
          renderItem={(item) => {
            return (
              <SearchItem
                onPress={() => onItemPress(item.item)}
                item={item.item}
              />
            );
          }}
        />
      );
    }
  };

  return (
    <>
      <S.StyledSearchInputWrapper style={styles.shadow}>
        <SearchIcon />

        <S.StyledTextInput
          pointerEvents="box-only"
          placeholder={t('noSearchResults')}
          placeholderTextColor={theme.placeHolderFontColor}
          onFocus={onFocus}
          value={value}
          onChangeText={onChangeText}
          onEndEditing={(e) => setSearchValue(e.nativeEvent.text)}
        />

        <RN.TouchableOpacity activeOpacity={0.9} onPress={clearSearch}>
          <CloseIcon />
        </RN.TouchableOpacity>
      </S.StyledSearchInputWrapper>

      <RN.View
        pointerEvents="box-none"
        style={{
          alignItems: 'flex-end',
          justifyContent: 'flex-end',
          flex: 1,
          height: '100%',
          width: '100%',
        }}>
        <S.StyledSearchResultsWrapper
          pointerEvents="auto"
          style={[styles.shadow, stylez]}>
          {wrapperContent()}
        </S.StyledSearchResultsWrapper>
      </RN.View>
    </>
  );
};

const styles = RN.StyleSheet.create({
  shadow: {
    elevation: 7,
    shadowColor: '#999999',
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 0.5,
    shadowRadius: 4,
  },
  list: { flex: 1, width: '100%', marginTop: 24 },
});
