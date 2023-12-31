import { PropsWithChildren } from 'react';
import { Text, TextProps } from 'react-native';
import styles from './styles';

export type FontStyle = 'regular' | 'light' | 'bold' | 'black' | 'medium';

const capitalize = (str: string) => str.charAt(0).toUpperCase() + str.slice(1);

export interface CustomTextProps extends TextProps {
  fontStyle?: FontStyle;
}

export const CustomText = ({
  children,
  fontStyle = 'regular',
  style,
  ...props
}: PropsWithChildren<CustomTextProps>) => (
  <Text
    style={[
      { fontFamily: `Roboto-${capitalize(fontStyle)}` },
      styles.text,
      style,
    ]}
    {...props}>
    {children}
  </Text>
);
