import { View } from 'react-native';
import styles from './styles';
import { AddListButton } from '@components/AddListButton';

interface ListFooterProps {
  onPress: () => void;
}

export const ListFooter = ({ onPress }: ListFooterProps) => (
  <View style={styles.footer}>
    <AddListButton onPress={onPress} />
  </View>
);
