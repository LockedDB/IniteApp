import type React from 'react';

import Animated, {
  useAnimatedStyle,
  useDerivedValue,
  withTiming,
} from 'react-native-reanimated';

import { StyleSheet } from 'react-native';

type Props = {
  isLoading: boolean;
  animationTime: number;
  children?: React.ReactNode;
  initialOpacity?: number;
};

export const OpacityLoader = ({
  isLoading,
  animationTime,
  children,
  initialOpacity = 0.7,
}: Props) => {
  const opacity = useDerivedValue(() =>
    withTiming(isLoading ? initialOpacity : 0, { duration: animationTime }),
  );

  const animatedOpacity = useAnimatedStyle(() => ({
    opacity: opacity.value,
    display: opacity.value === 0 ? 'none' : 'flex',
  }));

  return (
    <Animated.View style={[styles.opacityScreen, animatedOpacity]}>
      {children}
    </Animated.View>
  );
};

const styles = StyleSheet.create({
  opacityScreen: {
    ...StyleSheet.absoluteFillObject,
    zIndex: 100,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    backgroundColor: 'rgba(0,0,0,0.3)',
  },
});
