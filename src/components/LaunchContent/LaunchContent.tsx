import React from 'react';
import * as RN from 'react-native';
import { useTranslation } from 'react-i18next';

import { LaunchDetailed } from '../../service/service';
import { BadgeWrapper } from '../Badges/BadgeWrapper';
import { BaseScroll } from '../Basic/Basic';
import * as S from './LaunchContent.styled';
import * as T from './LaunchContentText';
import { PadMapImage } from './PadMapImage';
import { VideoContentItem } from './VideoContentItem';
import { useLaunchPad } from '../../hooks/useLaunchPad';

export const LaunchContent = (content: LaunchDetailed) => {
  return (
    <BaseScroll>
      <RocketContent {...content} />

      <LaunchServiceProviderContent {...content} />

      <MissionContent {...content} />

      <PadContent {...content} />

      <VideoContent {...content} />
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

  if (text?.length && content.mission?.orbit.name?.length) {
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
