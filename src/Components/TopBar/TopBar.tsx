import { View } from 'react-native';
import styles from './styles';

interface TopBarProps {
  leftComponent?: React.ReactNode;
  rightComponent?: React.ReactNode;
}

export const TopBar = ({ leftComponent, rightComponent }: TopBarProps) => (
  <View style={styles.container}>
    {leftComponent}
    {rightComponent}
  </View>
);
