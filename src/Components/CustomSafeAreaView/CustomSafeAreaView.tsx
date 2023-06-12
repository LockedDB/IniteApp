import React, { PropsWithChildren } from 'react';
import { SafeAreaView, StyleSheet, ViewProps } from 'react-native';

interface CustomSafeAreaViewProps extends ViewProps {}

const CustomSafeAreaView: React.FC<
  PropsWithChildren<CustomSafeAreaViewProps>
> = ({ children, ...props }) => {
  return (
    <SafeAreaView style={styles.container} {...props}>
      {children}
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000000',
  },
});

export default CustomSafeAreaView;
