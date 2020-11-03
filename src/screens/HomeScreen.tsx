import React from 'react';
import { BasePage, RegularText } from '../components/Basic/Basic';
import { SpaceList } from '../components/SpaceList/SpaceList';
import { useStore } from '../hooks/useStore';
import { LaunchSerializerCommon, LaunchService } from '../service/service';

export const HomeScreen = () => {
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
  const { searchValue } = useStore();

  const [data, setData] = React.useState<LaunchSerializerCommon[] | null>(null);
  const [limit, setLimit] = React.useState(15);

  React.useEffect(() => {
    if (searchValue.length > 1) {
      LaunchService.launchList({
        limit,
        search: searchValue,
      }).then((res) => setData(res.results));
    }
  }, [limit, searchValue]);

  if (searchValue.length > 1) {
    return <SpaceList data={data} onEndReached={() => setLimit(limit + 15)} />;
  } else {
    return <RegularText>TODO recent searches</RegularText>;
  }
};
