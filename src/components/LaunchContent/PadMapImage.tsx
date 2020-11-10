import * as React from 'react';
import * as RN from 'react-native';
import { useLaunchPad } from '../../hooks/useLaunchPad';

import { LaunchDetailed } from '../../service/service';
import { ImageLoadingWrapper } from '../Basic/ImageLoadingWrapper';

export const PadMapImage = (content: LaunchDetailed) => {
  const { openLaunchPad } = useLaunchPad(content);

  return (
    <RN.TouchableOpacity activeOpacity={0.9} onPress={openLaunchPad}>
      <ImageLoadingWrapper
        source={{ uri: content.pad?.map_image, priority: 'high' }}
        style={styles.img}
        resizeMode="cover"
      />
    </RN.TouchableOpacity>
  );
};

const styles = RN.StyleSheet.create({
  img: {
    marginVertical: 16,
    width: '80%',
    height: 160,
    alignSelf: 'center',
    borderRadius: 8,
  },
});
