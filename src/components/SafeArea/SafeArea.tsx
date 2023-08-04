import type React from 'react';
import type { ViewStyle } from 'react-native';
import { View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

import styles from './styles';
import { Black } from '@/utils/colors';

type Directions = 'left' | 'right' | 'top' | 'bottom';

type SafeAreaProps = {
  backgroundColor?: string;
  bottomColor?: string;
  children: React.ReactNode;
  edges?: Directions[];
  style?: ViewStyle;
  testID?: string;
  topColor?: string;
};

export const SafeArea = ({
  children,
  backgroundColor = Black,
  bottomColor,
  edges = ['left', 'right', 'top', 'bottom'],
  style,
  testID,
  topColor,
  ...rest
}: SafeAreaProps) => {
  const { top, bottom } = useSafeAreaInsets();

  return (
    <View
      style={[
        styles.page,
        { paddingTop: edges.includes('top') ? top : 0 },
        { backgroundColor: topColor || backgroundColor },
        style,
      ]}
      testID={testID}
      {...rest}>
      {children}
      <View
        style={[
          { backgroundColor: bottomColor || backgroundColor },
          { height: edges.includes('bottom') ? bottom : 0 },
        ]}
      />
    </View>
  );
};
