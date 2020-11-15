import React from 'react';
import { useTheme } from 'styled-components';
import SVG from '../../assets/svg/location.svg';
import {
  defaultSVGProps,
  SVGWrapperProps,
  transformSVGProps,
} from './svgProps';

export const LocationIcon = (props: SVGWrapperProps) => {
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
