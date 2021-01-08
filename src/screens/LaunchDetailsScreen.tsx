import React from 'react';
import * as RN from 'react-native';
import { useTranslation } from 'react-i18next';
import { ActivityIndicator } from 'react-native';

import { Title } from '../components/Basic/Basic';
import { LaunchDetailed, LaunchService } from '../service/service';
import { BlurView } from '@react-native-community/blur';
import { LaunchContent } from '../components/LaunchContent/LaunchContent';
import { ThemedStatusBar } from '../components/ThemedStatusBar/ThemedStatusBar';

export interface DetailsScreenIncomeParamsProps {
  id?: string;
}

export interface DetailsScreenProps {
  route?: {
    params?: DetailsScreenIncomeParamsProps;
  };
}

export const LaunchDetailsScreen = (props: DetailsScreenProps) => {
  const [data, setData] = React.useState<LaunchDetailed | null>(null);
  const [error, setError] = React.useState(false);
  const { t } = useTranslation();

  const id = props.route?.params?.id;

  React.useEffect(() => {
    if (!id) {
      return;
    }

    LaunchService.launchRead(id)
      .then((res) => {
        setData(res);
        setError(false);
        console.warn(res);
      })
      .catch((e) => {
        console.warn(e);
        //TODO: track
        setError(true);
      });
  }, [id]);

  // React.useEffect(() => {
  //   const t = setTimeout(() => {
  //     setData(require('../mockData/launchDetailed.json'));
  //   }, 1000);

  //   return () => clearTimeout(t);
  // }, []);

  if (!data) {
    return (
      <>
        <BlurView style={[styles.img]} />
        <ActivityIndicator style={{ marginTop: 16 }} />
      </>
    );
  }

  return (
    <>
      <ThemedStatusBar barStyle="dark-content" />

      {!data && error && <Title>{t('errorText')}</Title>}
      {!data || error ? <ActivityIndicator /> : <LaunchContent {...data} />}
    </>
  );
};

const styles = RN.StyleSheet.create({
  img: {
    backgroundColor: '#ccc',
    width: '100%',
    height: '40%',
    justifyContent: 'flex-end',
    padding: 16,
  },
  padImg: {
    marginVertical: 16,
    width: '80%',
    height: 160,
    alignSelf: 'center',
    borderRadius: 8,
  },
  wiki: {
    paddingHorizontal: 2,
    paddingVertical: 4,
    backgroundColor: 'red',
  },
  videoItem: {
    marginVertical: 8,
    padding: 16,
    borderRadius: 8,
    backgroundColor: '#fff',
    shadowColor: '#ccc',
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 0.2,
    shadowRadius: 2,
  },
  textShadow: {
    textShadowColor: 'rgba(0,0,0,0.8)',
    textShadowRadius: 2,
    textShadowOffset: { width: 1, height: 1 },
  },
});
