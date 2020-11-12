import styled from 'styled-components/native';

export const ContentSection = styled.View`
  margin-top: 16px;
  margin-bottom: 24px;
`;

export const DescriptionWrapper = styled.View`
  margin-top: 4px;
  margin-bottom: 4px;
`;

export const StyledDateWrapper = styled.View`
  flex-direction: row;
  align-self: center;
  margin-top: 16px;
  margin-bottom: 16px;
`;

export const StyledTimerWrapper = styled.View`
  margin-bottom: 4px;
  padding-top: 10px;
  padding-bottom: 10px;
  border-radius: 6px;
  padding-left: 8px;
  padding-right: 8px;
  background-color: ${({ theme }) => theme.backgroundColorLight};
  overflow: hidden;
`;
