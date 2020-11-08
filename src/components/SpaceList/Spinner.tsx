import React from 'react';
import * as RN from 'react-native';
import Animated, {
  useSharedValue,
  useAnimatedProps,
  withSpring,
  delay,
} from 'react-native-reanimated';
import Svg, { Stop as S, Circle as C } from 'react-native-svg';
import { useTheme } from 'styled-components';

const Circle = Animated.createAnimatedComponent(C);

const springConfig: Animated.WithSpringConfig = {
  damping: 50,
  mass: 1,
  stiffness: 200,
};

const radius = 10;
const DISTANCE = 10;

const initials = {
  first: radius * 2.15,
  second: radius * 2.35,
  third: radius * 2.55,
};

const finals = {
  first: radius * 1.1,
  second: radius * 1.1,
  third: radius * 1.1,
};

const delaysMS = {
  first: 0,
  second: 50,
  third: 150,
};

interface Props {
  height?: string | number;
  width?: string | number;
  fill?: string;
  style?: RN.ViewStyle;
}

export const Spinner = (props: Props) => {
  const { mainFont: fill } = useTheme();

  const y = {
    first: useSharedValue(initials.first),
    second: useSharedValue(initials.second),
    third: useSharedValue(initials.third),
  };

  const animateForth = () => {
    y.first.value = delay(
      delaysMS.first,
      withSpring(finals.first, springConfig),
    );

    y.second.value = delay(
      delaysMS.second,
      withSpring(finals.second, springConfig),
    );

    y.third.value = delay(
      delaysMS.third,
      withSpring(finals.third, springConfig, animateBack),
    );
  };

  const animateBack = () => {
    y.first.value = delay(
      delaysMS.first,
      withSpring(initials.first, springConfig),
    );

    y.second.value = delay(
      delaysMS.second,
      withSpring(initials.second, springConfig),
    );

    y.third.value = delay(
      delaysMS.third,
      withSpring(initials.third, springConfig, animateForth),
    );
  };

  const firstProps = useAnimatedProps(() => {
    return {
      cy: y.first.value,
    };
  });

  const secondProps = useAnimatedProps(() => {
    return {
      cy: y.second.value,
    };
  });

  const thirdProps = useAnimatedProps(() => {
    return {
      cy: y.third.value,
    };
  });

  React.useEffect(() => {
    animateForth();
  }, []);

  return (
      <Svg
        height={24}
        width={100}
        {...props}
        viewBox="0 0 100 75">
        <Circle
          cx="0"
          r={radius}
          fill={fill}
          {...props}
          animatedProps={firstProps}
        />

        <Circle
          cx={radius * 2 + DISTANCE * 1}
          r={radius}
          fill={fill}
          {...props}
          animatedProps={secondProps}
        />

        <Circle
          cx={radius * 4 + DISTANCE * 2}
          r={radius}
          fill={fill}
          {...props}
          animatedProps={thirdProps}
        />
      </Svg>
  );
};
