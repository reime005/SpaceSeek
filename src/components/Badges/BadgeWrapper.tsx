import * as React from 'react';
import * as RN from 'react-native';
import { useTheme } from 'styled-components/native';
import { WikiIcon } from '../SVG/WikiIcon';
import { StyledBadgeWrapper } from './BadgeWrapper.styled';

export type BadgeType = 'wiki' | 'youtube';

export interface BadgeWrapperProps {
  type: BadgeType;
  url?: string;
}

export const BadgeWrapper = (props: BadgeWrapperProps) => {
  const { badgeFontColors } = useTheme();

  const fill = badgeFontColors[props.type];

  const Icon = React.useMemo(() => {
    switch (props.type) {
      default:
        return <WikiIcon fill={fill} />;
    }
  }, [fill, props.type]);

  if (!props.url || !props.url.length) {
    return null;
  }

  return (
    <StyledBadgeWrapper
      onPress={() => {
        try {
          RN.Linking.openURL(props.url || '');
        } catch (error) {
          console.warn(error);
        }
      }}
      activeOpacity={0.9}
      {...props}>
      {Icon}
    </StyledBadgeWrapper>
  );
};
