import React, { PropsWithChildren } from 'react';
import { SafeAreaView, ViewProps } from 'react-native';
import styles from './styles';
import Animated, { FadeIn, FadeOut } from 'react-native-reanimated';

const AnimatedSafeAreaView = Animated.createAnimatedComponent(SafeAreaView);

interface CustomSafeAreaViewProps extends ViewProps {}

export const CustomSafeAreaView = ({
  children,
  ...props
}: PropsWithChildren<CustomSafeAreaViewProps>) => {
  return (
    <AnimatedSafeAreaView
      entering={FadeIn}
      exiting={FadeOut}
      style={styles.page}
      {...props}>
      {children}
    </AnimatedSafeAreaView>
  );
};
