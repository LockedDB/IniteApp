import React, { PropsWithChildren } from 'react';
import { SafeAreaView, ViewProps } from 'react-native';
import styles from './styles';

interface CustomSafeAreaViewProps extends ViewProps {}

const CustomSafeAreaView = ({
  children,
  ...props
}: PropsWithChildren<CustomSafeAreaViewProps>) => {
  return (
    <SafeAreaView style={styles.page} {...props}>
      {children}
    </SafeAreaView>
  );
};

export default CustomSafeAreaView;
