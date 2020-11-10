import React from 'react';
import * as RN from 'react-native';

import { VidURL } from '../../service/service';
import { BadgeWrapper } from '../Badges/BadgeWrapper';
import * as S from './LaunchContent.styled';
import * as T from './LaunchContentText';

export const VideoContentItem = (item: VidURL) => {
  return (
    <RN.View style={styles.videoItem}>
      <T.ContentTitle text={item?.title} />

      <S.DescriptionWrapper>
        <T.Description text={item?.description} />
      </S.DescriptionWrapper>

      <BadgeWrapper type="youtube" url={item.url} />
    </RN.View>
  );
};

const styles = RN.StyleSheet.create({
  videoItem: {
    marginVertical: 8,
    padding: 16,
    borderRadius: 8,
    backgroundColor: '#fff',
    shadowColor: '#ccc',
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 0.2,
    shadowRadius: 2,
  },
});
