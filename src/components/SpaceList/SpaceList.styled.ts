import styled from 'styled-components/native';
import * as ReactNative from 'react-native';
import { Title } from '../Basic/Basic';
import FastImage from 'react-native-fast-image';

const border = "16px";

export const StyledTitle = styled(Title)`
  padding-right: 24px;
  padding-bottom: 6px;
`;

export const StyledImage = styled(FastImage)`
  width: 100%;
  height: 100%;
  border-top-left-radius: ${border};
  border-top-right-radius: ${border};
  flex: 2;
`;

export const StyledWrapper = styled.TouchableOpacity`
  margin-left: 16px;
  margin-right: 16px;
  margin-top: 10px;
  margin-bottom: 10px;
  justify-content: center;
  flex-direction: column;
  align-items: flex-start;
  height: 200px;
  min-height: 200px;
  border-radius: ${border};
`;

export const StyledTextBox = styled.View`
  flex: 1;
  width: 100%;
  justify-content: flex-start;
  align-items: flex-start;
  flex-direction: column;
  padding-top: ${border};
  padding-bottom: ${border};
  padding-left: 8px;
  padding-right: 8px;
  background-color: white;
  border-bottom-left-radius: ${border};
  border-bottom-right-radius: ${border};
`;
