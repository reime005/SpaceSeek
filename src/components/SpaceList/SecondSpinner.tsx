import React from 'react';
import * as RN from 'react-native';
import Animated, {
  useSharedValue,
  useAnimatedProps,
} from 'react-native-reanimated';
import Svg, { Circle as C } from 'react-native-svg';
import { useTheme } from 'styled-components';

const Circle = Animated.createAnimatedComponent(C);

const radius = 10;
const DISTANCE = 10;
const SPEED_FACTOR = 0.06;

const initials = {
  first: radius * 2.15,
  second: radius * 2.35,
  third: radius * 2.55,
};

interface Props {
  height?: string | number;
  width?: string | number;
  fill?: string;
  style?: RN.ViewStyle;
}

export const SecondSpinner = (props: Props) => {
  const { mainFont: fill } = useTheme();

  const frameRef = React.useRef<any>(null);
  const currTime = useSharedValue(0);

  const y = {
    first: useSharedValue(initials.first),
    second: useSharedValue(initials.second),
    third: useSharedValue(initials.third),
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

  const req = React.useCallback(() => {
    y.first.value = radius * 2 + radius * Math.sin(currTime.value - 3);
    y.second.value = radius * 2 + radius * Math.sin(currTime.value - 1);
    y.third.value = radius * 2 + radius * Math.sin(currTime.value - 2);
    currTime.value = currTime.value + SPEED_FACTOR;

    frameRef.current = requestAnimationFrame(req);
  }, [y, currTime]);

  React.useEffect(() => {
    req();

    return () => cancelAnimationFrame(frameRef.current);
  }, [req]);

  return (
    <Svg height={24} width={100} {...props} viewBox="0 0 100 75">
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
