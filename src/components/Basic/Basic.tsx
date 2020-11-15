import { useFocusEffect } from '@react-navigation/native';
import React from 'react';
import * as ReactNative from 'react-native';

import * as S from './Basic.styled';

interface IRegularText
  extends ReactNative.TextProps,
    Partial<S.IStyledCustomText> {
  children: string | string[];
}

export const RegularText = (props: IRegularText) => {
  return (
    <S.StyledCustomText
      {...{ fontColor: 'regular', fontType: 'regular', size: 'm', ...props }}
    />
  );
};

export const Title = (props: IRegularText) => {
  return (
    <S.StyledCustomText
      {...{ fontColor: 'regular', fontType: 'bold', size: 'l', ...props }}
    />
  );
};

export const SubText = (props: IRegularText) => {
  return (
    <S.StyledCustomText
      {...{ fontColor: 'subtle', fontType: 'regular', size: 's', ...props }}
    />
  );
};

interface BaseScrollProps extends ReactNative.ScrollViewProps {
  children: React.ReactNode | React.ReactNode[];
}

export const BaseScroll = (props: BaseScrollProps) => {
  return (
    <S.StyledBaseScroll
      showsVerticalScrollIndicator={false}
      alwaysBounceVertical={false}
      contentContainerStyle={{ padding: 16 }}
      {...props}>
      {props.children}
    </S.StyledBaseScroll>
  );
};

export const BasePage = (props: any) => {
  const fadeAnim = React.useRef(new ReactNative.Animated.Value(0)).current;

  const fadeIn = () => {
    ReactNative.Animated.timing(fadeAnim, {
      useNativeDriver: true,
      toValue: 1,
      duration: 200,
    }).start();
  };

  const fadeOut = () => {
    ReactNative.Animated.timing(fadeAnim, {
      useNativeDriver: true,
      toValue: 0,
      duration: 200,
    }).start();
  };

  useFocusEffect(() => {
    fadeIn();
    return fadeOut;
  });

  return (
    <S.BasePage {...props} style={{ opacity: fadeAnim }}>
      {props.children}
    </S.BasePage>
  );
};
