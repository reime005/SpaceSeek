import { useIsFocused, useRoute } from '@react-navigation/native';
import React from 'react';
import { useTranslation } from 'react-i18next';
import { RegularText } from '../Basic/Basic';

export const NavBarLabel = () => {
  const route = useRoute();
  const { t } = useTranslation();
  const isFocused = useIsFocused();

  const shortTitle = t(`screen.${route.name}.shortTitle`);

  return (
    <RegularText size="s" fontType={isFocused ? 'bold' : 'regular'}>
      {shortTitle}
    </RegularText>
  );
};
