import { PropsWithChildren } from 'react';
import { Text, TextProps } from 'react-native';
import styles from './styles';

interface CustomTextProps extends TextProps {}

export const CustomText = ({
  children,
  ...props
}: PropsWithChildren<CustomTextProps>) => (
  <Text style={styles.text} {...props}>
    {children}
  </Text>
);
