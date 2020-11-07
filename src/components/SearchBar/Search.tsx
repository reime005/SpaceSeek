import React from 'react';
import * as RN from 'react-native';
import { Agency, Pad, PadService } from '../../service/service';
import { CloseIcon } from '../SVG/CloseIcon';
import { SearchIcon } from '../SVG/SearchIcon';

import * as S from './Search.styled';

import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withSpring,
} from 'react-native-reanimated';
import { RegularText, Title } from '../Basic/Basic';
import { useTranslation } from 'react-i18next';
import { useStore } from '../../hooks/useStore';
import { RecentSearchItem } from './RecentSearchItem';
import { SearchItem } from './SearchItem';

const { height: dh } = RN.Dimensions.get('screen');

const MIN_HEIGHT = 100;
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

  const store = useStore();
  let recentSearches = store.recentSearches
    ? store.recentSearches.filter((s) => s.type === 'pad')
    : null;

  const [searchValue, setSearchValue] = React.useState('');
  const [value, setValue] = React.useState('');
  const [limit, setLimit] = React.useState(15);
  const [, setModalVisible] = React.useState(false);

  const [data, setData] = React.useState<null | Pad[]>(
    require('../../mockData/pads.json'),
  );
  // const [agencies, setAgencies] = React.useState<null | {
  //   [id: string]: Agency;
  // }>(null);

  const height = useSharedValue(MIN_HEIGHT);

  React.useEffect(() => {
    store.loadSearches();
  }, []);

  React.useEffect(() => {
    if (!searchValue.length) {
      return;
    }

    store.addRecentSearch({
      text: searchValue,
      type: 'pad',
      key: Date.now().toString(),
    });

    PadService.padList({ limit, search: searchValue }).then((res) => {
      setData(res.results);
      // res.results.forEach((pad: Pad) => {
      //   const id = String(pad.id) || '';
      //   AgenciesService.agenciesRead(id).then(
      //     res => {
      //       setAgencies({
      //         ...agencies,
      //         [id]: res
      //       })
      //     }
      //   )
      // })
    });
  }, [searchValue]);

  const onItemPress = (item: Pad) => {
    props.onChangeItem(item);
    onBoxPress();
  };

  const onFocus = () => {
    setModalVisible(true);
  };

  const [boxIsOpen, setBoxIsOpen] = React.useState(false);

  const onBoxPress = () => {
    if (!data?.length && !store.recentSearches?.length) {
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

  const clearSearch = () => {
    setSearchValue('');
    setValue('');
    setData(null);

    if (boxIsOpen) {
      onBoxPress();
    }
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

  return (
    <>
      <S.StyledSearchInputWrapper style={[styles.shadow]}>
        <SearchIcon />

        <S.StyledTextInput
          pointerEvents="box-only"
          onFocus={onFocus}
          value={value}
          onChangeText={setValue}
          onEndEditing={(e) => setSearchValue(e.nativeEvent.text)}
        />

        <RN.TouchableOpacity onPress={clearSearch}>
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
          {!boxIsOpen && (
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
          )}

          {boxIsOpen &&
            !data?.length &&
            recentSearches &&
            recentSearches.length > 0 && (
              <>
                <Title size="xl" style={{ paddingTop: 24, paddingLeft: 24 }}>
                  {searchResultTextShort}
                </Title>

                <RN.FlatList
                  key={`recent-${recentSearches.length}`}
                  data={recentSearches}
                  alwaysBounceVertical={false}
                  style={{ flex: 1, width: '100%', marginTop: 24 }}
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
            )}

          {boxIsOpen && data && data.length > 0 && (
            <RN.FlatList
              data={data}
              key={data.length}
              style={{ flex: 1, width: '100%', marginTop: 24 }}
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
          )}
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
});
