import { CustomText, CustomTextProps } from '@/components/CustomText';
import { PropsWithChildren } from 'react';

import { White } from '@/utils/colors';
import { View } from 'react-native';
import styles from './styles';

interface CategoryTagProps extends CustomTextProps {
  colorIndex: number;
}

const BackgroundColors = {
  White: White,
  Purple: '#D7B8FF',
  Red: '#F59898',
  Yellow: '#F4FFB1',
};

export const CategoryTag = ({
  colorIndex,
  children,
  ...props
}: PropsWithChildren<CategoryTagProps>) => {
  const backgroundColor = Object.values(BackgroundColors)[colorIndex];

  return (
    <View style={{ ...styles.container, backgroundColor }}>
      <CustomText style={styles.text} fontStyle="medium" {...props}>
        {children}
      </CustomText>
    </View>
  );
};
