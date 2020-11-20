import React from 'react';
import * as RN from 'react-native';
import { useTranslation } from 'react-i18next';
import {
  BasePage,
  BaseScroll,
  RegularText,
  Title,
} from '../components/Basic/Basic';
import { SpaceList } from '../components/SpaceList/SpaceList';
import { useStore } from '../hooks/useStore';
import { LaunchSerializerCommon, LaunchService } from '../service/service';
import { StyledSearchItemSeparator } from '../components/SearchBar/Search.styled';
import { RecentSearchItem } from '../components/SearchBar/RecentSearchItem';
import { SecondSpinner } from '../components/SpaceList/SecondSpinner';

export const LaunchScreen = () => {
  const { searchVisible } = useStore();

  if (searchVisible) {
    return (
      <BasePage testID="launch-screen">
        <SearchWrapper />
      </BasePage>
    );
  }

  return (
    <BasePage testID="launch-screen">
      <CategoryWrapper />
    </BasePage>
  );
};

const CategoryWrapper = () => {
  const { category } = useStore();

  const [error, setError] = React.useState(false);
  const [data, setData] = React.useState<LaunchSerializerCommon[] | null>(null);
  const [limit, setLimit] = React.useState(15);

  React.useEffect(() => {
    setData(null);
    setLimit(15);
  }, [category]);

  React.useEffect(() => {
    LaunchService[category]({ limit })
      .then((res) => {
        setData(res.results);
        setError(false);
      })
      .catch(() => {
        //TODO: track
        setError(true);
      });
  }, [limit, category]);

  // React.useEffect(() => {
  //   const t = setTimeout(() => {
  //     setData(require('../mockData/launches.json').results);
  //   }, 1000);

  //   return () => clearTimeout(t);
  // }, [category, limit]);

  if (error) {
    return <ErrorText />;
  } else if (!data?.length) {
    return <SecondSpinner />;
  }

  return <SpaceList data={data} onEndReached={() => setLimit(limit + 15)} />;
};

const ErrorText = () => {
  const { t } = useTranslation();

  return <Title>{t('errorText')}</Title>;
};

const SearchWrapper = () => {
  const searchValue = useStore((state) => state.searchValue);
  const addRecentSearch = useStore((state) => state.addRecentSearch);

  const [data, setData] = React.useState<LaunchSerializerCommon[] | null>(null);
  const [limit, setLimit] = React.useState(15);
  const [error, setError] = React.useState(false);

  React.useEffect(() => {
    if (searchValue.length > 1) {
      addRecentSearch({
        key: Date.now().toString(),
        text: searchValue,
        type: 'launch',
      });

      LaunchService.launchList({
        limit,
        search: searchValue,
      })
        .then((res) => {
          setData(res.results);
          setError(false);
        })
        .catch(() => {
          //TODO: track
          setError(true);
        });
    }
  }, [limit, searchValue, addRecentSearch]);

  if (error) {
    return <ErrorText />;
  } else if (searchValue.length > 1) {
    return <SpaceList data={data} onEndReached={() => setLimit(limit + 15)} />;
  } else {
    return <RecentList />;
  }
};

const RecentList = () => {
  const { t } = useTranslation();

  const store = useStore();
  let recentSearches = store.recentSearches
    ? store.recentSearches.filter((s) => s.type === 'launch')
    : null;

  if (!recentSearches || !recentSearches.length) {
    return (
      <BaseScroll contentContainerStyle={{ alignItems: 'center', padding: 16 }}>
        <RegularText>{t('noSearchResults')}</RegularText>
      </BaseScroll>
    );
  }

  return (
    <>
      <Title size="xl" style={{ paddingTop: 24, paddingLeft: 24 }}>
        {t('recentSearches')}
      </Title>

      <RN.FlatList
        key={`recent-${recentSearches.length}`}
        data={recentSearches}
        alwaysBounceVertical={false}
        style={{ flex: 1, width: '100%', marginTop: 24 }}
        showsVerticalScrollIndicator={false}
        ItemSeparatorComponent={StyledSearchItemSeparator}
        renderItem={(item) => {
          return (
            <RecentSearchItem
              onPress={() => {
                store.setSearchValue(item.item.text);
              }}
              onRemoveItem={() => {
                store.removeRecentSearch(item.item);
              }}
              text={item.item.text}
            />
          );
        }}
      />
    </>
  );
};
