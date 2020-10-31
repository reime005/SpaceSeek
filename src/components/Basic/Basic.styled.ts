import styled from 'styled-components/native';

export const BaseText = styled.Text`
  color: ${(props) => props.theme.mainFont};
  font-size: 14px;
`;

export const BaseScroll = styled.ScrollView`
  flex: 1;
  width: 100%;
  height: 100%;
`;

export const BasePage = styled.View`
  flex: 1;
  width: 100%;
  padding: 8px;
`;
