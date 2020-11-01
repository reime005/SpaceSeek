import { useRoute } from '@react-navigation/native';
import React from 'react';
import { useTranslation } from 'react-i18next';
import { ActivityIndicator, StatusBar } from 'react-native';
import FastImage from 'react-native-fast-image';

import {
  Title,
  BasePage,
  RegularText,
} from '../components/Basic/Basic';
import {
  AgencySerializerDetailedCommon,
  LaunchDetailed,
  LaunchService,
} from '../service/service';

export const SpaceDetailsScreen = () => {
  const route = useRoute();
  const [data, setData] = React.useState<LaunchDetailed | null>(null);

  const id = (route.params as any)?.id;

  React.useEffect(() => {
    LaunchService.launchRead(id).then((res) => setData(res));
  }, [id]);

  if (!data) {
    return (
      <BasePage>
        <ActivityIndicator />
      </BasePage>
    );
  }

  return (
    <>
      <StatusBar barStyle="light-content" />

      <FastImage
        source={{ uri: data.image, priority: 'high' }}
        style={{
          width: '100%',
          height: '40%',
          justifyContent: 'flex-end',
          padding: 16,
        }}
        resizeMode="cover">
        <Title
          numberOfLines={2}
          style={{
            textShadowColor: 'rgba(0,0,0,0.3)',
            textShadowRadius: 2,
            textShadowOffset: { width: 1, height: 1 },
          }}
          size="xxl"
          fontColor="light">
          {data.name ?? 'Launch'}
        </Title>
      </FastImage>

      <BasePage>
        <RegularText>{data.hashtag ?? '#space'}</RegularText>
      </BasePage>
    </>
  );
};


