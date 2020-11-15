import React from 'react';
import { useTheme } from 'styled-components';
import SVG from '../../assets/svg/clock.svg';
import {
  defaultSVGProps,
  SVGWrapperProps,
  transformSVGProps,
} from './svgProps';

export const ClockIcon = (props: SVGWrapperProps) => {
  const theme = useTheme();

  return (
    <SVG
      {...{
        ...transformSVGProps({ ...defaultSVGProps, ...props }),
        fill: theme.unFocusedIconColor,
        ...props,
      }}
    />
  );
};
