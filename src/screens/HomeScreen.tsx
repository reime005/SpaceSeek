import React from 'react';
import { useTranslation } from 'react-i18next';
import * as S from '../components/Basic/Basic.styled';
import { DragAndSnap } from '../components/DragAndSnap/DragAndSnap';

export const HomeScreen = () => {
  const { t } = useTranslation();

  return (
    <S.BasePage>
      <S.BaseText>{t('title')}</S.BaseText>

      <S.BaseScroll contentContainerStyle={{ flex: 1 }}>
        <DragAndSnap />
      </S.BaseScroll>
    </S.BasePage>
  );
};
