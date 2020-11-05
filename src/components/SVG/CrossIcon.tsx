import React, { SVGProps } from 'react';
import { useTheme } from 'styled-components';
import SVG from '../../assets/svg/cross.svg';
import {
  defaultSVGProps,
  SVGWrapperProps,
  transformSVGProps,
} from './svgProps';

export const CrossIcon = (props: SVGWrapperProps) => {
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
