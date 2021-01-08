import React from 'react';
import RN from 'react-native';

import FastImage, { FastImageProps } from 'react-native-fast-image';

const AnimFastImage = RN.Animated.createAnimatedComponent(FastImage);

export const ImageLoadingWrapper = (
  props: FastImageProps & { animStyle: any },
) => {
  if (typeof props.source !== 'number' && !props.source.uri) {
    return (
      <RN.View
        {...props}
        style={[props.style, { backgroundColor: '#ababab' }]}
      />
    );
  }

  return <AnimFastImage {...props} style={[props.style, props.animStyle]} />;
};
