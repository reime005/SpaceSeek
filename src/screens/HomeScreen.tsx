import { useRoute } from '@react-navigation/native';
import React from 'react';
import { useTranslation } from 'react-i18next';
import { ActivityIndicator, FlatList, View } from 'react-native';
import FastImage from 'react-native-fast-image';
import {
  Title,
  BasePage,
  RegularText,
  SubText,
} from '../components/Basic/Basic';
import * as S from '../components/Basic/Basic.styled';
import { DragAndSnap } from '../components/DragAndSnap/DragAndSnap';
import { SpaceList } from '../components/SpaceList/SpaceList';
import { HomeIcon } from '../components/SVG/HomeIcon';
import { LaunchSerializerCommon, LaunchService } from '../service/service';

export const HomeScreen = () => {
  const { name } = useRoute();
  const [data, setData] = React.useState<LaunchSerializerCommon[] | null>(null);
  const [limit, setLimit] = React.useState(15);

  React.useEffect(() => {
    LaunchService.launchUpcomingList({ limit }).then((res) =>
      setData(res.results),
    );
  }, [limit]);

  return (
    <BasePage>
      <SpaceList data={data} onEndReached={() => setLimit(limit + 15)} />
    </BasePage>
  );
};
