import * as React from 'react';
import * as RN from 'react-native';
import { useTheme } from 'styled-components/native';
import { RocketIcon } from '../SVG/RocketIcon';
import { WikiIcon } from '../SVG/WikiIcon';
import { YoutubeIcon } from '../SVG/YoutubeIcon';
import { StyledBadgeWrapper } from './BadgeWrapper.styled';

export type BadgeType = 'wiki' | 'youtube' | 'launch';

export interface BadgeWrapperProps {
  type: BadgeType;
  url?: string;
  onPress?: () => void;
}

export const BadgeWrapper = (props: BadgeWrapperProps) => {
  const { badgeFontColors } = useTheme();

  const fill = badgeFontColors[props.type];

  const Icon = React.useMemo(() => {
    switch (props.type) {
      case 'youtube':
        return <YoutubeIcon fill={fill} />;
      case 'launch':
        return <RocketIcon fill={fill} />;
      default:
        return <WikiIcon fill={fill} />;
    }
  }, [fill, props.type]);

  if (props.onPress || (props.url && props.url.length)) {
    return (
      <StyledBadgeWrapper
        onPress={
          props.onPress
            ? props.onPress
            : () => {
                try {
                  RN.Linking.openURL(props.url || '');
                } catch (error) {
                  console.warn(error);
                }
              }
        }
        activeOpacity={0.9}
        {...props}>
        {Icon}
      </StyledBadgeWrapper>
    );
  }

  return null;
};
