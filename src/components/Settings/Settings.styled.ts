import styled from 'styled-components/native';

export const StyledSectionWrapper = styled.View`
  margin-top: 32px;
  margin-bottom: 24px;
  width: 100%;
  flex-direction: row;
  align-items: center;
`;

const radius = 16;

interface IStyledSettingsListItemWrapper {
  isFirstElement?: boolean;
  isLastElement?: boolean;
}

export const StyledSettingsListItemWrapper = styled.TouchableOpacity<
  IStyledSettingsListItemWrapper
>`
  width: 100%;
  flex-direction: row;
  align-items: center;
  padding: ${radius}px;
  background-color: ${({ theme }) => theme.listItemBackgroundColor};
  border-top-left-radius: ${({ isFirstElement }) =>
    isFirstElement ? `${radius}px` : '0px'};
  border-top-right-radius: ${({ isFirstElement }) =>
    isFirstElement ? `${radius}px` : '0px'};
  border-bottom-left-radius: ${({ isLastElement }) =>
    isLastElement ? `${radius}px` : '0px'};
  border-bottom-right-radius: ${({ isLastElement }) =>
    isLastElement ? `${radius}px` : '0px'};
`;
