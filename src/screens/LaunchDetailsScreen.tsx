import { useNavigation, useRoute } from '@react-navigation/native';
import React from 'react';
import * as RN from 'react-native';
import { useTranslation } from 'react-i18next';
import { ActivityIndicator, StatusBar, StyleSheet } from 'react-native';
import FastImage, { FastImageProps } from 'react-native-fast-image';
import styled from 'styled-components/native';

import {
  Title,
  BasePage,
  RegularText,
  BaseScroll,
} from '../components/Basic/Basic';
import {
  AgencySerializerDetailedCommon,
  LaunchDetailed,
  LaunchService,
} from '../service/service';
import { BlurView } from '@react-native-community/blur';
import { ImageLoadingWrapper } from '../components/Basic/ImageLoadingWrapper';
import { bottomRoutes } from '../navigators/routes';
import { MapScreenIncomeParamsProps } from './MapScreen';
import { WikiIcon } from '../components/SVG/WikiIcon';
import { BadgeWrapper } from '../components/Badges/BadgeWrapper';

export const LaunchDetailsScreen = () => {
  const route = useRoute();
  const [data, setData] = React.useState<LaunchDetailed | null>(null);
  const [error, setError] = React.useState(true);
  const { t } = useTranslation();

  const id = (route.params as any)?.id;

  // React.useEffect(() => {
  //   LaunchService.launchRead(id)
  //     .then((res) => {
  //       setData(res);
  //       setError(false);
  //     })
  //     .catch(() => {
  //       //TODO: track
  //       setError(true);
  //     });
  // }, [id]);

  React.useEffect(() => {
    const t = setTimeout(() => {
      setData(require('../mockData/launchDetailed.json'));
    }, 1000);

    return () => clearTimeout(t);
  }, []);

  if (!data) {
    return (
      <>
        <BlurView style={[styles.img]} />
        <ActivityIndicator style={{ marginTop: 16 }} />
      </>
    );
  }

  return (
    <>
      <StatusBar barStyle="light-content" />

      <ImageLoadingWrapper
        source={{ uri: data?.image, priority: 'high' }}
        style={styles.img}
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
          {data?.name ?? ''}
        </Title>
      </ImageLoadingWrapper>

      {!data && error && <Title>{t('errorText')}</Title>}
      {!data || !error ? <ActivityIndicator /> : <Content {...data} />}
    </>
  );
};

const ContentSection = styled.View`
  margin-top: 16px;
  margin-bottom: 24px;
`;

const Content = (content: LaunchDetailed) => {
  return (
    <BaseScroll>
      <ContentSection>
        <RocketContent {...content} />
      </ContentSection>

      <ContentSection>
        <LaunchServiceProviderContent {...content} />
      </ContentSection>

      <ContentSection>
        <MissionContent {...content} />
      </ContentSection>

      <ContentSection>
        <PadContent {...content} />
      </ContentSection>
    </BaseScroll>
  );
};

const RocketContent = (content: LaunchDetailed) => {
  return (
    <>
      <Title size="super" numberOfLines={2}>
        Rocket
      </Title>

      <Title size="xl" numberOfLines={2}>
        {content.rocket?.configuration?.full_name || ''}
      </Title>

      <RegularText numberOfLines={4}>
        {content.rocket?.configuration?.description || ''}
      </RegularText>

      <BadgeWrapper type="wiki" url={content.rocket?.configuration?.wiki_url} />
    </>
  );
};

export const LaunchServiceProviderContent = (content: LaunchDetailed) => {
  return (
    <>
      <Title size="super" numberOfLines={2}>
        Launch Service Provider
      </Title>

      <Title size="xl" numberOfLines={2}>
        {content.launch_service_provider?.name || ''}
      </Title>

      <Title size="xl" numberOfLines={1}>
        {content.launch_service_provider?.administrator || ''} |{' '}
        {content.launch_service_provider?.type || ''}
      </Title>

      <RegularText numberOfLines={4}>
        {content.launch_service_provider?.description || ''}
      </RegularText>

      <BadgeWrapper
        type="wiki"
        url={content.launch_service_provider?.wiki_url}
      />
    </>
  );
};

export const MissionContent = (content: LaunchDetailed) => {
  return (
    <>
      <Title size="super" numberOfLines={2}>
        Mission
      </Title>

      <Title size="xl" numberOfLines={2}>
        {content.mission?.name || ''}
      </Title>

      <Title size="xl" numberOfLines={1}>
        {content.mission?.type || ''} | {content.mission?.orbit.name || ''}
      </Title>

      <RegularText numberOfLines={4}>
        {content.mission?.description || ''}
      </RegularText>
    </>
  );
};

export const PadContent = (content: LaunchDetailed) => {
  return (
    <>
      <Title size="super" numberOfLines={2}>
        Launch Pad
      </Title>

      <Title size="xl" numberOfLines={2}>
        {content.pad?.name || ''}
      </Title>

      <RegularText numberOfLines={2}>
        {content.pad?.location.name || ''}
      </RegularText>

      <BadgeWrapper type="wiki" url={content.pad?.wiki_url} />

      <PadMapImage {...content} />
    </>
  );
};

export const PadMapImage = (content: LaunchDetailed) => {
  const nav = useNavigation();

  const onPress = () => {
    const sendProps: MapScreenIncomeParamsProps = { pad: content.pad };
    nav.navigate(bottomRoutes.search, sendProps);
  };

  return (
    <RN.TouchableOpacity activeOpacity={0.9} onPress={onPress}>
      <ImageLoadingWrapper
        source={{ uri: content.pad?.map_image, priority: 'high' }}
        style={styles.padImg}
        resizeMode="cover"
      />
    </RN.TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  img: {
    backgroundColor: '#ccc',
    width: '100%',
    height: '40%',
    justifyContent: 'flex-end',
    padding: 16,
  },
  padImg: {
    marginVertical: 16,
    width: '80%',
    height: 160,
    alignSelf: 'center',
    borderRadius: 8,
  },
  wiki: {
    paddingHorizontal: 2,
    paddingVertical: 4,
    backgroundColor: 'red',
  },
});
