import React, { SVGProps } from 'react';
import { useTheme } from 'styled-components';
import SVG from '../../assets/svg/rocket.svg';
import {
  defaultSVGProps,
  SVGWrapperProps,
  transformSVGProps,
} from './svgProps';

export const RocketIcon = (props: SVGWrapperProps) => {
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
