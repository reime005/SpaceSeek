import React from 'react';
import { useRoute } from '@react-navigation/native';
import { useTranslation } from 'react-i18next';
import { SafeAreaView } from 'react-native-safe-area-context';

import { Title } from '../components/Basic/Basic';
import { useTheme } from 'styled-components/native';
import { SettingsList } from '../components/Settings/SettingsList';

export const SettingsScreen = () => {
  const { name } = useRoute();
  const { t } = useTranslation();

  const theme = useTheme();

  return (
    <SafeAreaView
      testID="settings-screen"
      style={{
        flex: 1,
        padding: 16,
        backgroundColor: theme.headerBackgroundColor,
      }}>
      <Title size="super">{t(`screen.${name}.title`)}</Title>

      <SettingsList />
    </SafeAreaView>
  );
};
