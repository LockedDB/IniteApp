import React, { PropsWithChildren } from 'react';
import { SafeAreaView, useWindowDimensions, ViewProps } from 'react-native';
import styles from './styles';
import Animated, { FadeIn, FadeOut } from 'react-native-reanimated';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

const AnimatedSafeAreaView = Animated.createAnimatedComponent(SafeAreaView);

interface CustomSafeAreaViewProps extends ViewProps {}

export const CustomSafeAreaView = ({
  children,
  ...props
}: PropsWithChildren<CustomSafeAreaViewProps>) => {
  const { height } = useWindowDimensions();
  const { bottom } = useSafeAreaInsets();
  return (
    <AnimatedSafeAreaView
      entering={FadeIn}
      exiting={FadeOut}
      style={[styles.page, { minHeight: height - bottom }]}
      {...props}>
      {children}
    </AnimatedSafeAreaView>
  );
};
