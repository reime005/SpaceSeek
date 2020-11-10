import styled from 'styled-components/native';
import { BadgeWrapperProps } from './BadgeWrapper';

export const StyledBadgeWrapper = styled.TouchableOpacity<BadgeWrapperProps>`
  padding-left: 32px;
  padding-right: 32px;
  padding-top: 6px;
  padding-bottom: 6px;
  border-radius: 8px;
  margin-top: 8px;
  margin-bottom: 8px;
  background-color: ${({ theme, type }) => theme.badgeBackgroundColors[type]};
  width: 0px;
  align-items: center;
  justify-content: center;
`;
