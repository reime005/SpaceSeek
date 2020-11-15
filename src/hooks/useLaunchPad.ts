import React from 'react';
import { useNavigation } from '@react-navigation/native';

import { bottomRoutes } from '../navigators/routes';
import { MapScreenIncomeParamsProps } from '../screens/MapScreen';
import { LaunchDetailed } from '../service/service';

export const useLaunchPad = (content: LaunchDetailed) => {
  const nav = useNavigation();

  const openLaunchPad = React.useCallback(() => {
    const sendProps: MapScreenIncomeParamsProps = { pad: content.pad };
    nav.navigate(bottomRoutes.search, sendProps);
  }, [content.pad, nav]);

  return {
    openLaunchPad,
  };
};
