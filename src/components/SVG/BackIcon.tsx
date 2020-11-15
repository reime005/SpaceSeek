import React from 'react';
import { useTheme } from 'styled-components';
import SVG from '../../assets/svg/chevron-left.svg';
import {
  defaultSVGProps,
  SVGWrapperProps,
  transformSVGProps,
} from './svgProps';

export const BackIcon = (props: SVGWrapperProps) => {
  const theme = useTheme();

  return (
    <SVG
      {...{
        ...transformSVGProps({ ...defaultSVGProps, ...props }),
        fill: theme.primaryColor,
        ...props,
      }}
    />
  );
};
