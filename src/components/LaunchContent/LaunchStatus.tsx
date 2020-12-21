import React from 'react';
import * as RN from 'react-native';
import Animated, {
  delay,
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from 'react-native-reanimated';
import { useTheme } from 'styled-components/native';

import { LaunchDetailed } from '../../service/service';
import { RegularText } from '../Basic/Basic';
import { RocketIcon } from '../SVG/RocketIcon';
import { Description, SectionTitle } from './LaunchContentText';
import * as S from './LaunchContent.styled';

const StatusIcon = (content: LaunchDetailed) => {
  const { failColor, successColor } = useTheme();
  const id = content.status?.id;

  let color = id === 2 || id === 4 ? failColor : successColor;

  return (
    <RN.View style={{ marginLeft: 8 }}>
      <RocketIcon fill={color} />
    </RN.View>
  );
};

export const LaunchStatus = (content: LaunchDetailed) => {
  const [distance, setDistance] = React.useState(-1);
  const net: any = React.useMemo(() => new Date(content.net || ''), [
    content.net,
  ]);

  React.useEffect(() => {
    if (content.net) {
      const calc = () => {
        const now: any = new Date();
        const distance = net - now;

        setDistance(distance);

        if (distance < 1) {
          clearInterval(t);
        }
      };

      calc();

      const t = setInterval(calc, 1000);

      return () => clearInterval(t);
    }
  }, [content.net, net]);

  const days = Math.floor(distance / (1000 * 60 * 60 * 24));
  const hours = Math.floor(
    (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60),
  );
  const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((distance % (1000 * 60)) / 1000);

  if (distance < 0) {
    return (
      <>
        <RN.View style={{ flexDirection: 'row' }}>
          <SectionTitle
            text={`Launch was a ${(
              content.status?.name || 'success'
            ).toLowerCase()}`}
          />

          <StatusIcon {...content} />
        </RN.View>

        <S.StyledDateWrapper>
          <RegularText size="xxl" fontType="bold">
            {net.toLocaleDateString()}
          </RegularText>
        </S.StyledDateWrapper>

        <Reasons {...content} />
      </>
    );
  }

  return (
    <>
      <RN.View style={{ flexDirection: 'row' }}>
        <SectionTitle
          text={`Launch: ${(content.status?.name || 'success').toLowerCase()}`}
        />

        <StatusIcon {...content} />
      </RN.View>

      <S.StyledDateWrapper>
        <Numbers label="Days" n={days} />

        <Separator />

        <Numbers label="Hours" n={hours} />

        <Separator />

        <Numbers label="Minutes" n={minutes} />

        <Separator />

        <Numbers label="Seconds" n={seconds} />
      </S.StyledDateWrapper>

      <Reasons {...content} />
    </>
  );
};

const Reasons = (content: LaunchDetailed) => {
  return (
    <>
      {!!content.failreason && (
        <Description text={`Fail reason: ${content.failreason}`} />
      )}

      {!!content.holdreason && (
        <Description text={`Hold reason: ${content.holdreason}`} />
      )}
    </>
  );
};

const Separator = () => {
  return (
    <RegularText
      fontType="bold"
      style={{ lineHeight: 54, paddingVertical: 16, paddingHorizontal: 8 }}
      size="max">
      {' '}
    </RegularText>
  );
};

type Label = 'Days' | 'Hours' | 'Minutes' | 'Seconds';

const Numbers = ({ n, label }: { n: number; label: Label }) => {
  const { mainFont } = useTheme();

  const y = useSharedValue(0);

  let nStr = String(n);

  if (n < 10) {
    nStr = '0' + nStr;
  }

  React.useEffect(
    () => {
      if (label === 'Seconds' && n === 0) {
        y.value = delay(
          700,
          withTiming(500, { duration: 300 }, () => {
            y.value = -500;
            y.value = withTiming(0, { duration: 300 });
          }),
        );
      }
    } /* eslint-disable */,
    [n],
  );

  const st = useAnimatedStyle(() => {
    return {
      transform: [
        {
          translateY: y.value,
        },
      ],
    };
  });

  return (
    <RN.View style={{ justifyContent: 'center', alignItems: 'center' }}>
      <S.StyledTimerWrapper>
        <Animated.Text
          style={[
            {
              fontSize: 38,
              lineHeight: 38,
              fontFamily: 'RobotoCondensed-Bold',
              color: mainFont,
            },
            st,
          ]}>
          {nStr}
        </Animated.Text>
      </S.StyledTimerWrapper>

      <RegularText fontColor="subtle" size="s">
        {label}
      </RegularText>
    </RN.View>
  );
};
