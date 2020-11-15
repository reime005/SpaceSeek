import React from 'react';
import RN from 'react-native';

import FastImage, { FastImageProps } from 'react-native-fast-image';

export const ImageLoadingWrapper = (props: FastImageProps) => {
  if (typeof props.source !== 'number' && !props.source.uri) {
    <RN.View
      {...props}
      style={[props.style, { backgroundColor: '#ababab' }]}
    />;
  }

  return <FastImage {...props} />;
};
