import React from 'react';
import Animated from 'react-native-reanimated';
import _SVG from '../../assets/svg/gift.svg';

import {
  SVGWrapperProps,
  defaultSVGProps,
  transformSVGProps,
} from './svgProps';

class SVG extends React.Component {
  render() {
    return <_SVG {...this.props} />;
  }
}

const Anim = Animated.createAnimatedComponent(SVG);

export const GiftIcon = (props: SVGWrapperProps) => {
  return (
    <Anim
      {...{
        ...transformSVGProps({ ...defaultSVGProps, ...props }),
        color: 'white',
        fill: 'transparent',
      }}
    />
  );
};
