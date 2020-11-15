import Animated from 'react-native-reanimated';
import styled from 'styled-components/native';

export const StyledSearchResultsWrapper = styled(Animated.View)`
  margin-top: 16px;
  /* padding-top: 16px;
  padding-left: 24px;
  padding-right: 24px; */
  border-top-left-radius: 24px;
  border-top-right-radius: 24px;
  background-color: ${({ theme }) => theme.listItemBackgroundColor};
  width: 100%;
  min-width: 100%;
  z-index: 100;
`;

export const StyledItemWrapper = styled.TouchableOpacity`
  justify-content: center;
  flex-direction: column;
  align-items: flex-start;
  width: 100%;
  padding: 16px;
  padding-top: 12px;
  padding-bottom: 12px;
`;

export const StyledSearchInputWrapper = styled.View`
  flex-direction: row;
  border-radius: 100px;
  width: 90%;
  max-width: 800px;
  margin: 16px;
  align-items: center;
  padding-left: 16px;
  padding-right: 16px;
  background-color: ${({ theme }) => theme.listItemBackgroundColor};
`;

export const StyledSearchItemSeparator = styled.View`
  height: 1px;
  width: 100%;
  background-color: rgba(0, 0, 0, 0.05);
`;

export const StyledTextInput = styled.TextInput`
  min-height: 50px;
  flex: 1;
  justify-content: flex-start;
  align-items: center;
  margin-left: 8px;
  margin-right: 8px;
  color: ${({ theme }) => theme.mainFont};
`;

export const StyledSearchResultsPullBar = styled.View`
  background-color: ${({ theme }) => theme.unFocusedIconColor};
  height: 4px;
  width: 65px;
  margin-top: 8px;
  margin-bottom: 8px;
  border-radius: 4px;
  align-self: center;
`;

export const Row = styled.TouchableOpacity`
  flex: 1;
  width: 100%;
  flex-direction: row;
  background-color: ${({ theme }) => theme.listItemBackgroundColor};
  justify-content: flex-start;
  align-items: center;
  padding-top: 12px;
  padding-bottom: 12px;
  padding-left: 16px;
  padding-right: 16px;
  border-radius: 6px;
`;
