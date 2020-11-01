import React from 'react';
import { useTheme } from 'styled-components';
import SVG from '../../assets/svg/x-circle.svg';
import {
  defaultSVGProps,
  SVGWrapperProps,
  transformSVGProps,
} from './svgProps';

export const CloseIcon = (props: SVGWrapperProps) => {
  const theme = useTheme();

  return (
    <SVG
      {...{
        ...transformSVGProps({ ...defaultSVGProps, ...props }),
        fill: 'transparent',
        color: theme.unFocusedIconColor,
        ...props,
      }}
    />
  );
};
