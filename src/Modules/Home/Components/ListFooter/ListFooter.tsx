import { Add } from 'Assets/SVG';
import { TouchableOpacity, View } from 'react-native';
import styles from './styles';

interface ListFooterProps {
  onPress: () => void;
}

export const ListFooter = ({ onPress }: ListFooterProps) => (
  <View style={styles.footer}>
    <TouchableOpacity style={styles.container} onPress={onPress}>
      <Add />
    </TouchableOpacity>
  </View>
);
