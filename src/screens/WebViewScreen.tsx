import React from 'react';
import * as RN from 'react-native';
import {
  BasePage,
} from '../components/Basic/Basic';

import WebView from 'react-native-webview';

interface IWebViewScreen {

}

export const WebViewScreen = (props: IWebViewScreen) => {
  return (
    <BasePage testID="webview-screen">
      <WebView
        source={{ uri: 'https://infinite.red' }}
      />
    </BasePage>
  );
};
