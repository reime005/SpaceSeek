import React from 'react';
import * as RN from 'react-native';
import { useTranslation } from 'react-i18next';

import { LaunchDetailed } from '../../service/service';
import { BadgeWrapper } from '../Badges/BadgeWrapper';
import { BaseScroll, Title } from '../Basic/Basic';
import * as S from './LaunchContent.styled';
import * as T from './LaunchContentText';
import { PadMapImage } from './PadMapImage';
import { VideoContentItem } from './VideoContentItem';
import { useLaunchPad } from '../../hooks/useLaunchPad';
import { LaunchStatus } from './LaunchStatus';
import { ImageLoadingWrapper } from '../Basic/ImageLoadingWrapper';

const IMAGE_SCALE_MAX = 20;
const LABEL_HEADER_MARGIN = 48;

export const LaunchContent = (content: LaunchDetailed) => {
  const pan = React.useRef(new RN.Animated.ValueXY()).current;

  return (
    <BaseScroll
      contentContainerStyle={{ padding: 0 }}
      onScroll={RN.Animated.event(
        [{ nativeEvent: { contentOffset: { y: pan.y } } }],
        {
          useNativeDriver: false,
        },
      )}
      alwaysBounceVertical={false}
      contentInsetAdjustmentBehavior="never"
      scrollEventThrottle={1}>
      <ImageLoadingWrapper
        animStyle={{
          transform: [
            {
              translateY: pan.y.interpolate({
                inputRange: [-1000, 0],
                outputRange: [-100, 0],
                extrapolate: 'clamp',
              }),
            },
            {
              scale: pan.y.interpolate({
                inputRange: [-3000, 0],
                outputRange: [IMAGE_SCALE_MAX, 1],
                extrapolate: 'clamp',
              }),
            },
          ],
        }}
        source={{ uri: content.image, priority: 'high' }}
        style={styles.img}
        resizeMode="cover"
      />

      <RN.Animated.View
        style={{
          paddingHorizontal: 16,
          transform: [
            {
              translateY: pan.y.interpolate({
                inputRange: [-1000, 0],
                outputRange: [LABEL_HEADER_MARGIN * IMAGE_SCALE_MAX, -80],
                extrapolate: 'clamp',
              }),
            },
          ],
        }}>
        <Title
          numberOfLines={2}
          style={[styles.textShadow, { minHeight: 96 }]}
          size="xxl"
          fontColor="light">
          {content.name ?? ''}
        </Title>

        <LaunchStatus {...content} />

        <RocketContent {...content} />

        <LaunchServiceProviderContent {...content} />

        <MissionContent {...content} />

        <PadContent {...content} />

        <VideoContent {...content} />
      </RN.Animated.View>
    </BaseScroll>
  );
};

const VideoContent = (content: LaunchDetailed) => {
  const { t } = useTranslation();

  if (!content.vidURLs?.length) {
    return null;
  }

  return (
    <S.ContentSection>
      <T.SectionTitle text={t('Stream')} />

      <RN.View style={{ flexDirection: 'column' }}>
        {content.vidURLs.map((item) => (
          <VideoContentItem {...item} />
        ))}
      </RN.View>
    </S.ContentSection>
  );
};

const RocketContent = (content: LaunchDetailed) => {
  const { t } = useTranslation();

  if (!content.rocket || !content.rocket.configuration) {
    return null;
  }

  return (
    <S.ContentSection>
      <T.SectionTitle text={t('Rocket')} />

      <T.ContentTitle text={content.rocket?.configuration?.full_name} />

      <T.Description text={content.rocket?.configuration?.description} />

      <BadgeWrapper type="wiki" url={content.rocket?.configuration?.wiki_url} />
    </S.ContentSection>
  );
};

export const LaunchServiceProviderContent = (content: LaunchDetailed) => {
  const { t } = useTranslation();

  let text = content.launch_service_provider?.administrator;

  if (text?.length && content.launch_service_provider?.type?.length) {
    text += '| ';
    text += content.launch_service_provider?.type;
  }

  if (!content.launch_service_provider) {
    return null;
  }

  return (
    <S.ContentSection>
      <T.SectionTitle text={t('Provider')} />

      <T.ContentTitle text={content.launch_service_provider?.name} />

      <T.Description text={text} />

      <T.Description text={content.launch_service_provider?.description} />

      <BadgeWrapper
        type="wiki"
        url={content.launch_service_provider?.wiki_url}
      />
    </S.ContentSection>
  );
};

export const MissionContent = (content: LaunchDetailed) => {
  const { t } = useTranslation();

  let text = content.mission?.type;

  if (text?.length && content.mission?.orbit?.name?.length) {
    text += '| ';
    text += content.mission?.orbit.name;
  }

  if (!content.mission) {
    return null;
  }

  return (
    <S.ContentSection>
      <T.SectionTitle text={t('Mission')} />

      <T.ContentTitle text={content.mission?.name} />

      <T.Description text={text} />

      <T.Description text={content.mission?.description} />
    </S.ContentSection>
  );
};

export const PadContent = (content: LaunchDetailed) => {
  const { t } = useTranslation();
  const { openLaunchPad } = useLaunchPad(content);

  if (!content.pad) {
    return null;
  }

  return (
    <S.ContentSection>
      <T.SectionTitle text={t('Pad')} />

      <T.ContentTitle text={content.pad?.name} />

      <T.Description text={content.pad?.location.name} />

      <BadgeWrapper type="wiki" url={content.pad?.wiki_url} />

      <BadgeWrapper type="launch" onPress={openLaunchPad} />

      <PadMapImage {...content} />
    </S.ContentSection>
  );
};

const styles = RN.StyleSheet.create({
  img: {
    backgroundColor: '#ccc',
    width: '100%',
    height: 350,
    justifyContent: 'flex-end',
    padding: 0,
  },
  textShadow: {
    textShadowColor: 'rgba(0,0,0,0.8)',
    textShadowRadius: 2,
    textShadowOffset: { width: 1, height: 1 },
  },
});
