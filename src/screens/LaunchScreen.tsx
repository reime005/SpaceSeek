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

export const LaunchScreen = () => {
  const { searchVisible } = useStore();

  if (searchVisible) {
    return (
      <BasePage>
        <SearchWrapper />
      </BasePage>
    );
  }

  return (
    <BasePage>
      <CategoryWrapper />
    </BasePage>
  );
};

const CategoryWrapper = () => {
  const { category } = useStore();

  const [data, setData] = React.useState<LaunchSerializerCommon[] | null>(null);
  const [limit, setLimit] = React.useState(15);

  React.useEffect(() => {
    setData(null);
    setLimit(15);
  }, [category]);

  React.useEffect(() => {
    LaunchService[category]({ limit }).then((res) => setData(res.results));
  }, [limit, category]);

  return <SpaceList data={data} onEndReached={() => setLimit(limit + 15)} />;
};

const SearchWrapper = () => {
  const { searchValue, addRecentSearch } = useStore();

  const [data, setData] = React.useState<LaunchSerializerCommon[] | null>(null);
  const [limit, setLimit] = React.useState(15);

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
      }).then((res) => setData(res.results));
    }
  }, [limit, searchValue]);

  if (searchValue.length > 1) {
    return <SpaceList data={data} onEndReached={() => setLimit(limit + 15)} />;
  } else {
    return <RecentList onItemPressed={(item: string) => {}} />;
  }
};

interface Props {}

const RecentList = (props: any) => {
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
