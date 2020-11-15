import React from 'react';
import { useTheme } from 'styled-components';
import SVG from '../../assets/svg/info.svg';
import {
  defaultSVGProps,
  SVGWrapperProps,
  transformSVGProps,
} from './svgProps';

export const InfoIcon = (props: SVGWrapperProps) => {
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
