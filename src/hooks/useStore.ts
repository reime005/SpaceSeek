import Animated, { useSharedValue } from 'react-native-reanimated';
import create from 'zustand';

type State = {
  foo?: Animated.SharedValue<number>;
  setFoo: (value: Animated.SharedValue<number>) => void;
};

export const useStore = create<State>((set) => {
  return {
    setFoo: (value) => set((state) => ({ foo: value })),
  };
});
