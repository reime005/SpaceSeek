import { useRoute } from '@react-navigation/native';
import React from 'react';
import { useTranslation } from 'react-i18next';
import * as S from '../components/Basic/Basic.styled';

export const SettingsScreen = () => {
  const { t } = useTranslation();
  const { name } = useRoute();

  return (
    null
  );
};
