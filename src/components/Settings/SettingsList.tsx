import * as React from 'react';
import * as RN from 'react-native';

import { MenuItem } from '../../config/locales/localeTypes';
import { IconWrapper } from '../Basic/Basic.styled';
import { StyledSearchItemSeparator } from '../SearchBar/Search.styled';
import { GiftIcon } from '../SVG/GiftIcon';
import { MailIcon } from '../SVG/MailIcon';
import { SettingsListItem } from './SettingsListItem';
import { SettingsListSectionHeader } from './SettingsListSectionHeader';

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


export const SettingsList = () => {
  return (
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
          <SettingsListItem
            item={props.item}
            isFirstElement={isFirstElement}
            isLastElement={isLastElement}
          />
        );
      }}
      renderSectionHeader={({ section: { title, icon } }) => (
        <SettingsListSectionHeader icon={icon} title={title} />
      )}
    />
  );
};
