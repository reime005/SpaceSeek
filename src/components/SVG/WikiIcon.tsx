import React from 'react';
import { useTheme } from 'styled-components';
import Animated from 'react-native-reanimated';
import _SVG from '../../assets/svg/wikipedia.svg';

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

export const WikiIcon = (props: SVGWrapperProps) => {
  const theme = useTheme();

  return (
    <Anim
      {...{
        fill: theme.fontColors.regular,
        ...transformSVGProps({ ...defaultSVGProps, ...props }),
      }}
    />
  );
};
