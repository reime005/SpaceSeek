import Animated from "react-native-reanimated";
import styled from "styled-components/native";


export const StyledSearchResultsWrapper = styled(Animated.View)`
  margin-top: 16px;
  padding-left: 24px;
  padding-right: 24px;
  border-top-left-radius: 24px;
  border-top-right-radius: 24px;
  background-color: ${({ theme }) => theme.searchBackgroundColor};
  width: 100%;
  min-width: 100%;
  z-index: 100;
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
