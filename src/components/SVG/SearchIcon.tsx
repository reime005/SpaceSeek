import React from 'react';
import { useTheme } from 'styled-components';
import SVG from '../../assets/svg/search.svg';
import {
  defaultSVGProps,
  SVGWrapperProps,
  transformSVGProps,
} from './svgProps';

export const SearchIcon = (props: SVGWrapperProps) => {
  const theme = useTheme();

  return (
    <SVG
      {...{
        ...transformSVGProps({ ...defaultSVGProps, ...props }),
        fill: 'transparent',
        color: theme.focusedIconColor,
        ...props,
      }}
    />
  );
};
