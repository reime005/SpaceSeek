import React from 'react';
import * as RN from 'react-native';
import { useTranslation } from 'react-i18next';
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

const settingsData = [
  {
    title: 'About',
    icon: <HomeIcon scale={1.12} />,
    data: ['More about the developer', 'Space API'],
  },
  {
    title: 'Feedback and Help',
    icon: <HomeIcon scale={1.12} />,
    data: ['Feedback', 'Help'],
  },
  // {
  //   title: 'Sides',
  //   icon: HomeIcon,
  //   data: ['French Fries', 'Onion Rings', 'Fried Shrimps'],
  // },
  // {
  //   title: 'Drinks',
  //   icon: HomeIcon,
  //   data: ['Water', 'Coke', 'Beer'],
  // },
  // {
  //   title: 'Desserts',
  //   icon: HomeIcon,
  //   data: ['Cheese Cake', 'Ice Cream'],
  // },
];

export const SettingsScreen = () => {
  const { name } = useRoute();
  const { t } = useTranslation();

  return (
    <SafeAreaView style={{ flex: 1, padding: 16 }}>
      <Title size="super">{t(`screen.${name}.title`)}</Title>

      <RN.SectionList
        sections={settingsData}
        style={{ flex: 1, width: '100%', marginTop: 24 }}
        showsVerticalScrollIndicator={false}
        bounces={false}
        onEndReachedThreshold={0.5}
        ItemSeparatorComponent={StyledSearchItemSeparator}
        renderItem={(props) => {
          const isFirstElement = props.index === 0;
          const isLastElement = props.index === props.section.data.length - 1;

          return (
            <RN.View
              style={{
                width: '100%',
                flexDirection: 'row',
                alignItems: 'center',
                paddingVertical: 16,
                paddingHorizontal: 16,
                backgroundColor: 'rgba(0, 0, 0, .08)',
                borderRadius: 16,
                borderTopLeftRadius: isFirstElement ? 16 : 0,
                borderTopRightRadius: isFirstElement ? 16 : 0,
                borderBottomRightRadius: isLastElement ? 16 : 0,
                borderBottomLeftRadius: isLastElement ? 16 : 0,
              }}>
              <RegularText>{props.item}</RegularText>

              <RN.View
                style={{
                  flex: 1,
                  justifyContent: 'center',
                  alignItems: 'flex-end',
                }}>
                <RN.View style={{ transform: [{ rotate: '180deg' }] }}>
                  <BackIcon color="grey" fill="none" />
                </RN.View>
              </RN.View>
            </RN.View>
          );
        }}
        renderSectionHeader={({ section: { title, icon } }) => (
          <RN.View
            style={{
              width: '100%',
              flexDirection: 'row',
              alignItems: 'center',
            }}>
            {icon}
            <RN.Text style={{ marginLeft: 16 }}>{title}</RN.Text>
          </RN.View>
        )}
      />
    </SafeAreaView>
  );
};
