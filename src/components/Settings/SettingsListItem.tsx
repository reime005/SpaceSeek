import * as React from 'react';
import { useTranslation } from 'react-i18next';
import * as RN from 'react-native';
import { useTheme } from 'styled-components';

import { config } from '../../config/config';
import { MenuItem } from '../../config/locales/localeTypes';
import { RegularText } from '../Basic/Basic';
import { BackIcon } from '../SVG/BackIcon';
import { ThemeSwitch } from '../ThemeSwitch/ThemeSwitch';
import { StyledSettingsListItemWrapper } from './Settings.styled';

interface Props {
  item: MenuItem;
  isFirstElement?: boolean;
  isLastElement?: boolean;
}

export const SettingsListItem = (props: Props) => {
  const { item, isFirstElement, isLastElement } = props;

  const theme = useTheme();
  const { t } = useTranslation();

  return (
    <StyledSettingsListItemWrapper
      {...props}
      activeOpacity={1}
      onPress={() => actionForMenuItem(props.item)}>
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

          {props.item !== 'theme' && <BackIcon color="grey" fill="none" />}
        </RN.View>
      </RN.View>
    </StyledSettingsListItemWrapper>
  );
};

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
