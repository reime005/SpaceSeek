import React from 'react';
import * as RN from 'react-native';
import i18n from 'i18next';

import { I18nextProvider, useTranslation } from 'react-i18next';
import {
  BasePage,
  BaseScroll,
  RegularText,
  Title,
} from '../components/Basic/Basic';
import { SpaceList } from '../components/SpaceList/SpaceList';
import { useStore } from '../hooks/useStore';
import { LaunchSerializerCommon, LaunchService } from '../service/service';
import { StyledSearchItemSeparator } from '../components/SearchBar/Search.styled';
import { RecentSearchItem } from '../components/SearchBar/RecentSearchItem';
import { useRoute } from '@react-navigation/native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { HomeIcon } from '../components/SVG/HomeIcon';
import { BackIcon } from '../components/SVG/BackIcon';
import { GiftIcon } from '../components/SVG/GiftIcon';
import { MailIcon } from '../components/SVG/MailIcon';
import styled, { ThemeContext, useTheme } from 'styled-components/native';
import { MenuItem } from '../config/locales/localeTypes';
import { ThemeSwitch } from '../components/ThemeSwitch/ThemeSwitch';
import { config } from '../config/config';

const IconWrapper = styled.View`
  padding: 10px;
  border-radius: 8px;
  background-color: ${({ theme }) => theme.primaryColor};
`;

const settingsData: {
  title: string;
  icon: JSX.Element;
  data: MenuItem[];
}[] = [
  {
    title: 'About',
    icon: (
      <IconWrapper>
        <GiftIcon scale={0.8} />
      </IconWrapper>
    ),
    data: ['aboutMe', 'spaceAPI', 'theme'],
  },
  {
    title: 'Feedback and Help',
    icon: (
      <IconWrapper>
        <MailIcon scale={0.8} />
      </IconWrapper>
    ),
    data: ['help'],
  },
];
const actionForMenuItem = (item: MenuItem) => {
  switch (item) {
    case 'aboutMe': {
      RN.Linking.openURL(config.url);
      break;
    }
    case 'help': {
      RN.Linking.openURL(config.helpURL);
    }
    case 'spaceAPI': {
      RN.Linking.openURL(config.spaceAPIURL);
    }
  }
};

export const SettingsScreen = () => {
  const { name } = useRoute();
  const { t } = useTranslation();

  const theme = useTheme();

  return (
    <SafeAreaView style={{ flex: 1, padding: 16, backgroundColor: theme.headerBackgroundColor }}>
      <Title size="super">{t(`screen.${name}.title`)}</Title>

      <RN.SectionList
        sections={settingsData}
        style={{ flex: 1, width: '100%', marginTop: 24 }}
        showsVerticalScrollIndicator={false}
        bounces={false}
        onEndReachedThreshold={0.5}
        ItemSeparatorComponent={StyledSearchItemSeparator}
        keyExtractor={(it) => it}
        renderItem={(props) => {
          const isFirstElement = props.index === 0;
          const isLastElement = props.index === props.section.data.length - 1;

          return (
            <RN.TouchableOpacity
              activeOpacity={1}
              onPress={() => actionForMenuItem(props.item)}
              style={{
                width: '100%',
                flexDirection: 'row',
                alignItems: 'center',
                paddingVertical: 16,
                paddingHorizontal: 16,
                backgroundColor: theme.listItemBackgroundColor,
                borderRadius: 16,
                borderTopLeftRadius: isFirstElement ? 16 : 0,
                borderTopRightRadius: isFirstElement ? 16 : 0,
                borderBottomRightRadius: isLastElement ? 16 : 0,
                borderBottomLeftRadius: isLastElement ? 16 : 0,
              }}>
              <RegularText numberOfLines={1} size="m">
                {t(`menuItem.${props.item}`)}
              </RegularText>

              <RN.View
                style={{
                  flex: 1,
                  justifyContent: 'center',
                  alignItems: 'flex-end',
                }}>
                <RN.View style={{ transform: [{ rotate: '180deg' }] }}>
                  {props.item === 'theme' && <ThemeSwitch />}

                  {props.item !== 'theme' && (
                    <BackIcon color="grey" fill="none" />
                  )}
                </RN.View>
              </RN.View>
            </RN.TouchableOpacity>
          );
        }}
        // SectionSeparatorComponent={() => <RN.View style={{ height: 16 }} />}
        renderSectionHeader={({ section: { title, icon } }) => (
          <RN.View
            style={{
              marginTop: 32,
              marginBottom: 24,
              width: '100%',
              flexDirection: 'row',
              alignItems: 'center',
            }}>
            {icon}
            <Title size="l" style={{ marginLeft: 16 }}>
              {title}
            </Title>
          </RN.View>
        )}
      />
    </SafeAreaView>
  );
};
